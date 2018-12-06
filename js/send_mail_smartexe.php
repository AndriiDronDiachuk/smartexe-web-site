<?php

require_once '../PHPMailer/PHPMailer.php';
require_once '../PHPMailer/SMTP.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

try {
$email = 'contacteu@smartexe.com';
$mail = new PHPMailer();
$mail->IsSMTP(); // enable SMTP
$mail->SMTPDebug = 0; // debugging: 1 = errors and messages, 2 = messages only
$mail->Host = 'localhost';

$mail->Port = 25;

$mail->ssl = false;

$mail->authentication = false;
$mail->IsHTML(true);
$mail->Username  = $email;
$mail->Password = "cese082917";

$mail->Subject = "Contact us form ERROR";
$mail->Body = "We have some problems with email service. Please contact support team."

$mail->setFrom($email, 'Smartexe');
$mail->addAddress($email);  



$mail->send();

die();
} catch (Exception $e) {
    echo 'Message could not be sent.';
    echo 'Mailer Error: ' . $mail->ErrorInfo;
}	
?>
