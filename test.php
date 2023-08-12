<?php
$servername = "localhost";
$username = "root";
$password = "";
$db_name = "Contactform";

$conn = mysqli -connect($servername,$username,$password,$db_name);

if(!$conn){
    die("Contactform Submitted error! : ". mysqli_connect_error());
    }
    echo " Contactform Subumitted Successfully!";
?>  