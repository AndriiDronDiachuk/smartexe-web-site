<?php
	$to = "ehud.zagury@gmail.com";
	$from = $to;
	$subject = "Contact us form ERROR";
	$message = "We have some problems with email service. Please contact support team.";
	$boundary = md5(date('r', time()));
	$headers = "MIME-Version: 1.0\r\n";
	$headers  .= "Content-type: text/plain; charset=windows-1251 \r\n";
	$headers .= 'From: ehud.zagury@gmail.com' . "\r\n" .
		'X-Mailer: PHP/' . phpversion();

	$result = mail($to,$subject,$message,$headers);

	if ($result) {
		die();
	}
?>




