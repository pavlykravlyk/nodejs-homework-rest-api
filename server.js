const mongoose = require("mongoose");
const app = require("./app");
require("dotenv").config();

const PORT = process.env.PORT || 3001;
const DB_HOST = process.env.DB_HOST;

(async () => {
  try {
    const response = await mongoose.connect(DB_HOST);
    if (response) {
      app.listen(PORT, (error) => {
        console.log(`Server running. Use our API on port: ${PORT}`);
        error && console.error(error.message);
      });

      console.log("Database connection successful");
    }
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
})();
