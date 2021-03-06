const express = require('express')
const app = express()


app.all('*', function (req, res, next) {

	res.set ({

		'Access-Control-Allow-Origin': '*',
		'Access-Control-Allow-Headers': 'Content-Type',
		'Access-Control-Allow-Methods': '*',
		'Content-Type': 'application/json;charset=utf-8'
	})
 
    next();
  });

//JSONP跨域
app.get('/getInfo',function(req,res){
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
app.post('/getCors', function (req, res) {


	console.log(req.method)
	res.json([1,2,3])

})



app.listen(8082, () => console.log('Example app listening on port 8082!'))