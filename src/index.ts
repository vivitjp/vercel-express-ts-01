const express = require('express');
const app = express();

import { getJson } from './getJson';
import { getJsonAsync } from './getJsonAsync';

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', async (req: any, res: any) => {
  try {
    const ans1 = await getJsonAsync("Gates");
    const ans2 = getJson("Steve");
    res.send([ans1, ans2]);
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