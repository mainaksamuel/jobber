const { db } = require("@vercel/postgres");
const { placeholderJobs } = require("./placeholder-data.js");

async function seedJobs(client) {
  try {
    // Insert data into the "jobber-jobs" table
    const insertedJobs = await Promise.all(
      placeholderJobs.map(async (job) => {
        return client.sql`
        INSERT INTO "jobber_jobs" (title, job_type, company_name, location_type, location, application_email, application_url, slug, salary, approved, description)
        VALUES (${job.title}, ${job.jobType}, ${job.companyName}, ${job.locationType}, ${job.location}, ${job.applicationEmail}, ${job.applicationUrl}, ${job.slug}, ${job.salary}, ${job.approved}, ${job.description})
        ON CONFLICT (id) DO NOTHING;
      `;
      }),
    );

    console.log(`Seeded ${insertedJobs.length} jobs`);
    return {
      jobs: insertedJobs,
    };
  } catch (error) {
    console.error("Error seeding jobs:", error);
    throw error;
  }
}

async function main() {
  const client = await db.connect();

  await seedJobs(client);

  await client.end();
}

main().catch((err) => {
  console.error(
    "An error occurred while attempting to seed the database:",
    err,
  );
});
