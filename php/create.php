<?php 

$user = $_POST['creusername'];
$pass = sha1($_POST['crepassword']);
$play = $_POST['creplayer'];
$riv = $_POST['crerival'];

$dbc = @mysqli_connect("http://cscilab.bc.edu/phpmyadmin/index.php?db=pirainoa&token=4ed3034051823cd4669b3b6d31334eca", "pirainoa", "47649115", "members") OR die("Could not connect to database: ".mysqli_connect_error());
$query = "insert into members (username,password,wins,losses,player,rival

if ($_POST['cre']) {
	
}

?>