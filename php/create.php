<?php 

$user = $_POST['user'];
$pass = sha1($_POST['pass']);
$play = $_POST['play'];
$riv = $_POST['riv'];
$email = $_POST['email'];

$dbc = @mysqli_connect('127.0.0.1', 'pirainoa', 'RZHmZ6qE', 'pirainoa') OR die("Could not connect to database: ".mysqli_connect_error());
$query = "insert into members (username,password,wins,losses,player,rival,email) values ('$user','$pass',0,0,'$play','$riv','$email')";

$result = mysqli_query ($dbc, $query) OR die('Invalid query: ' . mysqli_error($dbc));



echo $result;

?>