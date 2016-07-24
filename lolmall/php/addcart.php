<?php
include_once ('connect.php');
//添加数据
$username = addslashes(htmlspecialchars($_POST['username']));
$title = addslashes(htmlspecialchars($_POST['title']));
$pic = addslashes(htmlspecialchars($_POST['pic']));
$category=addslashes(htmlspecialchars($_POST['category']));
$price = htmlspecialchars($_POST['price']);
$sql = "INSERT INTO cart (username, title, pic, price,category) VALUES ('$username', '$title', '$pic', '$price','$category');";
if (mysql_query($sql)) {
	echo "1";
} 
mysql_close($con);
?>