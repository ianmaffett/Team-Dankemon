//Game Stuff

<?php

$pokeid = $_GET['i'];

$dbc = @mysqli_connect('127.0.0.1', 'pirainoa', 'RZHmZ6qE', 'pirainoa') OR die("Could not connect to database: ".mysqli_connect_error());
$query = "select name, pokeinfo, pokeimg from pokemon where id='$pokeid'";

$result = mysqli_query ($dbc, $query) OR die('Invalid query: ' . mysqli_error($dbc));

$row = mysqli_fetch_array($result, MYSQLI_ASSOC);


echo $result;

?>