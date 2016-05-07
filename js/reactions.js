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
});
