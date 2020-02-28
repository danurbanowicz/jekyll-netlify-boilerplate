<?php
$con_name = $_POST['con_name'];
$con_email = $_POST['con_email'];
$con_message = $_POST['con_message'];
$secret="6Leo1x4UAAAAAJBlgecQoJQ-f_VIqaOx5gBHaD_X";
$response=$_POST["captcha"];

$verify=file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret={$secret}&response={$response}");
$captcha_success=json_decode($verify);
if ($captcha_success->success==false) {
  //This user was not verified by recaptcha.

}
else if ($captcha_success->success==true) {
  //This user is verified by recaptcha

}


$to = 'onurolker@gmail.com';   
$subject = 'Stephans Form';

$message = '<strong>Name : </strong>'.$con_name.'<br/><br/>';

$message .= $con_message.'<br/>';


$headers = 'From: '.$con_name.' '.$con_email . "\r\n" ;
$headers .='Reply-To: '. $to . "\r\n" ;
$headers .='X-Mailer: PHP/' . phpversion();
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-type: text/html; charset=iso-8859-1\r\n"; 

mail($to,$subject,$message,$headers);
echo 1;