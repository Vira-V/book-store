const express = require("express");
const cors = require("cors");

const books = require("./books");

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Welcome to online library API...");
});

app.get("/books", (req, res) => {
  res.send(books);
});

const port = process.env.PORT || 5000;

app.listen(port, console.log(`Server running on port ${port}`));