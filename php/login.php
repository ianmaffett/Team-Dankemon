<?php 

if (isset($_GET['login'])) {

if ($_GET['login'] == 1) {
	if (!isset($_SESSION)) {
		ini_set('session.save_path',realpath(dirname($_SERVER['DOCUMENT_ROOT']) . '/../session'));
		session_start();
	}
}
else if (isset($_SESSION)) {
	session_unset();
	session_destroy();
}
}

if (isset($_SESSION)) {
	echo 1;
}
else {
	echo 0;
}

echo session_save_path();

?>