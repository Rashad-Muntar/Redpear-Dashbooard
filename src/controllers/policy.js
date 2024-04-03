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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPolicy = exports.getPolicies = void 0;
const policy_1 = require("../services/policy");
const getPolicies = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const policies = yield (0, policy_1.getPoliciesService)();
        res.render('index', { data: (_a = policies === null || policies === void 0 ? void 0 : policies.data) === null || _a === void 0 ? void 0 : _a.data, title: 'Policies' });
    }
    catch (error) {
        console.log(error);
    }
});
exports.getPolicies = getPolicies;
const getPolicy = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _b, _c;
    const { id } = req.params;
    try {
        const policy = yield (0, policy_1.getPolicyService)(id);
        res.render('details', { data: (_c = (_b = policy === null || policy === void 0 ? void 0 : policy.data) === null || _b === void 0 ? void 0 : _b.data) === null || _c === void 0 ? void 0 : _c.policy, title: 'Policy' });
    }
    catch (error) {
        console.log(error);
    }
});
exports.getPolicy = getPolicy;
