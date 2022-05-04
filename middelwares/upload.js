const multer = require("multer");
const path = require("path");

const upload = multer({
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, path.join(__dirname, "../temp"));
    },

    filename: (req, file, cb) => {
      cb(null, file.originalname);
    },

    limits: {
      fileSize: 2048,
    },
  }),
});

module.exports = upload;
