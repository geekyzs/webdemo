
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>新闻管理系统</title>
</head>
<body>
<script type="text/javascript">

<?php

//通过post获取页面提交数据信息
$id=addslashes(htmlspecialchars($_POST['id']));
$category =addslashes(htmlspecialchars($_POST['category']));
$title = addslashes(htmlspecialchars($_POST['title']));
$pic = addslashes(htmlspecialchars($_POST['pic']));
$time = htmlspecialchars($_POST['time']);
mysql_query("set names 'utf8'");
include_once('connect.php');
$sql = "update news set category='".$category."',title='".$title."' ,pic='".$pic."',time='".$time."' where id='".$id."'";
mysql_query($sql,$con);//执行SQL
$mark  = mysql_affected_rows();//返回影响行数
$url = "maintainnews.php";  

if($mark>0){
	echo "alert('修改成功')" ;	
}else{
	echo  "alert('修改失败')";
}
mysql_close($con);

?>

window.location= "../app/ManageSystem.html";
</script>
</body>
</html>
