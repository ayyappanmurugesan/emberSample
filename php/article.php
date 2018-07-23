<?php

	header('Access-Control-Allow-Origin: *');
	
	
	$ddata = file_get_contents('article.json');
	
	header('Content-Type: application/json');
	
	echo $ddata;
?>