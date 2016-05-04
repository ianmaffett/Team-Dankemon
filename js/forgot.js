function valid(posts) {
	var val;
	
	$.ajax({
		url:"php/valemail.php",
		method:"POST",
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

function pass_posts(posts) {
	var test;

	$.ajax({
		url:"php/forgot.php",
		method:"POST",
		data:posts,
		datatype:"text",
		async:false,
		success:function(data){
			test = data;
		},
		error:function(data,status,jqXHR,error){
			alert("Validation failure");
		}
	});
	
	alert(test);
}

$("#forgotbutton").click(function() {
	$("#create").hide();
	$("#forgotbutton").hide();
	$("#login").hide();
	$("#forgotform").show();
});

$("#forgot").click(function() {
	var fuser = $("#forgotuser").val();
	var femail = $("#forgotemail").val();
	
	posts = {user:fuser,email:femail};
	
	var val = valid(posts);
	
	if (val == 0) {
		alert("Username and Email combination invalid.")
	}
	else if (val == 1) {
		pass_posts(posts);
	}
});