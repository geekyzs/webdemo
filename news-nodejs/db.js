/**
 数据库端处理
 */
var mmysql = require('mysql');
//打开数据库连接
function openCon(){
    var con= mmysql.createConnection({
        host:'localhost',
        user:'root',
        password:'',
        database:'news'
    });
    return con;
}

/**********************查询新闻**********************************/
exports.newsDb = function(sInfo, res){
    var sql = 'select * from news where category =?';
    openCon().query(sql, sInfo, function(error, results){
        if(error){
            console.log(error);
            res.end();
        }
        else{
            openCon().end();
            res.json(results);
            res.end();
        }
    });
};

exports.selNews= function(selID, res){
    var sql = 'select * from news where id =?';
    openCon().query(sql, selID, function(error, result4){
        if(error){
            console.log(error);
            res.end();
        }
        else{
            openCon().end();
            res.json(result4);
            res.end();
        }
    });
};

exports.showNews= function(req,res){
    var sql = 'SELECT * FROM news ORDER BY id DESC';
    openCon().query(sql, function(error, result4){
        if(error){
            console.log(error);
             console.log(ord);
            res.end();
        }
        else{
            openCon().end();
            res.json(result4);
            res.end();
        }
    });
};

/**********************添加新闻**********************************/
exports.addNews=function(params,res){
	var sql='INSERT INTO news (category,title,pic,time) VALUES (?, ?, ?, ?)';
	openCon().query(sql,params,function(error,result1){
		if(error){
			console.log(error);
			 res.end();
		}
		else{
			console.log(params);
			res.json(result1);
			res.end();
		}
	})
}

/**********************修改新闻**********************************/
exports.editNews=function(params2,res){
	var sql= 'UPDATE news SET category = ?,title = ?,pic = ?,time = ? WHERE id = ?';
	openCon().query(sql,params2,function(error,result2){
		if(error){
			console.log(error);
			 res.end();
		}
		else{
			console.log(params2);
			res.json(result2);
			res.end();
		}
	})
}

/**********************删除新闻**********************************/
exports.delNews=function(delID,res){
	var sql= 'DELETE FROM news WHERE id = ?';
	openCon().query(sql,delID,function(error,result3){
		if(error){
			console.log(delID);
			 res.end();
		}
		else{
			console.log(delID);
			res.json(result3);
			res.end();
		}
	})
}