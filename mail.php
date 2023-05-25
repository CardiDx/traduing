<?php

// add email address to file
$email = $_POST['email'];
$jsonString = file_get_contents('emails.json');
$data = json_decode($jsonString, true);

if (!in_array($email, $data)){
    array_push($data, $email);
}

$newJsonString = json_encode($data);
file_put_contents('emails.json', $newJsonString);


// send mail
require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

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

$mail->Subject = 'Добро пожаловать в MM-Trading!';
$mail->Body    = 'Добро пожаловать в MM-Trading</br>
Посетить наш сайт Вы можете по ссылке <a href="https://mm-trading.ru/">https://mm-trading.ru/</a>';
$mail->Body    = 'Просим Вас ознакомиться с чек-листом обучения';
$mail->AddAttachment("guide.pdf"); // pdf file path
$mail->AltBody = '';

if(!$mail->send()) {
    echo 'Error';
} else {
    header("Refresh:0");
}
?>
