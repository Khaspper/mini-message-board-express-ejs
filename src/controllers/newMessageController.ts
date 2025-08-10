import type { Request, Response } from "express";
import { postMessage } from "../db/queries";

export async function createNewMessage(req: Request, res: Response) {
  const { message, username, added } = req.body;
  await postMessage(message, username, added);
  res.status(201).send("ok");
}
