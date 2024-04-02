import express, { Express } from 'express';
import path from 'path';
import dotenv from 'dotenv';
import router from './routes';
dotenv.config();

const app: Express = express();
const port: number = Number(process.env.PORT) || 3000;

app.use(express.static('public'));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "css")));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", 'ejs'); 

app.use('/', router);

(async () => {
  try {
    app.listen(port, () => {
      console.log(`⚡️[server]: App is running at http://localhost:${port}`);
    });
  } catch (error: any) {
    return error.message;
  }
})();
