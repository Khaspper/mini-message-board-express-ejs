import express from "express";
import path from "node:path";
import indexRouter from "./routes";
import newMessageRouter from "./routes/new-message";
const app = express();
app.use("/", indexRouter);
app.use("/new", newMessageRouter);

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Listening on PORT: ${PORT}`);
});
