$(document).ready(function() {
	$("#creform").hide();
});


function pass_post(posts) {

	$.ajax({
		url:"php/create.php",
		type:"POST",
		data:posts,
		success:function(data,status,jqXHR){
            alert("Data: " + data + "\nStatus: " + status)}
	});
}

$("#cre").click(function() { 
	var creuser = $("#creusername").val();
	var crepass = $("#crepassword").val();
	var creplay = $("#creplayer").val();
	var creriv = $("#crerival").val();
	var creemail = $("#creemail").val();
	
	var posts = {user:creuser,pass:crepass,play:creplay,riv:creriv,email:creemail};
	
	pass_post(posts);
});

$("#create").click(function() {
	$("#create").hide();
	$("#forgot").hide();
	$("#login").hide();
	$("#creform").show();
});