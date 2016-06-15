<?php
error_reporting(E_ERROR);
session_start();
$token = md5(uniqid(rand(), TRUE));
$_SESSION['token'] = $token;
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
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>新闻管理</title>
</head>
<body>
<div class="list-group">
			<a href="#" id="addnews" class="btn btn-primary btn-lg " data-toggle="modal" data-target="#myModal">
				添加新闻
			</a>
			<!-- 添加新闻 -->
			<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
				<div class="modal-dialog" role="document">
					<div class="modal-content">
						<div class="modal-header">
							<button type="button" class="close" data-dismiss="modal" aria-label="Close">
								<span aria-hidden="true">&times;</span>
							</button>
							<h4 class="modal-title" id="myModalLabel">
								添加新闻
							</h4>
						</div>
						<div class="modal-body">
							<form action="../php/addnews.php" method="post" class="form-horizontal">
								<input type="hidden" name="token" value="<?php echo $token; ?>" class="form-control" >
								<div class="form-group">
									<label for="category" class="col-sm-2 control-label">类别</label>
									<div class="col-sm-3">
										<select name="category" class="form-control" id="category">
											<option>
												推荐
											</option>
											<option>
												百家
											</option>
											<option>
												本地
											</option>
											<option>
												娱乐
											</option>
											<option>
												社会
											</option>
											<option>
												军事
											</option>
										</select>
									</div>
								</div>
								<div class="form-group">
									<label for="title" class="col-sm-2 control-label">标题</label>
									<div class="col-sm-10">
										<input type="text" name="title" class="form-control" id="title" required="required">
									</div>
								</div>
								<div class="form-group">
									<label for="pic" class="col-sm-2 control-label">图片</label>
									<div class="col-sm-10">
										<input type="text" name="pic" class="form-control" id="pic" required="required">
									</div>
								</div>
								<div class="form-group">
									<label for="time" class="col-sm-2 control-label">时间</label>
									<div class="col-sm-5">
										<input type="date" name="time" class="form-control" id="time" required="required">
									</div>
								</div>
								<div class="form-group">
									<div class="col-sm-offset-2 col-sm-10">
										<button type="submit" class="btn btn-default">
											提交
										</button>
										<button type="reset" class="btn btn-default">
											重置
										</button>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
<div align="center">
	<table class="table table-hover table-bordered  table-striped">
			<thead>
				<tr class="danger t-header">
					<th id="th_id">ID</th>
					<th id="th_category">类别</th>
					<th class="th-titile">标题</th>
					<th class="th-pic">图片地址</th>
					<th class="th-time">更新时间</th>
					<th class="th-time">修改/删除</th>
				</tr>
			</thead>
		<?php
        include_once('connect.php');
		//执行SQL 得到结果集
		$result =mysql_query("SELECT * FROM news ORDER BY id DESC");
		while($row=mysql_fetch_array($result)){
		?>
			<tr>
				<td><?php echo $row['id'] ?></td>
				<td><?php echo $row['category'] ?></td>
				<td><?php echo $row['title'] ?></td>
				<td><?php echo $row['pic'] ?></td>
				<td><?php echo $row['time'] ?></td>
				<td><a href="../php/updatenews.php?id=<?php echo $row['id'] ?>">修改</a>
				<a href="../php/deletenews.php?id=<?php echo $row['id'] ?>">删除</a>
				</td>
			</tr>
		<?php
		}
		?>
	</table>
</div>
</body>
</html>
