// src/db/seed.ts
// يشغّل مرة واحدة لنقل البيانات الـ hardcoded إلى قاعدة البيانات
// تشغيل: npx tsx src/db/seed.ts

import { auth } from "@/lib/auth";
import { authClient } from "@/lib/auth-client";
import { packages, fillings, settings, user } from "@/server/database/schema";
import { db } from "@/server/drizzle";
import { hash } from "bcryptjs";

async function seed() {
  console.log("🌱 بدء الـ seed...");

  // ─── 1. البكجات ───────────────────────────────────────
  //   await db.delete(packages);
  //   await db.insert(packages).values([
  //     // الاقتصادية
  //     {
  //       size: 3,
  //       unit: "صواني",
  //       persons: "20 شخص",
  //       newPrice: 435,
  //       oldPrice: 540,
  //       type: "econ",
  //       sortOrder: 1,
  //     },
  //     {
  //       size: 5,
  //       unit: "صواني",
  //       persons: "40 شخص",
  //       newPrice: 720,
  //       oldPrice: 900,
  //       type: "econ",
  //       sortOrder: 2,
  //     },
  //     {
  //       size: 8,
  //       unit: "صواني",
  //       persons: "70-50 شخص",
  //       newPrice: 1150,
  //       oldPrice: 1440,
  //       type: "econ",
  //       sortOrder: 3,
  //     },
  //     {
  //       size: 12,
  //       unit: "صينية",
  //       persons: "100-70 شخص",
  //       newPrice: 1720,
  //       oldPrice: 2160,
  //       type: "econ",
  //       sortOrder: 4,
  //     },
  //     {
  //       size: 16,
  //       unit: "صينية",
  //       persons: "140-110 شخص",
  //       newPrice: 2300,
  //       oldPrice: 2880,
  //       type: "econ",
  //       sortOrder: 5,
  //     },
  //     {
  //       size: 20,
  //       unit: "صينية",
  //       persons: "شخص+",
  //       newPrice: 3600,
  //       oldPrice: null,
  //       type: "econ",
  //       sortOrder: 6,
  //     },
  //     // VIP
  //     {
  //       size: 4,
  //       unit: "صواني",
  //       persons: "40-30 شخص",
  //       newPrice: 720,
  //       oldPrice: 960,
  //       type: "vip",
  //       sortOrder: 7,
  //     },
  //     {
  //       size: 6,
  //       unit: "صواني",
  //       persons: "70-50 شخص",
  //       newPrice: 1080,
  //       oldPrice: 1350,
  //       type: "vip",
  //       sortOrder: 8,
  //     },
  //     {
  //       size: 10,
  //       unit: "صينية",
  //       persons: "100-70 شخص",
  //       newPrice: 1800,
  //       oldPrice: 2250,
  //       type: "vip",
  //       sortOrder: 9,
  //     },
  //     {
  //       size: 14,
  //       unit: "صينية",
  //       persons: "150-100 شخص",
  //       newPrice: 2520,
  //       oldPrice: 3150,
  //       type: "vip",
  //       sortOrder: 10,
  //     },
  //     {
  //       size: 20,
  //       unit: "صينية",
  //       persons: "250-200 شخص",
  //       newPrice: 3600,
  //       oldPrice: 4500,
  //       type: "vip",
  //       sortOrder: 11,
  //     },
  //     {
  //       size: 30,
  //       unit: "صينية",
  //       persons: "350-300 شخص",
  //       newPrice: 5400,
  //       oldPrice: 6750,
  //       type: "vip",
  //       sortOrder: 12,
  //     },
  //   ]);
  //   console.log("✅ packages — تم");

  //   // ─── 2. المحاشي ───────────────────────────────────────
  //   await db.delete(fillings);
  //   await db.insert(fillings).values([
  //     {
  //       name: "بندق محمص",
  //       imageUrl: "https://ik.imagekit.io/m0mtj6qx9/chocolate/image%20(1).jpeg",
  //       sortOrder: 1,
  //     },
  //     {
  //       name: "تشيز كيك",
  //       imageUrl: "https://ik.imagekit.io/m0mtj6qx9/chocolate/image%20(23).jpeg",
  //       sortOrder: 2,
  //     },
  //     {
  //       name: "أوريو كريمي",
  //       imageUrl: "https://ik.imagekit.io/m0mtj6qx9/chocolate/image%20(24).jpeg",
  //       sortOrder: 3,
  //     },
  //     {
  //       name: "فلورنتين بالصنوبر",
  //       imageUrl: "https://ik.imagekit.io/m0mtj6qx9/chocolate/image%20(25).jpeg",
  //       sortOrder: 4,
  //     },
  //     {
  //       name: "فلورنتين ديري",
  //       imageUrl: "https://ik.imagekit.io/m0mtj6qx9/chocolate/image%20(26).jpeg",
  //       sortOrder: 5,
  //     },
  //     {
  //       name: "فول سوداني وورد",
  //       imageUrl: "https://ik.imagekit.io/m0mtj6qx9/chocolate/image%20(27).jpeg",
  //       sortOrder: 6,
  //     },
  //     {
  //       name: "قهوة بالهيل",
  //       imageUrl: "https://ik.imagekit.io/m0mtj6qx9/chocolate/image%20(28).jpeg",
  //       sortOrder: 7,
  //     },
  //     {
  //       name: "قهوة بالكراميل",
  //       imageUrl: "https://ik.imagekit.io/m0mtj6qx9/chocolate/image%20(29).jpeg",
  //       sortOrder: 8,
  //     },
  //     {
  //       name: "قهوة بالزعفران",
  //       imageUrl: "https://ik.imagekit.io/m0mtj6qx9/chocolate/image%20(30).jpeg",
  //       sortOrder: 9,
  //     },
  //     {
  //       name: "عين جمل مربع",
  //       imageUrl: "https://ik.imagekit.io/m0mtj6qx9/chocolate/image%20(31).jpeg",
  //       sortOrder: 10,
  //     },
  //     {
  //       name: "فستق مربع",
  //       imageUrl: "https://ik.imagekit.io/m0mtj6qx9/chocolate/image%20(32).jpeg",
  //       sortOrder: 11,
  //     },
  //     {
  //       name: "بيكان مستطيل",
  //       imageUrl: "https://ik.imagekit.io/m0mtj6qx9/chocolate/image%20(33).jpeg",
  //       sortOrder: 12,
  //     },
  //     {
  //       name: "نعنع وليمون",
  //       imageUrl: "https://ik.imagekit.io/m0mtj6qx9/chocolate/image%20(35).jpeg",
  //       sortOrder: 13,
  //     },
  //     {
  //       name: "لوتس بالكراميل",
  //       imageUrl: "https://ik.imagekit.io/m0mtj6qx9/chocolate/image%20(36).jpeg",
  //       sortOrder: 14,
  //     },
  //     {
  //       name: "لوتس كريمي",
  //       imageUrl: "https://ik.imagekit.io/m0mtj6qx9/chocolate/image%20(37).jpeg",
  //       sortOrder: 15,
  //     },
  //     {
  //       name: "هيل فاخر",
  //       imageUrl: "https://ik.imagekit.io/m0mtj6qx9/chocolate/image%20(38).jpeg",
  //       sortOrder: 16,
  //     },
  //     {
  //       name: "بريتزل مقرمش",
  //       imageUrl: "https://ik.imagekit.io/m0mtj6qx9/chocolate/image%20(39).jpeg",
  //       sortOrder: 17,
  //     },
  //     {
  //       name: "بيكان كامل",
  //       imageUrl: "https://ik.imagekit.io/m0mtj6qx9/chocolate/image%20(40).jpeg",
  //       sortOrder: 18,
  //     },
  //     {
  //       name: "قبة بيضاء",
  //       imageUrl: "https://ik.imagekit.io/m0mtj6qx9/chocolate/image%20(41).jpeg",
  //       sortOrder: 19,
  //     },
  //     {
  //       name: "أعواد بسكويت",
  //       imageUrl: "https://ik.imagekit.io/m0mtj6qx9/chocolate/image%20(43).jpeg",
  //       sortOrder: 20,
  //     },
  //     {
  //       name: "أوريو فضي",
  //       imageUrl: "https://ik.imagekit.io/m0mtj6qx9/chocolate/image%20(44).jpeg",
  //       sortOrder: 21,
  //     },
  //     {
  //       name: "مانجو",
  //       imageUrl: "https://ik.imagekit.io/m0mtj6qx9/chocolate/image%20(45).jpeg",
  //       sortOrder: 22,
  //     },
  //     {
  //       name: "رمان مربع",
  //       imageUrl: "https://ik.imagekit.io/m0mtj6qx9/chocolate/image%20(46).jpeg",
  //       sortOrder: 23,
  //     },
  //     {
  //       name: "بيكان داكن",
  //       imageUrl: "https://ik.imagekit.io/m0mtj6qx9/chocolate/image%20(47).jpeg",
  //       sortOrder: 24,
  //     },
  //     {
  //       name: "عين جمل دائري",
  //       imageUrl: "https://ik.imagekit.io/m0mtj6qx9/chocolate/image%20(48).jpeg",
  //       sortOrder: 25,
  //     },
  //     {
  //       name: "بيكان ذهبي",
  //       imageUrl: "https://ik.imagekit.io/m0mtj6qx9/chocolate/image%20(49).jpeg",
  //       sortOrder: 26,
  //     },
  //     {
  //       name: "ليمون",
  //       imageUrl: "https://ik.imagekit.io/m0mtj6qx9/chocolate/image%20(50).jpeg",
  //       sortOrder: 27,
  //     },
  //     {
  //       name: "أعواد رمان",
  //       imageUrl: "https://ik.imagekit.io/m0mtj6qx9/chocolate/image%20(51).jpeg",
  //       sortOrder: 28,
  //     },
  //     {
  //       name: "بسكويت",
  //       imageUrl: "https://ik.imagekit.io/m0mtj6qx9/chocolate/image%20(52).jpeg",
  //       sortOrder: 29,
  //     },
  //     {
  //       name: "فستق ورمان",
  //       imageUrl: "https://ik.imagekit.io/m0mtj6qx9/chocolate/image%20(53).jpeg",
  //       sortOrder: 30,
  //     },
  //     {
  //       name: "بيكان فاخر",
  //       imageUrl: "https://ik.imagekit.io/m0mtj6qx9/chocolate/image%20(54).jpeg",
  //       sortOrder: 31,
  //     },
  //   ]);
  //   console.log("✅ fillings — تم");

  //   // ─── 3. الإعدادات ─────────────────────────────────────
  //   await db.delete(settings);
  //   await db.insert(settings).values([
  //     { key: "whatsapp_number", value: "+966534611644" },
  //     { key: "weekday_opens", value: "10:00" },
  //     { key: "weekday_closes", value: "23:00" },
  //     { key: "friday_opens", value: "14:00" },
  //     { key: "friday_closes", value: "23:59" },
  //     { key: "announcement_bar", value: "" },
  //   ]);
  //   console.log("✅ settings — تم");

  // ─── 4. حساب الأدمن ──────────────────────────────────
  // ⚠️ غيّر الإيميل والباسورد قبل الـ deploy

  //   await auth.api
  //     .createUser({
  //       body: {
  //         email: adminEmail,
  //         password: passwordHash,
  //         name: adminName,
  //       },
  //     })
  //     .catch((e) => {
  //       if (e.status === 409) {
  //         console.log(`⚠️ حساب الأدمن موجود بالفعل: ${adminEmail}`);
  //       } else {
  //         throw e;
  //       }
  //     });

  // Better Auth يتولى الـ password عبر جدول account
  // لكن نحتاج نضيف السجل يدوياً في seed
  //   const { account } = await import("./schema");
  //   await db
  //     .insert(account)
  //     .values({
  //       id: crypto.randomUUID(),
  //       userId: (
  //         await db.query.user.findFirst({
  //           where: (u, { eq }) => eq(u.email, adminEmail),
  //         })
  //       )!.id,
  //       accountId: adminEmail,
  //       providerId: "credential",
  //       password: passwordHash,
  //     })
  //     .onConflictDoNothing();

  console.log(`✅ admin — ${adminEmail}`);
  console.log("🎉 الـ seed اكتمل!");
  process.exit(0);
}

seed().catch((e) => {
  console.error("❌ خطأ في الـ seed:", e);
  process.exit(1);
});
