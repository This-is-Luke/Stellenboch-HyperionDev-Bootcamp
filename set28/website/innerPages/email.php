<?php
if ($_POST) {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];
    $service = $_POST["service"];
    
    // File upload settings
    $attachmentUploadDir = "uploads/";
    $allowFileTypes = array('pdf', 'doc', 'docx', 'jpg', 'png', 'jpeg');

    // Upload attachment file
    if (!empty($_FILES["attachment"]["name"])) {
        $targetDir = $attachmentUploadDir;
        $fileName = basename($_FILES["attachment"]["name"]);
        $targetFilePath = $targetDir . $fileName;
        $fileType = pathinfo($targetFilePath, PATHINFO_EXTENSION);

        // Allow certain file formats
        if (in_array($fileType, $allowFileTypes)) {
            // Upload file to the server
            if (move_uploaded_file($_FILES["attachment"]["tmp_name"], $targetFilePath)) {
                $uploadedFile = $targetFilePath;
            } else {
                $uploadStatus = 0;
                $statusMsg = "Sorry, there was an error uploading your file.";
            }
        } else {
            $uploadStatus = 0;
            $statusMsg = 'Sorry, only ' . implode('/', $allowFileTypes) . ' files are allowed to upload.';
        }
    }

    // Send email with attachment
    if ($uploadStatus == 1) {
        $to = "contact@thisisluke.co.za";
        $subject = "Form Submission: " . $service;
        $body = "Name: " . $name . "\nEmail: " . $email . "\nMessage: " . $message;
        $headers = "From: " . $email;

        if (!empty($uploadedFile)) {
            $body .= "\n\nAttachment: " . $uploadedFile;
        }

        mail($to, $subject, $body, $headers);
    }
}
?>
