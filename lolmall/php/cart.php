<?php
include_once('connect.php');
$username= $_POST['username'];
$query = mysql_query("SELECT * FROM cart WHERE username='".$username."'");
while($row=mysql_fetch_array($query)){
	 $arr['cart'][] = array(
		'title' => $row['title'],
		'pic' => $row['pic'],
		'category' => $row['category'],
		 'price' => $row['price'],
		 'id'  => $row['id']
	 );
}
echo json_encode($arr);
?>