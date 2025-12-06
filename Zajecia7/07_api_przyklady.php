<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <title>mysqli i PDO - przykłady połączeń</title>
</head>
<body>

<h1>Porównanie mysqli i PDO</h1>




<?php


// ---------------------------------------------------------
// DANE DOSTĘPOWE DO BAZY DANYCH
// (musisz mieć taką bazę w phpMyAdmin - np. "wedkowanie")
// ---------------------------------------------------------
$host = "localhost";   // adres serwera MySQL
$user = "root";        // login MySQL
$pass = "";            // hasło MySQL (puste w XAMPP)
$db   = "wedkowanie";  // nazwa bazy danych



// =================================================================
// 1) POŁĄCZENIE - mysqli (WERSJA PROCEDURALNA)
// =================================================================

echo "<h2>Połączenie mysqli (proceduralne)</h2>";

$con = mysqli_connect($host, $user, $pass, $db); // próba połączenia z bazą

if (!$con) {
    // jeśli połączenie się nie udało - pokaż błąd:
    die("Błąd mysqli: " . mysqli_connect_error());
}

echo "<p style='color:green;'>Połączono poprawnie (mysqli proceduralne)</p>";

mysqli_close($con); // zamykamy połączenie



// =================================================================
// 2) POŁĄCZENIE - mysqli (WERSJA OBIEKTOWA)
// =================================================================

echo "<h2>Połączenie mysqli (obiektowe)</h2>";

$connection = new mysqli($host, $user, $pass, $db);  // tworzymy obiekt klasy mysqli

// sprawdzamy, czy wystąpił błąd
if ($connection->connect_errno) {
    die("Błąd połączenia: " . $connection->connect_error);
}

echo "<p style='color:green;'>Połączono poprawnie (mysqli obiektowe)</p>";

$connection->close(); // zamykamy połączenie



// =================================================================
// 3) POŁĄCZENIE - PDO (obiektowe)
// =================================================================

echo "<h2>Połączenie PDO</h2>";

try {
    // Tworzymy tzw. DSN - opis połączenia (jaki silnik, host, baza)
    $dsn = "mysql:host=$host;dbname=$db;charset=utf8";

    // Tworzymy obiekt PDO - POŁĄCZENIE
    $pdo = new PDO($dsn, $user, $pass);

    // Ustawiamy tryb zgłaszania błędów - bardziej profesjonalnie
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    echo "<p style='color:green;'>Połączono poprawnie (PDO)</p>";

} catch (PDOException $e) {
    // Gdy połączenie się nie uda - przechwytujemy wyjątek
    echo "<p style='color:red;'>Błąd PDO: " . $e->getMessage() . "</p>";
}


/*
RÓŻNICA MIĘDZY TYMI SPOSOBAMI ŁĄCZENIA SIĘ Z BAZĄ:

1) mysqli – WERSJA PROCEDURALNA
   $con = mysqli_connect($host, $user, $pass, $db);
   - Jest to zwykła funkcja PHP.
   - Przekazujemy do niej dane połączenia.
   - Wynik działania to połączenie zapisane w zmiennej ($con).
   - Styl proceduralny = "wywołuję funkcję, podaję argumenty".

2) mysqli – WERSJA OBIEKTOWA
   $connection = new mysqli($host, $user, $pass, $db);
   - "new mysqli" tworzy OBIEKT klasy mysqli.
   - Obiekt to jak pudełko, które ma:
       → własne zmienne (np. connect_errno, connect_error)
       → własne metody (np. close(), query(), set_charset()).
   - Zamiast funkcji używamy metod: np. $connection->close();
   - Styl obiektowy = pracujemy na obiekcie, który "umie" więcej.

3) PDO – PEŁNY OBIEKTOWY INTERFEJS
   $pdo = new PDO($dsn, $user, $pass);
   - PDO zawsze działa obiektowo.
   - Obsługuje wiele baz danych (MySQL, SQLite, PostgreSQL itd.).
   - Bardziej profesjonalne, ale na egzaminie nie jest wymagane.
   - Wymaga tzw. DSN, czyli pełnego opisu połączenia.

PODSUMOWANIE:
- mysqli_connect() → funkcja (proceduralnie)
- new mysqli(...)  → obiekt mysqli (bardziej nowocześnie)
- new PDO(...)      → obiekt PDO (najbardziej uniwersalne)

Do egzaminu INF.03 używamy głównie mysqli (proceduralnie lub obiektowo).
*/


?>

</body>
</html>
