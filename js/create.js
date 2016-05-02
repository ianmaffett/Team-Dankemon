$(document).ready(function() {
	$("#creform").hide();
});

var result = "...";

function valid(posts) {
	var request = $.ajax({
		url:"php/valuser.php",
		method:"POST",
		data:posts,
		datatype:"text"
	});
	
	request.done(function(data) { $("#testdiv") = data } );
};

/*function pass_post(posts) {
	
	if(data == 0) {
		
	$.ajax({
		url:"php/create.php",
		type:"POST",
		data:posts,
		success:function(data,status,jqXHR){
            alert("Data: " + data + "\nStatus: " + status)}
	});
	}
	else { 
		alert("Account already exists");
	}
}*/

$("#cre").click(function() { 
	var creuser = $("#creusername").val();
	var crepass = $("#crepassword").val();
	var creplay = $("#creplayer").val();
	var creriv = $("#crerival").val();
	var creemail = $("#creemail").val();
	
	var posts = {user:creuser,pass:crepass,play:creplay,riv:creriv,email:creemail};
	
	valid(posts);
	
	alert("jQuery!!!! " + result);
});

$("#create").click(function() {
	$("#create").hide();
	$("#forgot").hide();
	$("#login").hide();
	$("#creform").show();
});