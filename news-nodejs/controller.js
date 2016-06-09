/**
 *控制端这里用 MVC模式
 */
var db = require("./db.js");
var url = require("url");
var qs = require("querystring");

/****************************查询数据******************************/

exports.operNews = function(req, res){
   var sInfo = qs.parse(url.parse(req.url).query).category;
    db.newsDb(sInfo, res);
}

exports.selNews = function(req, res){
   var selID = qs.parse(url.parse(req.url).query).id;
    db.selNews(selID, res);
}

exports.showNews = function(req, res){
   var myord = qs.parse(url.parse(req.url).query).ord;
    db.showNews(myord, res);
}


/****************************插入数据******************************/
exports.addNews=function(req,res){
	var params=new Array();
	params[0]=qs.parse(url.parse(req.url).query).category;
	params[1]=qs.parse(url.parse(req.url).query).title;
	params[2]=qs.parse(url.parse(req.url).query).pic;
	params[3]=qs.parse(url.parse(req.url).query).time;
	db.addNews(params,res);
	
}

/****************************编辑数据******************************/
exports.editNews=function(req,res){
	var params2=new Array();
	params2[0]=qs.parse(url.parse(req.url).query).category;
	params2[1]=qs.parse(url.parse(req.url).query).title;
	params2[2]=qs.parse(url.parse(req.url).query).pic;
	params2[3]=qs.parse(url.parse(req.url).query).time;
	params2[4]=qs.parse(url.parse(req.url).query).id;
	db.editNews(params2,res);	
}
 
/****************************删除数据******************************/
exports.delNews = function(req, res){
   var delID = qs.parse(url.parse(req.url).query).id;
    db.delNews(delID, res);
}