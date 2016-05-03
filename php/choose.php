<<<<<<< HEAD
<?php

$pokeid = $_GET['id'];
=======
//Game Stuff

<?php

$pokeid = $_GET['i'];
>>>>>>> origin/tests

$dbc = @mysqli_connect('127.0.0.1', 'pirainoa', 'RZHmZ6qE', 'pirainoa') OR die("Could not connect to database: ".mysqli_connect_error());
$query = "select name, pokeinfo, pokeimg from pokemon where id='$pokeid'";

$result = mysqli_query ($dbc, $query) OR die('Invalid query: ' . mysqli_error($dbc));

$row = mysqli_fetch_array($result, MYSQLI_ASSOC);

<<<<<<< HEAD
echo json_encode($row);
=======

echo $result;
>>>>>>> origin/tests

?>