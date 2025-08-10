import { Router } from "express";
import { createNewMessage } from "../controllers/newMessageController";

const newMessageRouter = Router();

newMessageRouter.get("/", (req, res) => {
  const date = new Date();
  res.render("form", { title: "New Message", date: date });
});

newMessageRouter.post("/", createNewMessage);

export default newMessageRouter;
