<?php

$user = $_POST['user'];
$email = $_POST['email'];

$dbc = @mysqli_connect('127.0.0.1', 'pirainoa', 'RZHmZ6qE', 'pirainoa') OR die("Could not connect to database: ".mysqli_connect_error());
$query = "select * from members where username='$user' and email='$email'";

$result = mysqli_query ($dbc, $query) OR die('Invalid query: ' . mysqli_error($dbc));
$rowcount = mysqli_num_rows($result);

$strres = mysqli_fetch_array($result);

if ($rowcount >= 1) {
	echo 1;
}
else {
	echo 0;
}


?>