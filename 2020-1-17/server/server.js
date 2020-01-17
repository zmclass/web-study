const express = require('express')
const app = express()
const multer  = require('multer');
const upload = multer({ dest: 'uploads/'}) // 文件储存路径
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
//跨域配置
app.all('*', function (req, res, next) {

res.set ({

  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': '*',
  'Access-Control-Allow-Methods': '*',
})

  next();
});
// 
// 保存信息
app.post("/saveInfo",function(req,res){
   res.json({
     name : "张三",
     age : 30
   })
})
// 上传文件
app.post("/upload",upload.single('file'),function(req,res){
   res.send("上传成功")
})
app.listen(8082, () => console.log('Example app listening on port 8082!'))