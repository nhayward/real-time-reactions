<?php

require_once('TwitterAPIExchange.php');

$settings = array(
    'oauth_access_token' => "473002926-CelrbrFmrMc3BnVmmzlrkqB1dckmbH7Tk8O0GyRA",
    'oauth_access_token_secret' => "sdEKiKRajHbh5jVf5D1MKj6Iu1nl0xonbEDmDJStP5ILx",
    'consumer_key' => "ZAY7IicKN8kkbqzVOWm82IjXR",
    'consumer_secret' => "5jJmpTri1MaxicJss4Sl7kjKrqxExDwy4gsDKmsxxSpplCODjY"
);

$tweetID = $_POST['tweetId'];

$url = 'https://api.twitter.com/1.1/statuses/oembed.json';
$getfields = '?id=' . $tweetID;
$requestMethod = 'GET';

$twitter = new TwitterAPIExchange($settings);
echo $twitter->setGetfield($getfields)
    ->buildOauth($url, $requestMethod)
    ->performRequest();

?>
