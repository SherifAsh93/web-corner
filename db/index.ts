import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema";

// This connects to the database using the URL in your .env.local file
const sql = neon(process.env.DATABASE_URL!);

// This 'db' object is what we will use to run queries (Insert, Select, Delete)
export const db = drizzle(sql, { schema });
