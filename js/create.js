$(document).ready(function() {
	$("#creform").hide();
});

function valid(posts) {
	var request = $.ajax({
		url:"php/valuser.php",
		method:"POST",
		data:posts,
		datatype:"text"
	});
	
	request.done(function(data) {
		if(data == 0) {
		
		$.ajax({
			url:"php/create.php",
			type:"POST",
			data:posts
		});
		alert("Account created!")
		}
		else { 
			alert("Account already exists");
		}
	});
}

$("#cre").click(function() { 
	var creuser = $("#creusername").val();
	var crepass = $("#crepassword").val();
	var creplay = $("#creplayer").val();
	var creriv = $("#crerival").val();
	var creemail = $("#creemail").val();
	
	var posts = {user:creuser,pass:crepass,play:creplay,riv:creriv,email:creemail};
	
	valid(posts);
});

$("#create").click(function() {
	$("#create").hide();
	$("#forgot").hide();
	$("#login").hide();
	$("#creform").show();
});