<!DOCTYPE html>
<html>
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
		<title>
			新闻管理系统
		</title>
	</head>
	<body>
<script type="text/javascript">
<?php
mysql_query("SET names UTF8");
include_once('connect.php');
mysql_select_db("news", $con);
//添加数据
$category =addslashes( $_POST['category']);
$title = addslashes(HTMLSpecialChars($_POST['title']));
$pic = addslashes(HTMLSpecialChars($_POST['pic']));
$time = HTMLSpecialChars($_POST['time']);
mysql_query("set names 'utf8'");
$sql = "INSERT INTO news (title, pic, time, category) VALUES ('$title', '$pic', '$time', '$category');";
$url = "../ManageSystem.html";
if (mysql_query($sql, $con)) {
	echo  "alert('添加成功')";
} else {
	echo  "alert('添加失败')";
}
mysql_close($con);
?>

window.location = "../ManageSystem.html";
</script>
	</body>
</html>
