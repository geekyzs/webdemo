<?php
include_once('connect.php');
$id = $_POST['id'];
$query = mysql_query("SELECT * FROM goods WHERE id='".$id."'");
while($row=mysql_fetch_array($query)){
	 $arr['goods'][] = array(
		'title' => $row['title'],
		'pic' => $row['pic'],
		'category' => $row['category'],
		 'price' => $row['price'], 
	 );
}
echo json_encode($arr);
?>