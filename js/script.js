$(document).ready(function() {
	var i = reactions.length - 1;

	function showReactions() {
		if ( i == -1 ) {
			location.reload();
		}
		$("#reaction").text("\"" + reactions[i].reaction + "\"");
		$("#name").text("-" + reactions[i].name);
		$("#reaction-container").height($("#reaction").height() + 46);
		$("#reaction-container").css('visibility','visible').hide().fadeIn(3000);
		setTimeout(function() {
			$("#reaction-container").fadeOut(3000);
		}, 10000);
		setTimeout(function() {
			i--;
			setTimeout(showReactions(), 3000);
		}, 13000);
	}

	showReactions();

	$("#comment_form").on("submit", function () {
		if ($("#your-name").val() === "" || $("#message").val() === "") {
			alert("Please fill out all fields!");
		} else {
			reactions.push({reaction: $("#message").val(), name: $("#your-name").val()});
			$.ajax({
				type: "POST",
				url: "update_data.php",
				data: {reactions: JSON.stringify(reactions)}
            });
			$("#comment_form").trigger("reset");
		}
		return false;
	});
});
