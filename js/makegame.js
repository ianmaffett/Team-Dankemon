var pokemon = new Array();
var move1 = new Array();
var move2 = new Array();
var move3 = new Array();
var move4 = new Array();
var hp = 0;

var mewtwo = new Array ("Mewtwo","Psychic",106,110,90,154,90,130,"http://img.pokemondb.net/sprites/black-white/anim/normal/mewtwo.gif");
var mewmove1 = new Array ("Headbutt","Normal",70,100,null,15);
var mewmove2 = new Array ("Body Slam","Normal",85,100,null,15);
var mewmove3 = new Array ("Psychic","Psychic",90,100,null,10);
var mewmove4 = new Array ("Psystrike","Psychic",100,100,null,10);
var opphp = mewtwo[2];

function creategame(pokemon,move1,move2,move3,move4) {
	var hp = pokemon[2];
	
	$("#pokeimg").attr("src",pokemon[8]);
	$("#pokeimg").attr("alt",pokemon[8]);
	$("#move1").html(move1[0]);
	$("#move2").html(move2[0]);
	$("#move3").html(move3[0]);
	$("#move4").html(move4[0]);
	$("#curhp").html(hp);
	$("#tothp").html(pokemon[2]);
	
	$("#mewtwoimg").attr("src",mewtwo[8]);
	$("#mewtwoimg").attr("alt",mewtwo[8]);
	$("#opphp").html(opphp);
	$("#totalopphp").html(mewtwo[2]);
	
	$("#gameleft").show();
	$("#gameright").show();
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
	
	creategame(pokemon,move1,move2,move3,move4);
	
}


$("#choosepoke").click(function() {
	$("#chooseform").hide();
	$("#choosepoke").hide();
	makegame();
});



