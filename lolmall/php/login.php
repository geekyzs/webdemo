
<?php
include_once('connect.php');
 $username = $_POST['username'];
 $password =md5($_POST['password']);
 //查询
$sql  = "SELECT * FROM `user` WHERE `username`='".$username."' AND `password`='".$password."'";
$set = mysql_query($sql,$con);
$result = mysql_fetch_array($set);
if($result){
	session_start();  
	$_SESSION["user"]=$username;
	echo  "1";	
}else{
    echo  "0";
}
mysql_close($con);
?>


