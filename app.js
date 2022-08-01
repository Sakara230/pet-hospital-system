const express = require("express");
const app = express();
const port = 3000;
const information = require("./routes/information");
const connectDB = require("./db/connect");
require("dotenv").config();

// middleware
app.use(express.static("./public"));
app.use(express.json());

// routes
app.use("/api/v1/information", information);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}!`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
