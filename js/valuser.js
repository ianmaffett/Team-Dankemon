$("#submit").click(function() {
	var posts = {user:$("#username").val(),pass:$("#password").val()};
	pass_post_val(posts);
});


function pass_post_val(posts) {
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
			data:posts,
			datatype:"text",
			success:function(data,status,jqXHR){
				alert("Ajax!!! " + data + status);
			},
			error:function(data,status,jqXHR,error){
				alert("Ajax!!! " + data + status + error);
			}
		});
		
		passreq.done(function(data) {
			if(data == 1) {
				alert("Success!");
			}
			else {
				alert("Wrong username/password combination.");
			}
		
		});
		}
		else { 
			alert("Username does not exist!");
		}
	});
}