import { defineConfig } from "drizzle-kit";

export default defineConfig({
  // Change this line:
  schema: "./db/schema.ts",

  out: "./drizzle",
  dialect: "postgresql",
  dbCredentials: {
    url: "postgresql://neondb_owner:npg_wYHleQ5MGX9N@ep-steep-resonance-ahctbjr8-pooler.c-3.us-east-1.aws.neon.tech/neondb?sslmode=require",
  },
});
