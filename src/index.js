// require("dotenv").config({path: './env'});
import dotenv from "dotenv";

import connectDB from "./db/index.js";

dotenv.config({ path: "./env" });
connectDB();

// First Approach to connect database : With Function
/*
import express from "express";
const app = express()(async () => {
  try {
    await mongoose.connect(`${precess.env.MONGODB_URI}/${DB_NAME}`);
    app.on("errror", (error) => {
      console.log("ERRR: ", error);
      throw error;
    });
    app.listen(process.env.PORT, () => {
      console.log(`App is listening port : ${process.env.PORT} `);
    });
  } catch (error) {
    console.error("ERROR: ", error);
    throw error;
  }
})();
*/
