$(document).ready(function() {
	$("#choose").show();
	$("#chooseform").show();
	$("#create").hide();
	$("#forgot").hide();
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
		
		
	
	var outstr = "<a href='" + ;
	return outstr;
}

$("#choose").click(function() {
	$("#choose").hide();
	$("#chooseform").append(makechoose());
});