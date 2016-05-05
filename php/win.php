<?php

$user = $_GET['user'];
$win = $_GET['win'];

$dbc = @mysqli_connect('127.0.0.1', 'pirainoa', 'RZHmZ6qE', 'pirainoa') OR die("Could not connect to database: ".mysqli_connect_error());
$query = "update members set wins = wins + 1 where username = '$user'";

$result = mysqli_query ($dbc, $query) OR die('Invalid query: ' . mysqli_error($dbc));

?>