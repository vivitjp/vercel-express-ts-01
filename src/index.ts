import express from 'express'
const app: express.Express = express();

import listWorker from './lib/makeJson';

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  next()
})

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', async (req: express.Request, res: express.Response) => {
  res.sendStatus(404);
});

app.get('/:count', function (req: express.Request, res: express.Response) {
  const count = parseInt(req.params.count);
  if (count > 1) {
    res.send(listWorker(count));
  } else {
    res.send({ "MSG": "Invalid Parameter" });
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server ready at http://localhost:${port}`);
});

export default app;  //モジュール化しないと変数がグローバル化、衝突発生
//jest などで Cannot redeclare block-scoped variable