import { Router } from "express";

const newMessageRouter = Router();

newMessageRouter.get("/", (req, res) => {
  const date = new Date();
  res.render("form", { title: "New Message", date: date });
});

newMessageRouter.post("/", (req, res) => {
  res.status(201).send("Ok!");
});

export default newMessageRouter;

//TODO: Hook up the post request!!!!!
