/**
 *服务器端处理代码
 */
var http = require('http');
var express = require('express');
var control = require("./controller.js");
var app = express();
var bodyParser=require("body-parser");

//设置端口
app.set('port', 3900);
//设置express寻找静态资源的位置
app.use(express.static(__dirname + '/file'));
//解析body
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
//创建服务器
http.createServer(app).listen(app.get('port'), function(){
    console.log("express已经启动，请在浏览器地址栏输入：http://127.0.0.1:3900/");
});
/**********************新闻系统*******************/
app.get('/news', control.operNews);
app.get('/addnews',control.addNews);
app.get('/editnews',control.editNews);
app.get('/delnews', control.delNews);
app.get('/selnews',control.selNews);
app.get('/shownews',control.showNews);




