import pool from "./pool";

export async function getAllMessages() {
  const { rows } = await pool.query(`SELECT * FROM messages`);
  return rows;
}

export async function postMessage(
  message: string,
  username: string,
  added: Date
) {
  await pool.query(
    "INSERT INTO messages (username, added, message) VALUES ($1, $2, $3)",
    [username, new Date(added), message]
  );
}
