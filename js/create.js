$(document).ready(function() {
	$("#creform").hide();
});

$("#create").click(function() {
	$("#create").hide();
	$("#forgot").hide();
	$("#login").hide();
	$("#creform").show();
});