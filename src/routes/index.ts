import express from "express";
import { getPolicies } from "../controllers/policy";


const router = express.Router();

router.get("/", getPolicies);


export default router;
