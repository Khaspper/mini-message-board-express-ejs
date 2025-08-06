import { Router } from "express";

const newMessageRouter = Router();

newMessageRouter.get("/", (req, res) => {
  const date = new Date();
  res.render("form", { title: "New Message", date: date });
});

newMessageRouter.post("/", (req, res) => {
  const { text, user, added } = req.body;
  const message = {
    text,
    user,
    added: new Date(added),
  };
  req.app.locals.messages.push(message);
  res.status(201).send("ok");
});

export default newMessageRouter;

//TODO: Hook up the post request!!!!!
