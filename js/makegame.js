var pokemon = new Array();
var move1 = new Array();
var move2 = new Array();
var move3 = new Array();
var move4 = new Array();
var hp = 0;

function creategame(pokemon,move1,move2,move3,move4) {
	var hp = pokemon[2];
	var outstr = "";
	outstr += "<div class='gameleft'><img src='" + pokemon[8] + "' alt='Your Pokemon' /><br><br>";
	outstr += hp + "/" + pokemon[2] + "<br><br>";
	outstr += "<input type='radio' name='move' value='" + move1[0] + "'> " + move1[0] + "<br>";
	outstr += "<input type='radio' name='move' value='" + move2[0] + "'> " + move2[0] + "<br>";
	outstr += "<input type='radio' name='move' value='" + move3[0] + "'> " + move3[0] + "<br>";
	outstr += "<input type='radio' name='move' value='" + move4[0] + "'> " + move4[0] + "<br><br>";
	outstr += "<button name='choosemove' id='choosemove'>Attack!</button>";
	return outstr;
}

function makegame() {
	var choice = $("#chooseform input[type='radio'][name='pokemon']:checked").val();
	
	$.ajax({
		url:"php/pokechoice.php",
		type:"GET",
		data:{"name":choice},
		success:function(data){
			pokemon.push(data.name,data.type1,data.hp,data.att,data.def,data.spatt,data.spdef,data.spd,data.pokeimg);
			move1.push(data.move1,data.move1type,data.move1pow,data.move1acc,data.move1eff,data.move1pp);
			move2.push(data.move2,data.move2type,data.move2pow,data.move2acc,data.move2eff,data.move2pp);
			move3.push(data.move3,data.move3type,data.move3pow,data.move3acc,data.move3eff,data.move3pp);
			move4.push(data.move4,data.move4type,data.move4pow,data.move4acc,data.move4eff,data.move4pp);
		},
		error:function(data,status,jqXHR,error){
			alert("failure " + data + status + error);
		},
		dataType:"json",
		async:false
	});
	
	$("#gamediv").append(creategame(pokemon,move1,move2,move3,move4));
	
}


$("#choosepoke").click(function() {
	$("#chooseform").hide();
	$("#choosepoke").hide();
	makegame();
});



