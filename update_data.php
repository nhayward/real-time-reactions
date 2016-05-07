<?php

$myfile = fopen("js/data.js", "w") or die("Unable to open file!");
$arrayStart = "var reactions = ";
fwrite($myfile, $arrayStart);
$data = $_POST["reactions"];
fwrite($myfile, $data);
$arrayEnd = ";";
fwrite($myfile, $arrayEnd);
fclose($myfile);

?>