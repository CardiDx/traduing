<?php

// add email address to file
$email = $_POST['email'];

echo '<pre>';
print_r($_POST);
echo '</pre>';

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
$mail->addAddress('mm-trading@mail.ru'); // Кому будет уходить письмо
$mail->isHTML(true); // Set email format to HTML

$mail->Subject = 'Заказ на MM-Trading!';
$mail->Body    = '<h2>Заказ на MM-Trading</h2>' . 
                 '<p>Цена: ' . $_POST['amountVal'] . '</p>' .
                 '<p>Имя: ' . $_POST['name'] . '</p>' .
                 '<p>Мейл: ' . $_POST['email'] . '</p>' .
                 '<p>Телефон: ' . $_POST['phone'] . '</p>';
$mail->AltBody = '';

if(!$mail->send()) {
    echo 'Error';
} else {
    header("Refresh:0");
}
?>
