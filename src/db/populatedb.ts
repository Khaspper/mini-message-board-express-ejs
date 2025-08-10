import { Client } from "pg";
import dotenv from "dotenv";
dotenv.config();

const username = "Test";
const createdAt = new Date();
const message = "This is the NEWEST TEST!!!";

async function main() {
  console.log("Seeding...");
  const connectionString =
    "postgresql://postgres:AYpWzYgiIUOfohydanwbEGKixLXpGThx@postgres.railway.internal:5432/railway";
  const client = new Client({
    connectionString,
    ssl: { rejectUnauthorized: false },
  });
  await client.connect();
  await client.query(
    `CREATE TABLE IF NOT EXISTS messages (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    username VARCHAR ( 255 ),
    added TIMESTAMPTZ DEFAULT NOW(),
    message VARCHAR( 200 ));`
  );
  await client.query(
    `INSERT INTO messages (username, added, message) VALUES ($1, $2, $3);`,
    [username, createdAt, message]
  );
  await client.end();
  console.log("done");
}
main();
