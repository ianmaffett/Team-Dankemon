<?php

$user = $_POST['user'];
$pass = sha1($_POST['pass']);

$dbc = @mysqli_connect('127.0.0.1', 'pirainoa', 'RZHmZ6qE', 'pirainoa') OR die("Could not connect to database: ".mysqli_connect_error());
$query = "select * from members where username='$user'";

$result = mysqli_query ($dbc, $query) OR die('Invalid query: ' . mysqli_error($dbc));

if (int msqli_num_rows($result) > 0) {
	echo 1;
}
else {
	echo 0;
}

echo "derp";

?>