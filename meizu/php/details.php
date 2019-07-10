<?php

    require "conn.php";
    $sid=$_GET['sid'];
    if(isset($_GET['sid'])){
        
    $result=$conn->query("select * from piclist where picid=$sid ");

    echo json_encode($result->fetch_assoc());

}