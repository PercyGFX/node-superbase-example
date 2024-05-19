import express from "express";
import { getusers } from "../controllers/supabaseController.js";
const router = express.Router();





// login endpoint
router.get("/users", getusers);

// register endpoint

router.post("/register");

export default router;
