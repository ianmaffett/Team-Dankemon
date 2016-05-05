<!DOCTYPE html>

<html lang="en">
<head>
     <meta charset="utf-8" />
     <title>Team Dankemon Project</title>
	 <link rel="stylesheet" type="text/css" href="css/dank.css" />
	 <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
	 <script src="js/makenews.js" type="text/javascript"></script>
</head>
<body>
 <audio autoplay loop="loop">
	  <source src="http://66.90.91.26/ost/pokemon-gold-silver/aykljeeyyc/26-pokemon-gym.mp3" type="audio/mpeg">
 </audio>

 <div id="header"> <br />
 <h1><img src="img/pokeball.png" class="bounce" width= 50px height= 50px alt="pokeball"> Dankemon Battle Simulator <img src="img/pokeball.png" width= 50px height= 50px alt="pokeball"></h1> <br /> <br /> <hr /> <br /> <br />
 </div>
 <div id="gamediv">
 	<form name="login" id="login" method="post">
 	<input type="text" name="username" id="username"> - Username</input><br>
 	<input type="password" name="password" id="password"> - Password</input><br><br>
 	<input type="submit" name="submit" id="submit" value="Login" />
 	</form>
 	<button name="forgotbutton" id="forgotbutton">Forgot your password?</button><br>
 	<button name="create" id="create">Sign Up</button><br>
 	<form name="creform" id="creform" method="post">
 	<input type="text" name="creusername" id="creusername"> - Username</input><br>
 	<input type="password" name="crepassword" id="crepassword"> - Password</input><br>
 	<input type="text" name="creplayer" id="creplayer"> - Player Name</input><br>
 	<input type="text" name="crerival" id="crerival"> - Rival Name</input><br>
 	<input type="text" name="creemail" id="creemail"> - Email</input><br><br>
 	<input type="submit" name="cre" id="cre" value="Create Account" />
 	</form>
 	<button name="choose" id="choose">Choose your pokemon!</button>
 	<button name='choosepoke' id='choosepoke'>Choose!</button><br><br>
 	<form name="forgotform" id="forgotform" method="post">
 	 	<input type="text" name="forgotuser" id="forgotuser"> - Username</input><br>
 	 	<input type="text" name="forgotemail" id="forgotemail"> - Email</input><br><br>
 	 	<input type="submit" name="forgot" id="forgot" value="Send Email With New Password" />
 	</form>
 	<form name="chooseform" id="chooseform">
 	</form>
 	<button name="reset" id="reset">Play Again</button>

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
 <div id="newshead" class="right">
 	<h2>Pokemon News</h2>
 </div>
 <div id="newsdiv">
 </div>
 <div id="newsdiv1">
 <a class="twitter-timeline" href="https://twitter.com/Pokemon" data-widget-id="726474468214886401">Tweets by @Pokemon</a>
<script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");</script>
 </div>
  <script src="js/create.js" type="text/javascript"></script>
  <script src="js/valuser.js" type="text/javascript"></script>
  <script src="js/makegame.js" type="text/javascript"></script>
  <script src="js/forgot.js" type="text/javascript"></script>
  <?php

 	if (isset($_GET['login'])) {
 		echo '<script src="js/choose.js" type="text/javascript"></script>';
 	}


 ?>
</body>
</html>