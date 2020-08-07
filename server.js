const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const path = require("path"); // to get path to files like index.html
const colors = require("colors");

// Load env vars
dotenv.config({ path: "./config/config.env" });

// Route files
const searches = require("./routes/search-algos.ts");
const sorts = require("./routes/sort-algos.ts");

const app = express();

// Body parser
app.use(express.json());
app.use(cors());

// Mount files
app.use("/api/v1/search-algorithms", searches);

// Get port to be connected to
const PORT = process.env.PORT || 5000;

// Handle unhandled promise rejections
process.on("unhandledRejection", (err, promise) => {
  console.log(`Error: ${err.message}`.red);
  // Close server and exit process
  server.close(() => process.exit(1));
});

const server = app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);