import { Router } from "express";
const indexRouter = Router();

indexRouter.get("/", (req, res) => {
  console.log(req.app.locals.messages);
  res.render("index", { title: "Message Board" });
});

export default indexRouter;
