<?php
include('./lianjie.php');

$val = $_REQUEST['id'];

$sql = "select * from mi_shop where id = '$val'";

$res = $mysqli->query($sql);

$arr = array();


$row = $res->fetch_assoc();


$json = json_encode($row);

echo $json;

$mysqli->close();
