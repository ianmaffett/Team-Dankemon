if ($("#cook").attr(value) == 1) {

$(document).ready(function() {
	$("#choose").show();
	$("#chooseform").show();
	$("#create").hide();
	$("#forgotbutton").hide();
	$("#login").hide();
});

var poke1name = "";
var poke1info = "";
var poke1img = "";

var poke2name = "";
var poke2info = "";
var poke2img = "";

var poke3name = "";
var poke3info = "";
var poke3img = "";

var poke4name = "";
var poke4info = "";
var poke4img = "";

var poke5name = "";
var poke5info = "";
var poke5img = "";

var poke6name = "";
var poke6info = "";
var poke6img = "";


function makechoose() {

	var poke1 = $.ajax({
			url:"php/choose.php",
			type:"GET",
			data:{"id":1},
			success:function(data){
				poke1name = data.name;
				poke1info = data.pokeinfo;
				poke1img = data.pokeimg;
			},
			dataType:"json",
			async:false
		});
		
	var poke2 = $.ajax({
			url:"php/choose.php",
			type:"GET",
			data:{"id":2},
			success:function(data){
				poke2name = data.name;
				poke2info = data.pokeinfo;
				poke2img = data.pokeimg;
			},
			dataType:"json",
			async:false
		});
	
	var poke3 = $.ajax({
			url:"php/choose.php",
			type:"GET",
			data:{"id":3},
			success:function(data){
				poke3name = data.name;
				poke3info = data.pokeinfo;
				poke3img = data.pokeimg;
			},
			dataType:"json",
			async:false
		});
		
	var poke4 = $.ajax({
			url:"php/choose.php",
			type:"GET",
			data:{"id":4},
			success:function(data){
				poke4name = data.name;
				poke4info = data.pokeinfo;
				poke4img = data.pokeimg;
			},
			dataType:"json",
			async:false
		});
		
	var poke5 = $.ajax({
			url:"php/choose.php",
			type:"GET",
			data:{"id":5},
			success:function(data){
				poke5name = data.name;
				poke5info = data.pokeinfo;
				poke5img = data.pokeimg;
			},
			dataType:"json",
			async:false
		});
		
	var poke6 = $.ajax({
			url:"php/choose.php",
			type:"GET",
			data:{"id":6},
			success:function(data){
				poke6name = data.name;
				poke6info = data.pokeinfo;
				poke6img = data.pokeimg;
			},
			dataType:"json",
			async:false
		});
		
		
	
	var outstr = "<input type='radio' name='pokemon' value='" + poke1name + "' checked>";
		outstr += "<img src='" + poke1img + "' alt='" + poke1info + "' /><br>";
	 	outstr += "<a href='" + poke1info + "'>" + poke1name + "</a></input><br><br>";
	 	
	 	outstr += "<input type='radio' name='pokemon' value='" + poke2name + "'>";
		outstr += "<img src='" + poke2img + "' alt='" + poke2info + "' /><br>";
	 	outstr += "<a href='" + poke2info + "'>" + poke2name + "</a></input><br><br>";
	 	
	 	outstr += "<input type='radio' name='pokemon' value='" + poke3name + "'>";
		outstr += "<img src='" + poke3img + "' alt='" + poke3info + "' /><br>";
	 	outstr += "<a href='" + poke3info + "'>" + poke3name + "</a></input><br><br>";

		outstr += "<input type='radio' name='pokemon' value='" + poke4name + "'>";
		outstr += "<img src='" + poke4img + "' alt='" + poke4info + "' /><br>";
	 	outstr += "<a href='" + poke4info + "'>" + poke4name + "</a></input><br><br>";

		outstr += "<input type='radio' name='pokemon' value='" + poke5name + "'>";
		outstr += "<img src='" + poke5img + "' alt='" + poke5info + "' /><br>";
	 	outstr += "<a href='" + poke5info + "'>" + poke5name + "</a></input><br><br>";

		outstr += "<input type='radio' name='pokemon' value='" + poke6name + "'>";
		outstr += "<img src='" + poke6img + "' alt='" + poke6info + "' /><br>";
	 	outstr += "<a href='" + poke6info + "'>" + poke6name + "</a></input><br><br>";

	return outstr;
}

$("#choose").click(function() {
	$("#choose").hide();
	$("#choosepoke").show();
	$("#chooseform").append(makechoose());
});
}