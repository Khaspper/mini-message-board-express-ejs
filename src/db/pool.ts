import { Pool } from "pg";
import dotenv from "dotenv";

dotenv.config();

// All of the following properties should be read from environment variables
// We're hardcoding them here for simplicity
const pool = new Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: Number(process.env.DB_PORT), // The default port
});

export default pool;
