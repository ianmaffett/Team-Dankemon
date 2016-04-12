<!DOCTYPE html>

<html lang="en">
<head>
     <meta charset="utf-8" />
     <title>Dankemon</title>
	 <link rel="stylesheet" type="text/css" href="css/dank.css" />
</head>
<body>
 <div id="header">
 <h1>Dankemon</h1>
 </div>
 <div id="gamediv"> 
 	<p>THIS IS WHERE THE GAME WILL GO</p>
 </div>
 <span class="right">
 	<h2>Pokemon News</h2>
 </span> 
 <div id="newsdiv">
 <?php
 	function makenews() {
  		$xml = simplexml_load_file("http://bulbanews.bulbagarden.net/feed/news.rss") or die("Error: Cannot find file");
  		$str = "";
  		$i = 0;
  		$max = $xml->channel->item->count();
  		for($i = 0 ; $i < $max ; $i++) {
  			$str .= "<h5><a target='_blank' href='" . $xml->channel->item[$i]->link . "'>" . $xml->channel->item[$i]->title . "</a></h5>";
  			$str .= "<p>" . $xml->channel->item[$i]->description . "</p>";
  			$str .= "<p class='small'>Written by " . $xml->channel->item[$i]->author . " and published " . $xml->channel->item[$i]->pubDate . "</p>";
  		}
  		$str .= "<p class='small'>Last updated " . $xml->channel->lastBuildDate . " from " . $xml->channel->link . "</p>";
  		echo $str;
  	}
 	
 	makenews();
 ?>
 </div>
</body>
</html>