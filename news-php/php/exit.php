<?php
session_start () ;
unset($_SESSION['user']);
header("Location:../app/ManageSystem.html");
?>