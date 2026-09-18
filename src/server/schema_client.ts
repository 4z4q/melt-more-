import { z } from "zod";
export const packageSchema = z.object({
  label: z.string().max(100).optional().or(z.literal("")),
  size: z
    .number({ error: "الحجم مطلوب" })
    .int()
    .positive("الحجم يجب أن يكون رقماً موجباً"),
  unit: z.enum(["صواني", "صينية"], {
    required_error: "الوحدة مطلوبة",
  }),
  persons: z
    .string({ error: "عدد الأشخاص مطلوب" })
    .min(1, "عدد الأشخاص مطلوب")
    .max(50),
  newPrice: z
    .number({ error: "السعر مطلوب" })
    .int()
    .positive("السعر يجب أن يكون رقماً موجباً"),
  oldPrice: z.number().int().positive().nullable().optional(),
  type: z.enum(["econ", "vip"], { required_error: "النوع مطلوب" }),
  isActive: z.boolean().default(true),
  sortOrder: z.number().int().min(0).default(0),
});

export type PackageFormValues = z.infer<typeof packageSchema>;
