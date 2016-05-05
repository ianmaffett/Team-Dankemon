$(document).ready(function() {
	var request = $.ajax({
		url: "php/makenews.php",
		type: "GET",
		dataType: "text"
	});
	
	request.done (function(data){
		$("#newsdiv").html(data);
	})
	request.fail (function(jqXHR, textStatus) {
		alert("News not found.");
	})
});
