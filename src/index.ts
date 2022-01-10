import express from 'express'
const app: express.Express = express();

import { getJson } from './lib/getJson';

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  next()
})

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', async (req: any, res: any) => {
  try {
    const ans2 = getJson("Steve");
    res.send(ans2);
  } catch (error) {
    res.sendStatus(500);
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server ready at http://localhost:${port}`);
});

export default app;  //モジュール化しないと変数がグローバル化、衝突発生
//jest などで Cannot redeclare block-scoped variable