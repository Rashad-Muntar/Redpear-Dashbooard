import express from "express";
import { Request, Response } from 'express'
import { getPolicies, getPolicy } from "../controllers/policy";
const router = express.Router();


router.get("/", () =>  (req: Request, res: Response) => {
    res.send("HOME PAGE")
});
router.get("/policy/:id", getPolicy);

export default router;
