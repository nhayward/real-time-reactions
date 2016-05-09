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

	// showReactions();

	$.ajax({
		type: "GET",
		url: "php/hashtagGet.php"
	})
	.done(function(data) {
		$(JSON.parse(data).statuses).each(function() {
			$.ajax({
				type: "POST",
				url: "php/tweetGet.php",
				dataType: "json",
				data: ({tweetId: $(this)[0].id_str})
			})
			.done(function(tweetData) {
				console.log(tweetData.html);
			});
		});
	});
});
