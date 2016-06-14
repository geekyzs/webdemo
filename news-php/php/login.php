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
 $password =md5($_POST['password']);
 //查询
$sql  = "SELECT * FROM `user` WHERE `username`='".$username."' AND `password`='".$password."'";
$set = mysql_query($sql,$con);
$result = mysql_fetch_array($set);
if($result){
	echo  "location='../app/ManageSystem.html'";	
}else{
    echo  "alert('账号或密码错误，登录失败！');location='../login.html'";
}
mysql_close($con);
?>
</script>
</body>
</html>

