$(document).ready(function() {
	$("#creform").hide();
});

function val(posts) {
		$.ajax({
			url:"php/valuser.php",
			method:"POST",
			data:posts,
			success:function(data,status,jqXHR){
				alert(data + status);
			},
			failure: function() {alert("!!!");}
	});
	
	return data;
}

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
	
	var val = val(posts);
	alert(val);
});

$("#create").click(function() {
	$("#create").hide();
	$("#forgot").hide();
	$("#login").hide();
	$("#creform").show();
});