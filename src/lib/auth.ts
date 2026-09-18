import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { admin } from "better-auth/plugins";
import { nextCookies } from "better-auth/next-js";
import bcrypt from "bcryptjs";
import { db } from "@/server/drizzle";

const isDev = process.env.NODE_ENV === "development";

export const auth = betterAuth({
  plugins: [ admin() ,nextCookies()],

  advanced: {
    database: {
      generateId: "uuid",
    },
  },

  database: drizzleAdapter(db, {
    provider: "pg",
  }),

  emailAndPassword: {
    enabled: true,
    // disableSignUp: true,
    password: {
      hash: async (password) => {
        return await bcrypt.hash(password, 10);
      },
      verify: async ({ hash, password }) => {
        return await bcrypt.compare(password, hash);
      },
    },
  },

  session: {
    // صلاحية الجلسة 7 أيام
    expiresIn: 60 * 60 * 24 * 7,
    // تجديد الجلسة تلقائياً عند كل طلب
    updateAge: 60 * 60 * 24,
    cookieCache: {
      enabled: true,
      maxAge: 60 * 5, // كاش الـ cookie لمدة 5 دقائق
    },
  },

  logger: {
    level: isDev ? "debug" : "error",
  },
});
