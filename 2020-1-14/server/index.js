const express = require('express')
const app = express()
//const bodyParser=require("body-parser");

// 解析以 application/json 和 application/x-www-form-urlencoded 提交的数据

//
// ////创建application/json解析
//var jsonParser = bodyParser.json();

// //创建application/x-www-form-urlencoded
// var urlencodedParser = bodyParser.urlencoded({extended: false});

// //POST /login 中获取URL编码的请求体
// app.post('/login', urlencodedParser, function(req, res){
//     if(!req.body) return res.sendStatus(400);
//     res.send('welcome, ' + req.body.username);
// })

//
//
//
//
// // 解析 application/json
// app.use(bodyParser.json()); 
// // 解析 application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded());

// 
//JSONP跨域
app.get('/getInfo',function(req,res){

	// 设置头信息
	// res.set({
	// 	"Access-Control-Allow-Origin": "*"
	// })

	res.jsonp({type:2})

})
app.get('/hello', function (req, res) {

	//req.body获取body数据
	//
	//
	//

	// 设置头信息
	res.set({
		"Access-Control-Allow-Origin": "*"
	})

	const type = +req.query.type;
	const sex = +req.query.sex
	res.json( {type,sex})

	// if(type === 1) {
	// 	res.send("欢迎来到追梦课堂")
	// }

	// if(type === 2) {
	// 	res.send("欢迎来到临汾追梦课堂")
	// }
  //res.send('hello world')
  // 返回JSON数据 
  // 
  // res.json({
  // 	name: "李四",
  // 	age: 30
  // })
  // 这是 jsonp
  // 
  //app.set('jsonp callback name', 'cb')
  // res.jsonp({
  // 	name : "张三",
  // 	age: "30"
  // })
})
// 简单请求
app.get('/getSimpleCors', function (req, res) {

	// 设置头信息
	res.set({
		//允许请求的资源 网址列表
		"Access-Control-Allow-Origin": "http://127.0.0.1:8081",
		//允许访问的响应头字段
		"Access-Control-Expose-Headers":"*"
	})

	res.send("访问简单请求")

})

// 非简单请求
app.get('/getCors',function (req, res) {

	// 设置头信息 
	res.set({
		"Access-Control-Allow-Methods":"POST,GET",
		"Access-Control-Allow-Headers":"Content-type"
	})


	 
	if(req.method === "OPTIONS"){

		res.sendStatus(200);
	}else {
	
		res.json({type:1})
	}

})


app.listen(8082, () => console.log('Example app listening on port 8082!'))