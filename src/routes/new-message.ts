import { Router } from "express";

const newMessageRouter = Router();

newMessageRouter.get("/", (req, res) => {
  const date = new Date();
  res.render("form", { title: "New Message", date: date });
});

export default newMessageRouter;
