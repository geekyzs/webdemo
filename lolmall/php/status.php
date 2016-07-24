<?php
error_reporting(E_ERROR);
session_start();
if (!isset($_SESSION['user'])) {
	echo "0";
	exit();
}else{
	echo $_SESSION['user'];
}
?>