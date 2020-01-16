const express = require("express");
const app = express()


const newsList = [

				{
					uniquekey: 1,
					title: "杨幂的发际线再也回不去了么？网友吐槽像半秃?",
					type:1
				},
				{
					uniquekey: 2,
					title: "西宁路面塌陷6人死亡：“吃人”马路到底能不能治了？", 
					type:1
				},
				{
					uniquekey: 3,
					title: "春运版人在囧途!祖孙3人回湖北麻城却到了四川麻城?",
					type:1
				},
				{
					uniquekey: 4,
					title: "男子告北影副校长潜规则妻子：哄骗并发生性关系",
					type:1
				},
				{
					uniquekey:5,
					title: "8888靓号过户每月强制最低消费1万 用户:要破产了",
					type:1
				},
				{
					uniquekey: 6,
					title: "伊朗外长：特朗普7个月前就授权暗杀苏莱曼尼",
					type:2
				},
				{
					uniquekey: 7,
					title: "仅持续5分钟!朴槿惠缺席亲信干政案和受贿案公审",
					type:2
				},
				{
					uniquekey: 8,
					title: "英媒：“疑似导弹击中客机”视频拍摄者被伊朗拘捕",
					type:2
				},
				{
					uniquekey: 9,
					title: "戈恩谈出逃细节:出逃计划价格合理 日本人反应太慢",
					type:2
				},
				{
					uniquekey: 10,
					title: "一艘伊朗货船在俄罗斯港口起火 无人员伤亡",
					type:2
				},
			]

app.all('*', function (req, res, next) {

	res.set ({
		'Access-Control-Allow-Origin': '*',
		'Access-Control-Allow-Headers': 'Content-Type',
		'Access-Control-Allow-Methods': 'GET',
	})
 
    next();
});
// 获取新闻
app.get("/getNews",function(req,res){
	const result = {
		status: "200",
		message:"成功返回",
		result:{}
	};

	if(req.query.type) {
		const type = +req.query.type;
		const data = newsList.filter(function(item){
			return item.type === type
		})

		result.data = data
		
	}else {

		result.status = 203

		result.message = "请传入参数"

	}

	res.json(result)
})

app.listen(8082, () => console.log('Example app listening on port 8082!'))