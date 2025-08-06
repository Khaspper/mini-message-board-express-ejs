import express from "express";
import path from "node:path";

const app = express();
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Listening on PORT: ${PORT}`);
});
