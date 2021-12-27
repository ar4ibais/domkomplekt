<?php
    $phone = $_POST['phone'];

    if($phone != '') {
    if($_SERVER['HTTP_HOST'] != getenv("HTTP_HOST")) return false;
    require 'PHPMailer/PHPMailerAutoload.php';
    $email_files = $_POST['email_files'];
    $mail = new PHPMailer;

    $mail->isSMTP();
    $mail->Host = 'ssl://smtp.yandex.ru';
    $mail->SMTPAuth = true;
    $mail->Username = 'busupsendmail@yandex.ru';                 
    $mail->Password = '8672539911';  
    $mail->SMTPSecure = 'ssl';                            
    $mail->Port = 465;                                      

    $mail->CharSet = "UTF-8";
    $mail->From = 'busupsendmail@yandex.ru';
    $mail->FromName = 'ГазонКомплект';     
    $mail->addAddress('elitm15@yandex.ru','elitm15@yandex.ru');     
    $mail->isHTML(false);                                  
    $name = $_POST['name'];
        
    $wf = $_POST['wf'];
    $type_object = $_POST['type_object'];
    $square_object = $_POST['square_object'];
    $calculated_price = $_POST['calculated_price'];


    $mail->Subject = 'Заявка с сайта ГазонКомплект';
    $mail->Body    = "Имя: $name \nТелефон: $phone \nТип объекта: $type_object \nПлощадь объекта: $square_object \nЦена: $calculated_price\n\nС какой формы отправили заявку: $wf";
    
if($mail->send()) {
    return true;
} else {
    return false;
}   
}
        