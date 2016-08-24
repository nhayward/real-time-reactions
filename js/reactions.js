$(document).ready(function() {
	var i = reactions.length - 1;

	function showReactions() {
		$("#reaction-container").append("<br /><div id='name'></div>");
		$("#reaction").text("\"" + reactions[i].reaction + "\"");
		$("#name").text("-" + reactions[i].name);
		$("#reaction-container").css('visibility','visible').hide().fadeIn(3000);
		setTimeout(function() {
			$("#reaction-container").fadeOut(3000);
		}, 10000);
		setTimeout(function() {
			i--;
			if (i == -1 && j == tweets.length) {
				location.reload();
			} else if (j == tweets.length) {
				setTimeout(showReactions(), 3000);
			} else {
				setTimeout(showTweets(), 3000);
			}
		}, 13000);
	}

	showReactions();

	var tweets = [];

	function gatherTweets(tweet) {
		tweets.push(tweet);
	}

	var j = 0;

	function showTweets() {
		$("#reaction-container br, #name").remove();
		$("#reaction").html(tweets[j]);
		$("#reaction-container").css('visibility','visible').hide().fadeIn(3000);
		setTimeout(function() {
			$("#reaction-container").fadeOut(3000);
		}, 10000);
		setTimeout(function() {
			j++;
			if (i == -1 && j == tweets.length) {
				location.reload();
			} else if (i == -1) {
				setTimeout(showTweets(), 3000);
			} else {
				setTimeout(showReactions(), 3000);
			}
		}, 13000);
	}


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
