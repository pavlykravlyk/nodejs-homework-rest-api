const express = require("express");
const logger = require("morgan");
const cors = require("cors");

// const multer = require("multer");
// const upload = multer();

const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";
const HTTP_STATUS_CODES = require("./lib/constants");

const authRouter = require("./routes/api/auth");
const contactsRouter = require("./routes/api/contacts");
const usersRouter = require("./routes/api/users");

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.use("/api/auth", authRouter);
app.use("/api/contacts", contactsRouter);
app.use("/api/users", usersRouter);

app.use((req, res) => {
  res.status(HTTP_STATUS_CODES.NOT_FOUND).json({ message: "Not found" });
});
app.use((err, req, res, next) => {
  res
    .status(HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR)
    .json({ message: err.message });
});

module.exports = app;
