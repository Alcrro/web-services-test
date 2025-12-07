import "dotenv/config";
import { defineConfig, env } from "prisma/config";
console.log(process.env.DATABASE_URL);

export default defineConfig({
  schema: "prisma/schema.prisma",
  datasource: {
    url: env("DATABASE_URL"),

    // if you have a shadow database URL or other datasource settings, add them here
    // shadowDatabaseUrl: env("SHADOW_DATABASE_URL"),
  },
  // migrations, client and other config — if needed
});
