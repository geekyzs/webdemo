<?php
mysql_query("SET names UTF8");

header("Content-Type: text/html; charset=utf-8");
include_once('connect.php');
$category = $_POST['category'];
$query = mysql_query("SELECT * FROM news WHERE category='".$category."'");
while($row=mysql_fetch_array($query)){
	 $arr['list'][] = array(
	 	'id' => $row['id'],
		'title' => $row['title'],
		'pic' => $row['pic'],
		 'time' => $row['time'], 
	 );
}
//print_r($arr);
echo json_encode($arr);
?>