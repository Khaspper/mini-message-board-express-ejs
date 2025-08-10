import type { Request, Response } from "express";
import { getAllMessages } from "../db/queries";

export async function getMessages(req: Request, res: Response) {
  const messages = await getAllMessages();
  res.render("index", { title: "Message Board", messages: messages });
}
