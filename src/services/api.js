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
exports.requestHandler = void 0;
const axios_1 = __importDefault(require("axios"));
const requestHandler = (method_1, ...args_1) => __awaiter(void 0, [method_1, ...args_1], void 0, function* (method, data = null, url) {
    try {
        let response;
        switch (method.toLowerCase()) {
            case 'get':
                response = yield axios_1.default.get(url);
                break;
            case 'post':
                response = yield axios_1.default.post(url, data);
                break;
            case 'put':
                response = yield axios_1.default.put(url, data);
                break;
            case 'delete':
                response = yield axios_1.default.delete(url);
                break;
            default:
                throw new Error('Unsupported HTTP method');
        }
        return response.data;
    }
    catch (error) {
        throw error;
    }
});
exports.requestHandler = requestHandler;
