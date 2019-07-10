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




// 后端获取前端的用户名和数据库进行匹配。
if(isset($_POST['name'])){
    $name=$_POST['name'];
    $result=$conn->query("select * from userform1 where username='$name'");
    if($result->fetch_assoc()){
        echo true;
    }else{
        echo false;
    }
}


// if(isset($_POST['name'])){
//     $namo=$_POST['name'];
//     $result=$conn->query("select * from userform1 where email='$namo'");

//     if($result->fetch_assoc()){
//         echo true;
//     }else{
//         echo false;
//     }
// }


//根据form内部name值获取前端表单提交的值
if(isset($_POST['submit'])){
    $username=$_POST['username'];
    $password=sha1($_POST['password']);
    $conn->query("insert userform1 values(null,'$username','$password',NOW())");
    //设置跳转的地址
    header('location:http://localhost/alongdata/meizu/src/login.html');
    
}