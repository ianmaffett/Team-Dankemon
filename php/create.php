<?php 

echo "hey";

$user = $_POST['creusername'];
$pass = sha1($_POST['crepassword']);
$play = $_POST['creplayer'];
$riv = $_POST['crerival'];
$email = $_POST['creemail'];

$dbc = @mysqli_connect("http://cscilab.bc.edu/phpmyadmin/index.php?db=pirainoa&token=4ed3034051823cd4669b3b6d31334eca", "pirainoa", "47649115", "members") OR die("Could not connect to database: ".mysqli_connect_error());
$query = "insert into members (username,password,wins,losses,player,rival,email) values ('$user','$pass',0,0,'$play','$riv','$email')";

$result = mysqli_query ($dbc, $query) OR die('Invalid query: ' . mysqli_error($dbc));

?>