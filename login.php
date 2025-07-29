<?php
$mysqli = new mysqli("localhost", "your_user", "your_pass", "wave");

$username = $_POST["username"];
$password = $_POST["password"];

$stmt = $mysqli->prepare("SELECT password FROM users WHERE username = ?");
$stmt->bind_param("s", $username);
$stmt->execute();
$stmt->bind_result($hashed);
$stmt->fetch();

if (password_verify($password, $hashed)) {
    echo "ok";
} else {
    echo "error";
}