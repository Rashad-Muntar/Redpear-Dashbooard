import express, { Express } from 'express';
import path from 'path';

const app: Express = express();
const port = 3000; // Define the port

app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "css")));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", 'ejs'); // Set the view engine to ejs

app.get("/", (req, res) => {
  res.send("Homepage");
});

(async () => {
  try {
    app.listen(port, () => {
      console.log(`⚡️[server]: App is running at http://localhost:${port}`);
    });
  } catch (error: any) {
    return error.message;
  }
})();
