// 引入express模块
var express = require('express')
// 获取服务实力对象
const cors = require('cors')

var app = express()
app.use(cors())

//监听请求
app.get('/zsl', (req, res) => {
  //向客户端发送Json对象
  res.send({ address: 'zsl', number: 296 })
})

app.get('/shl', (req, res) => {
  //向客户端发送Json对象
  res.send({ address: 'shl', number: 254 })
})

app.get('/rfl', (req, res) => {
  //向客户端发送Json对象
  res.send({ address: 'rfl', number: 345 })
})

app.get('/address', (req, res) => {
  //向客户端发送Json对象
  res.send([
    {
      address: '中山路',
      value: 'zsl'
    },
    {
      address: '上海路',
      value: 'shl'
    },
    {
      address: '瑞风路',
      value: 'rfl'
    }
  ])
})


// 监听端口
app.listen(8080, err => {
  if (!err) console.log('express server runnning at http://127.0.0.1:8080')
})

