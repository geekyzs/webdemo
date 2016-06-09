<!DOCTYPE html>
<html>
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
		<title>
			新闻管理系统
		</title>
	</head>
	<body>
<script>
<?php
include_once('connect.php');
$id = $_GET['id'];
$sql = "DELETE FROM news WHERE id= '" . $id . "'";
mysql_query($sql, $con);
$mark = mysql_affected_rows();
$url = "maintainnews.php";
if ($mark > 0) {
	echo  "alert('删除成功')";
} else {
	echo  "alert('删除失败')";
}
mysql_close($con);
?>

window.location = "maintainnews.php";
</script>
	</body>
</html>
