$("#submit").click(function() {
	var posts = {user:$("#username").val(),pass:$("#password").val()};
	var val = valid(posts);
	
	if (val = 1) {
		pass_posts(posts);
		alert(val);
	}
	else if (val = 0) {
		alert("Username does not exist!");
	}
	else {
		alert("Something went wrong! Refresh and try again.");
	}
});

function valid(posts) {
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

function pass_posts(posts) {
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
	
	return val;
	
	if (val = 1) {
		login(posts);
		alert("Login succesful!");
	}
	else if (val = 0) {
		alert("Username does not match password!");
	}
	else {
		alert("Something went wrong! Refresh and try again.");
	}
}

function login(posts) {
	document.cookie = "user="posts.user;
}
