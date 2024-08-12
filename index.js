import express from "express";
import bookrouter from "./src/book/book.route.js";
import authorrouter from "./src/author/author.route.js";
import connectionDB from "./db/connectionDB.js";

const app = express();
const port = 3000;
connectionDB()
app.use(express.json());
app.use("/books", bookrouter);
app.use("/author", authorrouter);
app.get("*", (req, res, next) => res.send("404 not foundd!"));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
