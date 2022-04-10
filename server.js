const mongoose = require("mongoose");
const app = require("./app");
const { PORT = 3001, DB_HOST } = process.env;

(() => {
  try {
    if (
      mongoose.connect(DB_HOST, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
    ) {
      app.listen(PORT, (error) => {
        console.log(`Server running. Use our API on port: ${PORT}`);
        error && console.error(error.message);
      });

      console.log("DB connection successful");
    }
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
})();
