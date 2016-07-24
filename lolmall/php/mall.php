<?php
include_once('connect.php');
$category = $_POST['category'];
$query = mysql_query("SELECT * FROM goods WHERE category='".$category."'");
while($row=mysql_fetch_array($query)){
	 $arr['list'][] = array(
	    'id' => $row['id'],
		'title' => $row['title'],
		'pic' => $row['pic'],
		 'price' => $row['price'], 
	 );
}
echo json_encode($arr);
?>