<?php

include "conn.php";

$result=$conn->query("select * from piclist");

$datapic=array();
for($i=0;$i<$result->num_rows;$i++){
   $datapic[$i] = $result->fetch_assoc();
}
echo json_encode($datapic);



