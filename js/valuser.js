$("#submit").click(function() {
	var posts = {user:$("#username").val(),pass:$("#password").val()};
	pass_post(posts);
});

function pass_post(posts) {
		$.ajax({
			url:"php/valuser.php",
			method:"POST",
			data:posts,
			success:function(data,status,jqXHR){
				alert(data + status);
			}
		});
}