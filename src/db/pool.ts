import { Pool } from "pg";
import dotenv from "dotenv";

dotenv.config();

const pool = new Pool({
  connectionString:
    process.env.DATABASE_URL ||
    "postgresql://postgres:AYpWzYgiIUOfohydanwbEGKixLXpGThx@postgres.railway.internal:5432/railway",
  ssl: { rejectUnauthorized: false },
});

export default pool;
