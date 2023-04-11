import * as express from "express";

const app: express.Express = express();
const port: number = 8000;

app.get("/test", (req: express.Request, res: express.Response) => {
  console.log(req);
  res.send({ name: "hwang min hyun", age: 29, friends: ["ss", "yy", "us"] });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
