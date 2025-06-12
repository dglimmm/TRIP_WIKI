const express = require('express')
const path = require('path')
const app = express()
const PORT = 3000

//정적파일인 index.html 전달
//__dirname은 현재 파일경로 + /.. 상위폴더
//path 모듈의 join 을 사용하면 /를 안써도 알아서 붙여줘
app.use(express.static(path.join(__dirname, '..')))

//get 요청 :서버로부터 요청 response 로 index.html 보내줌
app.get('/*wiki', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'index.html'))
})

app.listen(PORT, () => {
  console.log('START SERVER')
})