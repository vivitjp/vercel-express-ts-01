import express from 'express'
import namePersonName from 'src/lib/makeJson'

const app: express.Express = express()

// CORSの許可
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  next()
})

// body-parserに基づいた着信リクエストの解析
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// GetとPostのルーティング
const router: express.Router = express.Router()
router.get('/apiget', (req: express.Request, res: express.Response) => {
  //const str_out: string = "Hello " + req.query.name + "\n"

  const numStr: string = req.query.nums as string;
  const numInt: number = parseInt(numStr) || 10;
  const list = namePersonName(numInt)
  res.send(list)
})

router.post('/apipost', (req: express.Request, res: express.Response) => {
  const str_out: string = "Morning " + req.query.name + "\n"
  res.send(str_out)
})

app.use(router)

// 3000番ポートでAPIサーバ起動
app.listen(3000, () => { console.log('Example app listening on port 3000!') })