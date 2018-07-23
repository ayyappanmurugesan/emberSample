<?php

	header('Access-Control-Allow-Headers: *');

	header('Access-Control-Allow-Origin: *');
	
	$data = json_decode(file_get_contents('php://input'), true);
	
	$ddata = file_get_contents('article.json');
	
	$dbdata=json_decode($ddata, true);
	
		$rating=0;
	
		if(isset($data['id'])) {
		
			for($i=0;$i<count($dbdata);$i++) {
			
				$dbdat=$dbdata[$i];
				
				if(strcmp($dbdat['id'],$data['id'])==0) {
				
					$dbdata[$i]=array("id"=>$data["id"],"content"=>$data["content"],"rating"=>intval(((($data["rating"]*20)+$dbdat["rating"])/2).""));
					
					$rating=intval(((($data["rating"]*20)+$dbdat["rating"])/2)."");
				
					break;
				
				}
			
			}
		
		} else {
		
			if(is_null($data['content'])==false) {
	
			$datetime=str_replace(".","",microtime(true));
		
			$arr=array("content"=>$data['content'],"id"=>$datetime,"rating"=>0);
			
			array_push($dbdata,$arr);
			
			}
			
		}
		
		$dbstr=json_encode($dbdata);
	
		$myfile = fopen("article.json", "w");
		
		fwrite($myfile,$dbstr);
		
		fclose($myfile);
		
		header('Content-Type: application/json');
	
		echo $dbstr;
	
	
	
	

?>