<?php
include('./lianjie.php');

$phone = $_REQUEST['phone'];

$pass =$_REQUEST['pass'];

$sqlin = "select * from `mi_user` where `user_phone` = '$phone'";

$res = $mysqli->query($sqlin);

if($res->num_rows){

    echo json_encode(['号码已注册','http://localhost:8080/199854/mi/src/html/login.html']);

    $mysqli->close();

}else{

    $sql = "insert into `mi_user` (`user_phone`,`user_pass`) values ('$phone','$pass')";

    $resAdd = $mysqli->query($sql);

    echo json_encode(['注册成功,立即前往登录','http://localhost:8080/199854/mi/src/html/login.html']);

    $mysqli->close();

}



