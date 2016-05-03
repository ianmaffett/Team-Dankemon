var pokemon = new Array();
var move1 = new Array();
var move2 = new Array();
var move3 = new Array();
var move4 = new Array();

function makegame() {
	var choice = $("#chooseform input[type='radio'][name='pokemon']:checked").val();
	
	$.ajax({
		url:"php/pokechoice.php",
		type:"GET",
		data:{"name":choice},
		success:function(data){
			pokemon.push(data.name,data.type1,data.hp,data.att,data.def,data.spatt,data.spdef,data.spd);
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
	
	$("#gamediv").append(pokemon.toString(",") + "<br>" + move1.toString(",") + "<br>" + move2.toString(",") + "<br>" + move3.toString(",") + "<br>" + move4.toString(","));
	
}


$("#choosepoke").click(function() {
	$("#chooseform").hide();
	$("#choosepoke").hide();
	makegame();
});

