<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <title>Fetchowanie danych z mysqli</title>
</head>
<body>

<h1>Fetchowanie danych - mysqli</h1>

<?php

/*
    ===========================================
    METODY FETCHOWANIA DANYCH (POBIERANIA REKORDÓW)
    ===========================================

    W wyniku wykonania zapytania SELECT (mysqli_query)
    otrzymujemy "zestaw wyników" – obiekt mysqli_result.

    Aby odczytać kolejne rekordy z tego zestawu,
    używamy jednej z czterech metod fetchowania:

    1) mysqli_fetch_row($result)
       -----------------------------------------
       • Zwraca JEDEN rekord jako tablicę indeksowaną:
         $row[0], $row[1], $row[2] …
       • Indeksy liczbowe odpowiadają kolumnom
         w kolejności zwróconej przez SELECT.
       • Najprostsze, ale najmniej czytelne.

    2) mysqli_fetch_assoc($result)
       -----------------------------------------
       • Zwraca rekord jako tablicę asocjacyjną:
           $row["kolumna"] 
       • Kluczem (indeksem) jest nazwa kolumny.
       • Najczytelniejsza i najczęściej używana metoda
         (szczególnie w aplikacjach i egzaminach INF.03).

    3) mysqli_fetch_array($result [, tryb])
       -----------------------------------------
       • Zwraca rekord jako TABLICĘ MIESZANĄ:
           $row[0]          – indeks liczbowy
           $row["kolumna"]  – indeks tekstowy
       • Zawiera dane PODWÓJNIE (duplikaty).
       • Można ograniczyć typ indeksów:
           MYSQLI_ASSOC – tylko nazwy kolumn
           MYSQLI_NUM   – tylko indeksy numeryczne

    4) mysqli_fetch_object($result)
       -----------------------------------------
       • Zwraca rekord jako OBIEKT.
       • Dostęp do danych przez właściwości obiektu:
           $row->kolumna
       • Czytelne, gdy lubimy notację obiektową;
         dobre do przekazywania rekordów w dalej przetwarzaniu.

    ===========================================
    UWAGA: każda metoda fetch pobiera po 1 rekordzie.
    Aby pobrać wszystkie rekordy, stosujemy pętlę while.

    Po przejściu pętli wskaźnik wyników jest na końcu
    – aby fetchować ponownie, trzeba użyć:
        mysqli_data_seek($result, 0);
    (czyli reset wskaźnika na początek)
    ===========================================
*/

// ------------------------------------------------------
// 1) DANE DOSTĘPOWE DO BAZY
// ------------------------------------------------------
$host = "localhost";   // serwer MySQL
$user = "root";        // login do MySQL (domyślnie root)
$pass = "";            // hasło (w XAMPP puste)
$db   = "wedkowanie";  // nazwa bazy danych



// ------------------------------------------------------
// 2) NAWIĄZANIE POŁĄCZENIA Z BAZĄ MYSQL
// ------------------------------------------------------
$con = mysqli_connect($host, $user, $pass, $db);

// Sprawdzamy, czy połączenie działa
if (!$con) {
    die("Błąd połączenia: " . mysqli_connect_error());
}

// Ustawienie polskich znaków
mysqli_set_charset($con, "utf8");



// ------------------------------------------------------
// 3) PRZYGOTOWANIE I WYKONANIE ZAPYTANIA SELECT
// ------------------------------------------------------
$sql = "SELECT id, nazwa, wystepowanie FROM ryby";
$result = mysqli_query($con, $sql);  // wykonanie zapytania

if (!$result) {
    die("Błąd zapytania SQL!");
}



// ------------------------------------------------------
// 4) ILE REKORDÓW ZWRÓCIŁA BAZA?
// ------------------------------------------------------
$ile = mysqli_num_rows($result);
echo "<p><strong>Liczba zwróconych rekordów: $ile</strong></p>";



// ------------------------------------------------------
// 5) FETCHOWANIE - mysqli_fetch_row (indeksy liczbowe)
// ------------------------------------------------------
echo "<h2>fetch_row() - tablica indeksowana</h2>";

mysqli_data_seek($result, 0); // cofamy wskaźnik na pierwszy rekord

while ($row = mysqli_fetch_row($result)) {
    // $row[0] = id
    // $row[1] = nazwa ryby
    // $row[2] = występowanie
    echo $row[0] . " - " . $row[1] . " - " . $row[2] . "<br>";
}



// ------------------------------------------------------
// 6) FETCHOWANIE - mysqli_fetch_assoc (indeksy słowne)
// ------------------------------------------------------
echo "<h2>fetch_assoc() - tablica asocjacyjna</h2>";

mysqli_data_seek($result, 0); // reset wyników

while ($row = mysqli_fetch_assoc($result)) {
    echo $row["id"] . " - " . $row["nazwa"] . " - " . $row["wystepowanie"] . "<br>";
}



// ------------------------------------------------------
// 7) FETCHOWANIE - mysqli_fetch_array (mieszane indeksy)
// ------------------------------------------------------
echo "<h2>fetch_array() - indeksy liczbowe i słowne</h2>";

mysqli_data_seek($result, 0);

while ($row = mysqli_fetch_array($result)) {
    // Dostęp do danych na dwa sposoby:
    // numerycznie: $row[1]
    // asocjacyjnie: $row["nazwa"]
    echo $row[1] . " / " . $row["nazwa"] . "<br>";
}



// ------------------------------------------------------
// 8) FETCHOWANIE - mysqli_fetch_object (obiekt)
// ------------------------------------------------------
echo "<h2>fetch_object() - rekord jako obiekt</h2>";

mysqli_data_seek($result, 0);

while ($row = mysqli_fetch_object($result)) {
    echo $row->id . " - " . $row->nazwa . " - " . $row->wystepowanie . "<br>";
}



// ------------------------------------------------------
// 9) ZAMKNIĘCIE POŁĄCZENIA
// ------------------------------------------------------
mysqli_close($con);
echo "<p style='color:blue;'>Połączenie zamknięte.</p>";

?>

</body>
</html>
