<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>新闻管理系统</title>
</head>
<body>
<script type="text/javascript">
<?php
include_once('connect.php');
 $username = $_POST['username'];
 $password = md5($_POST['password']);
 //插入
$sql = "INSERT INTO user (username, password) VALUES ('$username', '$password');";
$set = mysql_query($sql,$con);
if($set==1){
	echo  "alert('注册成功！');location='../login.html'";	
}else{
	echo  "alert('注册失败！');location='../login.html'";
}
mysql_close($con);
?>
</script>
</body>
</html>