<?php

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

$email = $_POST['email'];

$mail->SMTPDebug = 3; // Enable verbose debug output


$mail->isSMTP(); // Set mailer to use SMTP
$mail->Host = 'smtp.mail.ru'; // Specify main and backup SMTP servers
$mail->SMTPAuth = true; // Enable SMTP authentication
$mail->Username = 'mm-trading@mail.ru'; // Ваш логин от почты с которой будут отправляться письма
$mail->Password = 'bw6M2rFAwMsYMnYTK77A'; // Ваш пароль от почты с которой будут отправляться письма
$mail->SMTPSecure = 'ssl'; // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465; // TCP port to connect to / этот порт может отличаться у других провайдеров

$mail->setFrom('mm-trading@mail.ru'); // от кого будет уходить письмо?
$mail->addAddress($email); // Кому будет уходить письмо
$mail->isHTML(true); // Set email format to HTML

$mail->Subject = 'PDF-гайд с сайта mm-trading.ru';
//$mail->Body    = 'Имя клиента: ' .$name . ' <br> Телефон: ' .$phone. '<br>Тип услуги: ' .$service;
$mail->Body    = 'Ваш емейл: ' .$email;
$mail->AddAttachment("guide.pdf"); // pdf file path
$mail->AltBody = '';

if(!$mail->send()) {
    echo 'Error';
} else {
    header("Refresh:0");
}
?>
