import express from "express";
import { getPolicies, getPolicy } from "../controllers/policy";
const router = express.Router();

router.get("/",  getPolicies);
router.get("/policy/:id", getPolicy);

export default router;
