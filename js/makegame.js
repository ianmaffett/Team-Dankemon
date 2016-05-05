var pokemon = new Array();
var move1 = new Array();
var move2 = new Array();
var move3 = new Array();
var move4 = new Array();

var mewtwo = new Array ("Mewtwo","Psychic",150,90,60,140,70,100,"http://img.pokemondb.net/sprites/black-white/anim/normal/mewtwo.gif");
var mewmove1 = new Array ("Headbutt","Normal",70,80,null,15,true);
var mewmove2 = new Array ("Body Slam","Normal",85,70,null,15,true);
var mewmove3 = new Array ("Psychic","Psychic",90,60,null,10,false);
var mewmove4 = new Array ("Psystrike","Psychic",100,40,null,10,false);
var opphp = mewtwo[2];

function reset(result) {
	$("#logoff").show();
	$("#reset").show();
	$("#choosemove").hide();

	if (result.win == 1) {
		$.ajax({
		url:"php/win.php",
		type:"GET",
		data:result,
		error:function(data,status,jqXHR,error){
			alert("Update failure");
		}
	});
	}
	else if (result.win == 0) {
		$.ajax({
		url:"php/loss.php",
		type:"GET",
		data:result,
		error:function(data,status,jqXHR,error){
			alert("Update failure");
		}
	});
	}
}

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
			move1.push(data.move1,data.move1type,data.move1pow,data.move1acc,data.move1eff,data.move1pp,data.move1phys);
			move2.push(data.move2,data.move2type,data.move2pow,data.move2acc,data.move2eff,data.move2pp,data.move2phys);
			move3.push(data.move3,data.move3type,data.move3pow,data.move3acc,data.move3eff,data.move3pp,data.move3phys);
			move4.push(data.move4,data.move4type,data.move4pow,data.move4acc,data.move4eff,data.move4pp,data.move4phys);
		},
		error:function(data,status,jqXHR,error){
			alert("failure " + data + status + error);
		},
		dataType:"json",
		async:false
	});
	
	creategame(pokemon,move1,move2,move3,move4);
	
}

function oppmove() {
	var rand = Math.floor(Math.random() * 4) + 1;
	var accrand = Math.random();
	var oppmove;
	var attstat;
	var defstat;
	var oppdam;
	var acc;
	
	if (rand == 1) {
		oppmove = mewmove1;
	}
	else if (rand == 2) {
		oppmove = mewmove2;
	}
	else if (rand == 3) {
		oppmove = mewmove3;
	}
	else if (rand == 4) {
		oppmove = mewmove4;
	}
	
	if (oppmove[6] == true) {
		attstat = mewtwo[3];
		defstat = pokemon[4];
	}
	else if (oppmove[6] == false) {
		attstat = mewtwo[5];
		defstat = pokemon[6];
	}
	
	if (accrand >= oppmove[3]/100) {
		acc = 0;
	}
	else if (accrand < oppmove[3]/100) {
		acc = 1;
	}
	
	oppdam = Math.floor(((22 * attstat * (oppmove[2] / defstat)/50)+2) * acc);
	
	var hp = $("#curhp").html() - oppdam;
	
	$("#curhp").html(hp);
	
	alert("Mewtwo used " + oppmove[0] + "!");
	
}

function makemove(move) {
	var rand = Math.floor(Math.random() * 4) + 1;
	var accrand = Math.random();
	var oppmove;
	var attstat;
	var defstat;
	var oppdam;
	var acc;
	
	if (move == 1) {
		oppmove = move1;
	}
	else if (move == 2) {
		oppmove = move2;
	}
	else if (move == 3) {
		oppmove = move3;
	}
	else if (move == 4) {
		oppmove = move4;
	}
	
	if (oppmove[6] == true) {
		attstat = pokemon[3];
		defstat = mewtwo[4];
	}
	else if (oppmove[6] == false) {
		attstat = pokemon[5];
		defstat = mewtwo[6];
	}
	
	if (accrand >= oppmove[3]/100) {
		acc = 0;
	}
	else if (accrand < oppmove[3]/100) {
		acc = 1;
	}
	
	oppdam = Math.floor(((22 * attstat * (oppmove[2] / defstat)/50)+2) * acc);
	
	var hp = $("#opphp").html() - oppdam;
	
	$("#opphp").html(hp);
	
	alert(pokemon[0] + " used " + oppmove[0] + "!");
	
}

function move() {
	var tie = Math.random();
	var res;
	
	if (pokemon[7] > mewtwo[7]) {
		makemove($("input[type='radio'][name='move']:checked").val());
		if (results() !== 1) {
			oppmove();
			results();
		}
	}
	else if (pokemon[7] < mewtwo[7]) {
		oppmove();
		if (results() !== 1) {
			makemove($("input[type='radio'][name='move']:checked").val());
			results();
		}
		
	}
	else if (tie > .5) {
		makemove($("input[type='radio'][name='move']:checked").val());
		if (results() !== 1) {
			oppmove();
			results();
		}
	}
	else {
		oppmove();
		if (results() !== 1) {
			makemove($("input[type='radio'][name='move']:checked").val());
			results();
		}
	}
	
}

function results() {
	if ($("#opphp").html() <= 0) {
		$("#opphp").html(0);
		alert("Mewtwo fainted!");
		var res = 1;
		var you = $("#you").attr("value");
		var result = {user:you,win:res};
		reset(result);
		return 1;
	}
	
	if ($("#curhp").html() <= 0) {
		$("#curhp").html(0);
		alert(pokemon[0] + " fainted!");
		var res = 0;
		var you = $("#you").attr("value");
		var result = {user:you,win:res};
		reset(result);
		return 1;
	}
		
}

$("#choosepoke").click(function() {
	$("#chooseform").hide();
	$("#choosepoke").hide();
	makegame();
});

$("#choosemove").click(function() {
	move();
});

$("#reset").click(function() {
	location.reload();
});

$("#logoff").click(function() {
	document.cookie = "user=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
	location.reload();
});

