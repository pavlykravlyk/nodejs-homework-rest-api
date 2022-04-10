const express = require("express");
const logger = require("morgan");
const cors = require("cors");

const app = express();
const contactsRouter = require("./routes/api/contacts");
const formatsLogger = app.get("env") === "development" ? "dev" : "short";
const HTTP_STATUS_CODES = require("./lib/constants");

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());
app.use("/api/contacts", contactsRouter);
app.use((req, res) => {
  res.status(HTTP_STATUS_CODES.NOT_FOUND).json({ message: "Not found" });
});
app.use((err, req, res, next) => {
  res
    .status(HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR)
    .json({ message: err.message });
});

module.exports = app;
