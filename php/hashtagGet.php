<?php

require_once('TwitterAPIExchange.php');

$settings = array(
    'oauth_access_token' => "473002926-CelrbrFmrMc3BnVmmzlrkqB1dckmbH7Tk8O0GyRA",
    'oauth_access_token_secret' => "sdEKiKRajHbh5jVf5D1MKj6Iu1nl0xonbEDmDJStP5ILx",
    'consumer_key' => "ZAY7IicKN8kkbqzVOWm82IjXR",
    'consumer_secret' => "5jJmpTri1MaxicJss4Sl7kjKrqxExDwy4gsDKmsxxSpplCODjY"
);

$url = 'https://api.twitter.com/1.1/search/tweets.json';
$getfields = '?f=tweets&vertical=default&q=%23bornwardbound&src=typd&count=100&result_type=recent';
$requestMethod = 'GET';

$twitter = new TwitterAPIExchange($settings);
echo $twitter->setGetfield($getfields)
    ->buildOauth($url, $requestMethod)
    ->performRequest();

?>
