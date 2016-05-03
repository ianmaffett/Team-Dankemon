<!DOCTYPE html>

<html lang="en">
<head>
     <meta charset="utf-8" />
     <title>Dankemon</title>
	 <link rel="stylesheet" type="text/css" href="css/dank.css" />
	 <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
	 <script src="js/makenews.js" type="text/javascript"></script>
</head>
<body>
 <div id="header">
 <h1>Dankemon</h1>
 </div>
 <div id="gamediv">
 	<form name="login" id="login" method="post">
 	<input type="text" name="username" id="username">Username</input><br>
 	<input type="password" name="password" id="password">Password</input><br>
 	<input type="submit" name="submit" id="submit" value="Login" />
 	</form><br>
 	<button name="forgot" id="forgot">Forgot your password?</button><br>
 	<button name="create" id="create">Sign Up</button><br>
 	<form name="creform" id="creform" method="post">
 	<input type="text" name="creusername" id="creusername">Username</input><br>
 	<input type="password" name="crepassword" id="crepassword">Password</input><br>
 	<input type="text" name="creplayer" id="creplayer">Player Name</input><br>
 	<input type="text" name="crerival" id="crerival">Rival Name</input><br>
 	<input type="text" name="creemail" id="creemail">Email</input><br>
 	<input type="submit" name="cre" id="cre" value="Create Account" />
 	</form>
 	<button name="choose" id="choose">Choose your pokemon!</button>
 	 <button name='choosepoke' id='choosepoke'>Choose!</button><br><br>
 	<form name="chooseform" id="chooseform">
 	</form>
 	
 	<div id='gameleft'>
 		<img src='' alt='Your Pokemon' id="pokeimg" /><br><br>
		<span id='curhp'></span>/<span id='tothp'></span><br><br>
		<input type='radio' name='move' id='move1radio' value='1' checked><span id='move1'></span><br>
		<input type='radio' name='move' id='move2radio' value='2'><span id='move2'></span><br>
		<input type='radio' name='move' id='move3radio' value='3'><span id='move3'></span><br>
		<input type='radio' name='move' id='move4radio' value='4'><span id='move4'></span><br><br>
		<button name='choosemove' id='choosemove'>Attack!</button>
	</div>
	
	<div id='gameright'>
 		<img src='' alt='Mewtwo' id='mewtwoimg' /><br><br>
		<span id='opphp'></span>/<span id='totalopphp'></span><br><br>
	</div>
	
	
 </div>
 <span class="right">
 	<h2>Pokemon News</h2>
 </span>
 <div id="newsdiv">
 </div>
 <div id="newsdiv1">
 <a class="twitter-timeline" href="https://twitter.com/Pokemon" data-widget-id="726474468214886401">Tweets by @Pokemon</a>
<script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");</script>
 </div>
  <script src="js/create.js" type="text/javascript"></script>
  <script src="js/valuser.js" type="text/javascript"></script>
  <script src="js/makegame.js" type="text/javascript"></script>
  <?php 
 	if (isset($_GET['login'])) {
 		echo '<script src="js/choose.js" type="text/javascript"></script>';
 	}
 
 	
 ?>
</body>
</html>