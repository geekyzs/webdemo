<?php
include_once('connect.php');
$id = $_GET['id'];
$sql = "DELETE FROM cart WHERE id= '" . $id . "'";
mysql_query($sql);
$mark = mysql_affected_rows();
if ($mark > 0) {
	echo  $id;
} else {
	echo  "0";
}
mysql_close($con);
?>