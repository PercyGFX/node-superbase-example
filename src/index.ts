import express from "express";
const app = express();
import * as dotenv from "dotenv";
dotenv.config();
import supabase from "./utils/superbase.js";

app.get("/", (req, res) => {
  res.send("helloo");
});

const port = process.env.PORT || 5000; // Default to port 3000 if PORT environment variable is not set

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
