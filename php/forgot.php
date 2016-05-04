<?php 

$user = $_POST['user'];
$email = $_POST['email'];
$str = "abcdefghjklmnpqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ23456789";
$pass = "";

for ($i = 0 ; $i < 8 ; $i++) {
	$r = rand(0,strlen($str)-1); 
	$pass .= $str[$r];
}

$encrypt = sha1($pass);

$dbc = @mysqli_connect('127.0.0.1', 'pirainoa', 'RZHmZ6qE', 'pirainoa') OR die("Could not connect to database: ".mysqli_connect_error());
$query = "update members set password='$encrypt' where username='$user'";

$result = mysqli_query ($dbc, $query) OR die('Invalid query: ' . mysqli_error($dbc)); 

$body = "Your new password is $pass";
$headers = "From: ajpiraino@gmail.com";
$subject = "Dankemon Battle Simulator";

if (mail($email,$subject,$body,$headers)) {
	echo "Mail sent!";
}
else {
	echo "Mail failed to send!";
}
?>