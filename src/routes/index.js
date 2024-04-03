"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const policy_1 = require("../controllers/policy");
const router = express_1.default.Router();
router.get("/", policy_1.getPolicies);
router.get("/policy/:id", policy_1.getPolicy);
exports.default = router;
