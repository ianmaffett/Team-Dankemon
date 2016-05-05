$(document).ready(function() {
	$("#creform").hide();
	$("#choose").hide();
	$("#chooseform").hide();
	$("#choosepoke").hide();
	$("#gameleft").hide();
	$("#gameright").hide();
	$("#reset").hide();
	$("#forgotform").hide();
	$("#logoff").hide();
});


function validcre(posts) {
	var val;
	
	$.ajax({
		url:"php/valuser.php",
		type:"POST",
		data:posts,
		datatype:"text",
		async:false,
		success:function(data){
			val = data;
		},
		error:function(data,status,jqXHR,error){
			alert("Validation failure");
		}
	});
	
	return val;
}

function pass_posts_cre(posts) {

	$.ajax({
		url:"php/create.php",
		type:"POST",
		data:posts,
		success:function(data,status,jqXHR){
            alert("Account created!")
        },
        error:function(data,status,jqXHR,error){
			alert("Failed to create account.");
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
	
	var val = validcre(posts);
	
	if(val == 0) {
		pass_posts_cre(posts);
	}
	else {
		alert("Account already exists");
	}
});

$("#create").click(function() {
	$("#create").hide();
	$("#forgotbutton").hide();
	$("#login").hide();
	$("#creform").show();
});

