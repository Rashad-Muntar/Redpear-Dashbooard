import express from "express";
import { Request, Response } from 'express'
import { getPolicies, getPolicy } from "../controllers/policy";
const router = express.Router();


router.get("/", (req: Request, res: Response) => {
    getPolicies(req, res)
});

router.get("/policy/:id", getPolicy);

export default router;
