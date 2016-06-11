<?php
include_once('connect.php');
$query = mysql_query("SELECT * FROM news ORDER BY id DESC");
while($row=mysql_fetch_array($query)){
	 $arr['tabe'][] = array(
	 	'id' => $row['id'],
	 	'category'=>$row['category'],
		'title' => $row['title'],
		'pic' => $row['pic'],
		 'time' => $row['time'], 
	 );
}
//print_r($arr);
echo  json_encode ($arr);
?>
