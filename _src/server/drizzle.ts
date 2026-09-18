import "dotenv/config";
import { drizzle } from "drizzle-orm/node-postgres";
// export const db = drizzle(env.DATABASE_URL, { schema: schema });
import * as schema from "./database/schema";

export const db = drizzle(process.env.DATABASE_URL!, { schema: schema });
