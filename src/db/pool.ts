import { Pool } from "pg";
import dotenv from "dotenv";

dotenv.config();

const pool = new Pool({
  connectionString:
    process.env.DATABASE_URL ||
    "postgresql://postgres:AYpWzYgiIUOfohydanwbEGKixLXpGThx@switchyard.proxy.rlwy.net:38155/railway",
  ssl: { rejectUnauthorized: false },
});

export default pool;
