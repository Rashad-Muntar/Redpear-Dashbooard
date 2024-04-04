"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPolicyService = exports.getPoliciesService = void 0;
const axios_1 = __importDefault(require("axios"));
const dotenv_1 = __importDefault(require("dotenv"));
const api_1 = require("./api");
dotenv_1.default.config();
const baseUrl = process.env.API_ENDPOINT || "";
const getPoliciesService = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const policies = (0, api_1.requestHandler)('get', null, `${baseUrl}/policies`);
        return policies;
    }
    catch (error) {
        return error.message;
    }
});
exports.getPoliciesService = getPoliciesService;
const getPolicyService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const policy = yield (0, axios_1.default)({
            method: 'get',
            url: `${baseUrl}/policy`,
            data: {
                id: id
            }
        });
        return policy;
    }
    catch (error) {
        return error.message;
    }
});
exports.getPolicyService = getPolicyService;
