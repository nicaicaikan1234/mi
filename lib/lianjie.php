<?php
header("content-type:text/html;charset=utf-8");

$mysql = array(
    'host' => 'localhost:3306',
    'name' => 'root',
    'pass' => '199854lcc',
    'db' => 'day1'
);
$mysqli = new mysqli($mysql['host'], $mysql['name'], $mysql['pass']);

$mysqli->query("set names utf8");

$select_db = $mysqli->select_db($mysql['db']);
?>