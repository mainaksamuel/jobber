import {
  boolean,
  integer,
  pgSchema,
  pgTable,
  serial,
  text,
  timestamp,
} from "drizzle-orm/pg-core";

/* schema approach does not seem to work for vercel with drizzle
 * table creation and changes are not being pushed to vercel postgres
 */
// export const jobberSchema = pgSchema("jobber");
// export const jobs = jobberSchema.table("jobber_jobs", {
// id: serial("id").primaryKey(),
// slug: text("slug").notNull().unique(),
// title: text("title").notNull(),
// jobType: text("job_type").notNull(),
// locationType: text("location_type"),
// location: text("location").default(""),
// description: text("description").default(""),
// salary: integer("salary"),
// companyName: text("company_name"),
// applicationEmail: text("application_email").default(""),
// applicaionUrl: text("application_url").default(""),
// companyLogoUrl: text("company_logo_url").default(""),
// approved: boolean("approved").default(false),
// createdAt: timestamp("created_at").defaultNow().notNull(),
// updatedAt: timestamp("updated_at").defaultNow().notNull(),
// });

export const jobs = pgTable("jobber_jobs", {
  id: serial("id").primaryKey(),
  slug: text("slug").notNull().unique(),
  title: text("title").notNull(),
  jobType: text("job_type").notNull(),
  locationType: text("location_type"),
  location: text("location").default(""),
  description: text("description").default(""),
  salary: integer("salary"),
  companyName: text("company_name"),
  applicationEmail: text("application_email").default(""),
  applicaionUrl: text("application_url").default(""),
  companyLogoUrl: text("company_logo_url").default(""),
  approved: boolean("approved").default(false),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});
