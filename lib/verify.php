<?php

include('./lianjie.php');

$phone = $_REQUEST['phone'];

$pass =$_REQUEST['pass'];

$sql = "select * from `mi_user` where `user_phone` = '$phone' and `user_pass` = '$pass'" ;

$res = $mysqli->query($sql);

if($res->num_rows){

    $val=array("herf"=>"http://localhost:8080/199854/mi/src/html/index.html","name"=>"$phone","pass"=>"$pass");

    echo json_encode($val);

}else{
    $val=array("warning"=>"用户名或密码错误");
    echo json_encode($val);
}

$mysqli->close();