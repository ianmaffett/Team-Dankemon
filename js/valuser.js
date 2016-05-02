$("#submit").click(function() {
	var posts = {user:$("#username").val(),pass:$("#password").val()};
	pass_post_val(posts);
});


function pass_post_val(posts) {

	var posts2=posts;
	
	var request = $.ajax({
		url:"php/valuser.php",
		method:"POST",
		data:posts,
		datatype:"text"
	});
	
	
	request.done(function(data) {
		if(data == 1) {
		var passreq = $.ajax({
			url:"php/valpass.php",
			type:"POST",
			data:posts2,
			dataType:"text"
		});
		
		passreq.done(function(data) {
			if(data == 1) {
				alert("Success!");
				
				window.location.href = window.location.href + "?login=true";
			}
			else {
				alert("Wrong username/password combination. Please refresh your browser.");
			}
		
		});
		}
		else { 
			alert("Username does not exist!");
		}
	});
}