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
		//通过post获取页面提交数据信息
		$id = addslashes(htmlspecialchars($_POST['id']));
		$category = addslashes(htmlspecialchars($_POST['category']));
		$title = addslashes(htmlspecialchars($_POST['title']));
		$pic = addslashes(htmlspecialchars($_POST['pic']));
		$time = htmlspecialchars($_POST['time']);
		if ($_POST['token'] == $_SESSION['token']) {
			$sql = "update news set category='" . $category . "',title='" . $title . "' ,pic='" . $pic . "',time='" . $time . "' where id='" . $id . "'";
			mysql_query("set names 'utf8'");
			mysql_query($sql, $con);
			$mark = mysql_affected_rows();
			//返回影响行数
			if ($mark >= 0) {
				echo "<script>alert('修改成功！');location='../app/ManageSystem.html'</script>";
			} else {
				echo "<script>alert('修改失败！');location='../app/ManageSystem.html'</script>";
			}
		} else {
			echo "token 不允许";
		}
		mysql_close($con);
		?>
	</body>
</html>
