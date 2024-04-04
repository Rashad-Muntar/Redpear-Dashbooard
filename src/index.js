"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = Number(process.env.PORT) || 3000;
// Serve static files from the public directory
app.set("views", path_1.default.join(__dirname, "views"));
app.set("view engine", 'ejs');
app.use(express_1.default.static("public"));
// app.use('/', router);
app.get("/", (req, res) => {
    res.send("HOMEPAGE");
});
app.listen(port, () => {
    console.log(`⚡️[server]: App is running at http://localhost:${port}`);
});
// (async () => {
//   try {
//     app.listen(port, () => {
//       console.log(`⚡️[server]: App is running at http://localhost:${port}`);
//     });
//   } catch (error: any) {
//     return error.message;
//   }
// })();
