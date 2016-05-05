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