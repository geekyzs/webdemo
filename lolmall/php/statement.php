<?php
include_once('connect.php');
$username = $_GET['username'];
$sql = "DELETE FROM cart WHERE username= '" . $username . "'";
mysql_query($sql);
$mark = mysql_affected_rows();
if ($mark > 0) {
	echo  $username;
} else {
	echo  "0";
}
mysql_close($con);
?>