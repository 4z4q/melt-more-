"use server";

import { eq, and, asc, desc } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { db } from "./drizzle";
import { packages } from "./database/schema";
import { PackageFormValues, packageSchema } from "./schema_client";

// ─────────────────────────────────────────
// Validation Schema
// ─────────────────────────────────────────

// ─────────────────────────────────────────
// Types
// ─────────────────────────────────────────

type ApiResponse<T = packages | packages[]> = {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
};

// ─────────────────────────────────────────
// CREATE
// ─────────────────────────────────────────

export async function createPackage(
  data: PackageFormValues
): Promise<ApiResponse<packages>> {
  try {
    const parsed = packageSchema.safeParse(data);
    if (!parsed.success) {
      return {
        success: false,
        error: parsed.error?.message ?? "بيانات غير صحيحة",
      };
    }

    // التحقق من عدم التكرار (نفس الحجم + النوع)
    const existing = await db
      .select({ id: packages.id })
      .from(packages)
      .where(
        and(
          eq(packages.size, parsed.data.size),
          eq(packages.type, parsed.data.type),
          eq(packages.unit, parsed.data.unit)
        )
      )
      .limit(1);

    if (existing.length > 0) {
      return {
        success: false,
        error: "يوجد بكج بنفس الحجم والنوع والوحدة مسبقاً",
      };
    }

    const [newPackage] = await db
      .insert(packages)
      .values({
        ...parsed.data,
        label: parsed.data.label || null,
        oldPrice: parsed.data.oldPrice ?? null,
      })
      .returning();

    revalidatePath("/dashboard/packages");

    return {
      success: true,
      data: newPackage,
      message: "تم إضافة البكج بنجاح",
    };
  } catch (error) {
    console.error("[createPackage]", error);
    return { success: false, error: "حدث خطأ غير متوقع، حاول مجدداً" };
  }
}

// ─────────────────────────────────────────
// READ — all
// ─────────────────────────────────────────

export async function getPackages(): Promise<ApiResponse<packages[]>> {
  try {
    const all = await db
      .select()
      .from(packages)
      .orderBy(asc(packages.sortOrder), desc(packages.createdAt));

    return { success: true, data: all };
  } catch (error) {
    console.error("[getPackages]", error);
    return { success: false, error: "فشل تحميل البكجات", data: [] };
  }
}

// ─────────────────────────────────────────
// READ — single
// ─────────────────────────────────────────

export async function getPackageById(
  id: string
): Promise<ApiResponse<packages>> {
  try {
    if (!id) return { success: false, error: "معرّف البكج مطلوب" };

    const [pkg] = await db
      .select()
      .from(packages)
      .where(eq(packages.id, id))
      .limit(1);

    if (!pkg) return { success: false, error: "البكج غير موجود" };

    return { success: true, data: pkg };
  } catch (error) {
    console.error("[getPackageById]", error);
    return { success: false, error: "حدث خطأ غير متوقع" };
  }
}

// ─────────────────────────────────────────
// UPDATE
// ─────────────────────────────────────────

export async function updatePackage(
  id: string,
  data: PackageFormValues
): Promise<ApiResponse<packages>> {
  try {
    if (!id) return { success: false, error: "معرّف البكج مطلوب" };

    const parsed = packageSchema.safeParse(data);
    if (!parsed.success) {
      return {
        success: false,
        error: parsed.error?.message ?? "بيانات غير صحيحة",
      };
    }

    // التحقق من التكرار مع استثناء البكج الحالي
    const existing = await db
      .select({ id: packages.id })
      .from(packages)
      .where(
        and(
          eq(packages.size, parsed.data.size),
          eq(packages.type, parsed.data.type),
          eq(packages.unit, parsed.data.unit)
        )
      )
      .limit(1);

    if (existing.length > 0 && existing[0].id !== id) {
      return {
        success: false,
        error: "يوجد بكج آخر بنفس الحجم والنوع والوحدة",
      };
    }

    const [updated] = await db
      .update(packages)
      .set({
        ...parsed.data,
        label: parsed.data.label || null,
        oldPrice: parsed.data.oldPrice ?? null,
        updatedAt: new Date(),
      })
      .where(eq(packages.id, id))
      .returning();

    if (!updated) return { success: false, error: "البكج غير موجود" };

    revalidatePath("/dashboard/packages");

    return { success: true, data: updated, message: "تم تحديث البكج بنجاح" };
  } catch (error) {
    console.error("[updatePackage]", error);
    return { success: false, error: "حدث خطأ غير متوقع، حاول مجدداً" };
  }
}

// ─────────────────────────────────────────
// TOGGLE isActive
// ─────────────────────────────────────────

export async function togglePackageActive(
  id: string,
  isActive: boolean
): Promise<ApiResponse<packages>> {
  try {
    const [updated] = await db
      .update(packages)
      .set({ isActive, updatedAt: new Date() })
      .where(eq(packages.id, id))
      .returning();

    revalidatePath("/dashboard/packages");

    return {
      success: true,
      data: updated,
      message: isActive ? "تم تفعيل البكج" : "تم إيقاف البكج",
    };
  } catch (error) {
    console.error("[togglePackageActive]", error);
    return { success: false, error: "حدث خطأ غير متوقع" };
  }
}

// ─────────────────────────────────────────
// DELETE
// ─────────────────────────────────────────

export async function deletePackage(id: string): Promise<ApiResponse<null>> {
  try {
    if (!id) return { success: false, error: "معرّف البكج مطلوب" };

    const [existing] = await db
      .select({ id: packages.id })
      .from(packages)
      .where(eq(packages.id, id))
      .limit(1);

    if (!existing) return { success: false, error: "البكج غير موجود" };

    await db.delete(packages).where(eq(packages.id, id));

    revalidatePath("/dashboard/packages");

    return { success: true, message: "تم حذف البكج بنجاح" };
  } catch (error) {
    console.error("[deletePackage]", error);
    return { success: false, error: "حدث خطأ غير متوقع" };
  }
}
