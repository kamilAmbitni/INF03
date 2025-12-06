<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <title>Połączenie PHP z MySQL – lekcja 06</title>
</head>
<body>

<h1>Połączenie PHP z bazą danych MySQL</h1>

<?php
// ---------------------------------------------------------
// 1. ZMIENNE Z DANYMI DOSTĘPOWYMI DO BAZY
// ---------------------------------------------------------

$host = "localhost";   // adres serwera MySQL (w XAMPP zawsze localhost)
$user = "root";        // login do bazy danych (domyślnie root)
$pass = "";            // hasło (w XAMPP jest puste!)
$db   = "wedkowanie";  // NAZWA bazy, którą masz w phpMyAdmin



// ---------------------------------------------------------
// 2. NAWIĄZANIE POŁĄCZENIA Z BAZĄ – WERSJA PROCEDURALNA
// mysqli_connect(host, login, hasło, nazwa_bazy)
// ---------------------------------------------------------

$con = mysqli_connect($host, $user, $pass, $db)
    or die("Błąd połączenia z bazą danych!");

// Jeśli coś poszło źle → skrypt STOP i wyświetla "Błąd połączenia..."



// ---------------------------------------------------------
// 3. USTAWIENIE KODOWANIA ZNAKÓW NA UTF-8
// Bardzo ważne, aby polskie znaki działały poprawnie
// ---------------------------------------------------------
mysqli_set_charset($con, "utf8");



// ---------------------------------------------------------
// 4. JEŚLI DOTARLIŚMY TUTAJ → POŁĄCZENIE JEST UDANE
// ---------------------------------------------------------

echo "<p style='color:green;'>Połączono poprawnie z bazą <b>$db</b>!</p>";



// ---------------------------------------------------------
// 5. ZAMKNIĘCIE POŁĄCZENIA
// Nie jest obowiązkowe, ale NA EGZAMINIE wymagane
// ---------------------------------------------------------
mysqli_close($con);

echo "<p style='color:blue;'>Połączenie zostało zamknięte.</p>";

?>

</body>
</html>
