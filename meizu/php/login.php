<?php
header('content-type:text/html;charset=utf-8');
define('HOST', 'localhost');
define('USERNAME', 'root');
define('PASSWORD', '');
define('DBNAME', 'userform');
$conn = @new mysqli(HOST, USERNAME, PASSWORD, DBNAME); //@:容错的
if ($conn->connect_error) {
    die('数据库连接失败：' . $conn->connect_error);
}
$conn->query('SET NAMES UTF8');


if(isset($_POST['user']) && isset($_POST['pass'])){
    $user=$_POST['user'];
    $pass=sha1($_POST['pass']);

    $result=$conn->query("select * from userform1 where username='$user' and password='$pass' ");

    if($result->fetch_assoc()){//登录成功
        echo true;
    }else{//登录失败
        echo false;
    }

}