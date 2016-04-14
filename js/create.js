$(document).ready(function() {
	$("#creform").hide();
});

$("#cre").click(function() { 
	var x = $.ajax({
		url: "php/create.php",
		type: "POST"
	});
	if (x) {
		$('#newsdiv').hide()
	}
});

$("#create").click(function() {
	$("#create").hide();
	$("#forgot").hide();
	$("#login").hide();
	$("#creform").show();
});