$(document).ready(function() {
	$("#creform").hide();
	$("#choose").hide();
	$("#chooseform").hide();
	$("#choosepoke").hide();
});


function valid(posts) {
	var request = $.ajax({
		url:"php/valuser.php",
		method:"POST",
		data:posts,
		datatype:"text"
	});

	return data;
}

function pass_post(posts) {

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

	var val = val(posts);
	alert(val);

	valid(posts);
});

$("#create").click(function() {
	$("#create").hide();
	$("#forgot").hide();
	$("#login").hide();
	$("#creform").show();
});