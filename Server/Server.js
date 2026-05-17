import express from "express";
import colors from "colors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./Config/db.js";

const app = express();
dotenv.config({path:'./config.env'});

app.use(express.json());
app.use(morgan("dev"));




dotenv.config();
  
connectDB();




app.get("/", (req, res) => {
    res.send("<h1>Welcome to ecommerce app</h1>");
  });
  
  //PORT
  const PORT = process.env.PORT || 8080;
  
  //run listen
  app.listen(PORT, () => {
    console.log(
      `Server Running on  mode on port ${PORT}`.bgCyan.white
    );
  }); 