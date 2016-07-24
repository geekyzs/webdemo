<?php
include_once('connect.php');
 $username = addslashes(htmlspecialchars($_POST['username']));
 $password = md5(addslashes(htmlspecialchars($_POST['password'])));
 //检查用户名是否存在
 $sql = "SELECT username FROM user WHERE username='$username'";
 $query=mysql_query($sql);
 $rows=mysql_num_rows($query);
 if ($rows > 0) {
 	echo "0";
 } else {
 	$user_in="INSERT INTO user (username, password) VALUES ('$username', '$password');";
	mysql_query($user_in);
	echo "1";
 }
mysql_close($con);
?>
