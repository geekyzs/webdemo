<?php
session_start();
if (!isset($_SESSION['user'])) {
	echo "<p align=center>";
	echo "<font color=#ff0000 size=5><strong><big>";
	echo "你还没有登录,请<a href='../login.html'>登录</a>!";
	echo "</big></strong></font></p>";
	exit();
}
?>
<!DOCTYPE html>
<html>
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
		<title>
			新闻管理系统
		</title>
	</head>
	<body>
		<?php
		include_once ('connect.php');
		//添加数据
		$category = addslashes(htmlspecialchars($_POST['category']));
		$title = addslashes(htmlspecialchars($_POST['title']));
		$pic = addslashes(htmlspecialchars($_POST['pic']));
		$time = htmlspecialchars($_POST['time']);
		if ($_POST['token'] == $_SESSION['token']) {
			$sql = "INSERT INTO news (title, pic, time, category) VALUES ('$title', '$pic', '$time', '$category');";
			mysql_query("set names 'utf8'");
			if (mysql_query($sql, $con)) {
				echo "<script>alert('添加成功！');location='../app/ManageSystem.html'</script>";
			} else {
				echo "<script>alert('添加失败！');location='../app/ManageSystem.html'</script>";
			}
		}else{
			echo "token 不允许";
		}
		mysql_close($con);
		?>
	</body>
</html>
