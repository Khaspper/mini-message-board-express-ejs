import express from "express";
import path from "node:path";
import indexRouter from "./routes";
import newMessageRouter from "./routes/new-message";

const app = express();
const PORT = 3000;

// Variables
const messages = [
  {
    text: "Hi there!",
    user: "Gumball",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Darwin",
    added: new Date(),
  },
];

app.locals.messages = messages;

// Static imports
app.use(express.static(path.join(__dirname, "public")));

// Routers
app.use("/", indexRouter);
app.use("/new", newMessageRouter);

// ejs
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Server
app.listen(PORT, () => {
  console.log(`Listening on PORT: ${PORT}`);
});
