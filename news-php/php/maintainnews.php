<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>修改，删除新闻</title>
<link rel="stylesheet" href="../css/bootstrap.min.css" />
<link rel="stylesheet" href="../css/Systemstyle.css" />
</head>
<body>
<div align="center">
	<table class="table table-hover table-bordered  table-striped" style="width: 80%;">
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
				<td><a href="updatenews.php?id=<?php echo $row['id'] ?>">修改</a>
				<a href="deletenews.php?id=<?php echo $row['id'] ?>">删除</a>
				</td>
			</tr>
		<?php
		}
		?>
	</table>
</div>
<!--回到顶部-->
<div class="gotop-globalview"></div>
<script type="text/javascript" src="../js/jquery-2.2.3.min.js" ></script>
<script type="text/javascript" src="../js/index.js" ></script>
</body>
</html>
