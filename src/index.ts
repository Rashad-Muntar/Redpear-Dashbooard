import express, { Express } from 'express';
import path from 'path';
import dotenv from 'dotenv';
import router from './routes';

dotenv.config();

const app: Express = express();
const port: number = Number(process.env.PORT) || 3000;

// Serve static files from the public directory
app.use(express.static("public"));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", 'ejs'); 

// app.use('/', router);
app.get("/", (req, res) => {
  res.send("HOMEPAGE")
})

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
