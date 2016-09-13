$(document).ready(function() {
	$("#comment_form").on("submit", function () {
		if ($("#your-name").val() === "" || $("#message").val() === "") {
			$("#submitMessage").css("color", "#a94442");
			$("#submitMessage").html("Please fill out all fields!");
			$("#submitMessage").fadeIn(500);
			setTimeout(function() {
				$("#submitMessage").fadeOut(1000);
			}, 5000);
		} else {
			reactions.push({reaction: $("#message").val(), name: $("#your-name").val()});
			$.ajax({
				type: "POST",
				url: "php/updateData.php",
				data: {reactions: JSON.stringify(reactions)}
            });
			$("#comment_form").trigger("reset");
			$("#submitMessage").css("color", "#3c763d");
			$("#submitMessage").html("Thanks for submitting your thoughts!");
			$("#submitMessage").fadeIn(500);
			setTimeout(function() {
				$("#submitMessage").fadeOut(1000);
			}, 5000);
		}
		return false;
	});
});
