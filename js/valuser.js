$("#submit").click(function() {
	var posts = {user:$("#username").val(),pass:$("#password").val()};
	var val = valuser(posts);
	
	if (val == 1) {
		passposts(posts);
	}
	else if (val == 0) {
		alert("Username does not exist!");
	}
	else {
		alert("Something went wrong! Refresh and try again.");
	}
});

function valuser(posts) {
	var val;
	
	$.ajax({
		url:"php/valuser.php",
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

function passposts(posts) {
	var val;
	
	$.ajax({
		url:"php/valpass.php",
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
	
	if (val == 1) {
		login(posts);
		alert("Login succesful!");
	}
	else if (val == 0) {
		alert("Username does not match password!");
	}
	else {
		alert("Something went wrong! Refresh and try again.");
	}
}

function login(posts) {
	document.cookie = "user=" + posts.user;
}
