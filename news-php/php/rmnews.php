
<?php
include_once('connect.php');
$query = mysql_query("SELECT * FROM `news` WHERE `category`=\"推荐\"");
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