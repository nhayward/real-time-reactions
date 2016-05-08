$(document).ready(function() {
	$("#comment_form").on("submit", function () {
		if ($("#your-name").val() === "" || $("#message").val() === "") {
			alert("Please fill out all fields!");
		} else {
			reactions.push({reaction: $("#message").val(), name: $("#your-name").val()});
			$.ajax({
				type: "POST",
				url: "php/update_data.php",
				data: {reactions: JSON.stringify(reactions)}
            });
			$("#comment_form").trigger("reset");
		}
		return false;
	});
});
