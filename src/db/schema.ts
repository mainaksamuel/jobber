import {
  boolean,
  integer,
  pgSchema,
  pgTable,
  serial,
  text,
  timestamp,
} from "drizzle-orm/pg-core";

export const jobberSchema = pgSchema("jobber");

export const jobs = jobberSchema.table("jobber-jobs", {
  id: serial("id").primaryKey(),
  slug: text("slug").notNull().unique(),
  title: text("title").notNull(),
  type: text("type").notNull(),
  locationType: text("locationType"),
  location: text("location").default(""),
  description: text("description").default(""),
  salary: integer("salary"),
  companyName: text("companyName"),
  applicationEmail: text("applicationEmail").default(""),
  applicaionUrl: text("applicationUrl").default(""),
  companyLogoUrl: text("companyLogoUrl").default(""),
  approved: boolean("approved").default(false),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().notNull(),
});

// export const jobs = pgTable("jobber-jobs", {
//   id: serial("id").primaryKey(),
//   slug: text("slug").notNull().unique(),
//   title: text("title").notNull(),
//   type: text("type").notNull(),
//   locationType: text("locationType"),
//   location: text("location").default(""),
//   description: text("description").default(""),
//   salary: integer("salary"),
//   companyName: text("companyName"),
//   applicationEmail: text("applicationEmail").default(""),
//   applicaionUrl: text("applicationUrl").default(""),
//   companyLogoUrl: text("companyLogoUrl").default(""),
//   approved: boolean("approved").default(false),
// });
