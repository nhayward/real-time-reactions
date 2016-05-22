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

	var tweets = [];

	function gatherTweets(tweet) {
		tweets.push(tweet);
	}

	var j = 0;

	function showTweets() {
		if (j > tweets.length - 1) {
			j = 0;
		}
		$("#reaction").html(tweets[j]);
		// $("#reaction-container").height($("#reaction").height() + 46);
		$("#reaction-container").css('visibility','visible').hide().fadeIn(3000);
		setTimeout(function() {
			$("#reaction-container").fadeOut(3000);
		}, 10000);
		setTimeout(function() {
			j++;
			setTimeout(showTweets(), 3000);
		}, 13000);
	}

	showTweets();

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
				data: ({tweetId: $(this)[0].id_str}),
				success: function(tweetData) {
					gatherTweets(tweetData.html);
				}
			});
		});
	});
});
