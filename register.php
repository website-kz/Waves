<?php
$mysqli = new mysqli("localhost", "your_user", "your_pass", "wave");

$username = $_POST["username"];
$password = password_hash($_POST["password"], PASSWORD_BCRYPT);

$stmt = $mysqli->prepare("INSERT INTO users (username, password) VALUES (?, ?)");
$stmt->bind_param("ss", $username, $password);
$stmt->execute();

echo "ok";