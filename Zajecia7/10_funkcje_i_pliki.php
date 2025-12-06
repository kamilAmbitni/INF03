<?php
/* ============================================================
    LEKCJA 10 – FUNKCJE WBUDOWANE ORAZ ZAPIS DO PLIKÓW W PHP
   ============================================================ */

/* ------------------------------------------------------------
   1. GENEROWANIE LICZB LOSOWYCH
   ------------------------------------------------------------ */

// rand(min, max) – zwraca losową liczbę całkowitą
$losowa1 = rand(1, 10); // losuje liczbę od 1 do 10
echo "rand(): $losowa1<br>";

// mt_rand(min, max) – nowsza i szybsza wersja rand()
$losowa2 = mt_rand(100, 999); // losuje liczbę trzycyfrową
echo "mt_rand(): $losowa2<br><br>";


/* ------------------------------------------------------------
   2. FUNKCJE MATEMATYCZNE
   ------------------------------------------------------------ */

$liczba = 5.678;

echo "round(): " . round($liczba) . "<br>";   // zaokrąglenie klasyczne
echo "floor(): " . floor($liczba) . "<br>";   // zaokrąglenie w dół
echo "ceil(): " . ceil($liczba) . "<br>";     // zaokrąglenie w górę
echo "abs(): " . abs(-10) . "<br><br>";       // wartość bezwzględna


/* ------------------------------------------------------------
   3. OPERACJE NA ŁAŃCUCHACH – TEKST
   ------------------------------------------------------------ */

$tekst = "Programowanie w PHP";

echo "strlen(): " . strlen($tekst) . "<br>";                // długość tekstu
echo "strtolower(): " . strtolower($tekst) . "<br>";        // małe litery
echo "strtoupper(): " . strtoupper($tekst) . "<br>";        // wielkie litery
echo "substr(): " . substr($tekst, 0, 12) . "<br>";         // wycinek tekstu
echo "str_replace(): " . str_replace("PHP", "HTML", $tekst); // zamiana
echo "<br><br>";


/* ------------------------------------------------------------
   4. OPERACJE LOGICZNE I SPRAWDZAJĄCE
   ------------------------------------------------------------ */

$x = "123";
$y = "";

if (is_numeric($x)) {       // sprawdza czy zmienna jest liczbą
    echo "is_numeric(): To liczba!<br>";
}

if (empty($y)) {            // sprawdza czy zmienna jest pusta
    echo "empty(): Zmienna jest pusta!<br>";
}

if (isset($x)) {            // sprawdza czy zmienna istnieje
    echo "isset(): Zmienna x istnieje!<br><br>";
}


/* ------------------------------------------------------------
   5. KONWERSJA / RZUTOWANIE TYPÓW
   ------------------------------------------------------------ */

$zm = "42.5";

echo "intval(): " . intval($zm) . "<br>";     // zamiana na liczbę całkowitą
echo "floatval(): " . floatval($zm) . "<br>"; // zamiana na liczbę zmiennoprzecinkową
echo "strval(): " . strval(123) . "<br><br>"; // zamiana na string


/* ------------------------------------------------------------
   6. PRZYDATNE FUNKCJE DODATKOWE
   ------------------------------------------------------------ */

// uniqid() – unikalny ID
echo "uniqid(): " . uniqid() . "<br>";

// var_dump() – pokazuje typ i wartość
echo "var_dump(): ";
var_dump("PHP");
echo "<br>";

$lista = "PHP,HTML,CSS";
$tab = explode(",", $lista); // zamiana tekstu na tablicę
echo "explode(): ";
print_r($tab);
echo "<br>";

$polaczone = implode(" - ", $tab); // łączenie tablicy w tekst
echo "implode(): $polaczone<br>";

$txt = "   Witaj świecie!   ";
echo "trim(): [" . trim($txt) . "]<br>"; // usuwa spacje

echo "ucfirst(): " . ucfirst("php jest super") . "<br>";
echo "number_format(): " . number_format(1234567.891, 2, ",", " ") . "<br>";

$zdanie = "Linia 1\nLinia 2";
echo "nl2br():<br>" . nl2br($zdanie) . "<br>";

echo "str_repeat(): " . str_repeat("*", 10) . "<br>";

echo "min(): " . min(5, 2, 9) . "<br>";
echo "max(): " . max(5, 2, 9) . "<br>";
echo "strrev(): " . strrev("PHP jest fajny") . "<br><br>";


/* ------------------------------------------------------------
   7. ZAPIS DO PLIKÓW – fopen, fwrite, fclose
   ------------------------------------------------------------ */

/*
    fopen("nazwa", "tryb") – otwiera lub tworzy plik
       tryb "w" – zapis (nadpisuje cały plik)
       tryb "a" – dopisywanie na końcu
    fwrite() – zapis tekstu do pliku
    fclose() – zamyka plik
*/

$plik = fopen("dane.txt", "w");      // otwarcie pliku w trybie ZAPIS (czyści plik)
fwrite($plik, "Pierwsza linia pliku.\n");  // zapis 1
fwrite($plik, "Druga linia pliku.\n");     // zapis 2
fclose($plik);                       // zamknięcie pliku
echo "Zapisano plik dane.txt (fopen + fwrite)<br><br>";


/* ------------------------------------------------------------
   8. file_put_contents() – szybki zapis do pliku
   ------------------------------------------------------------ */

// Zapis jedną komendą (nadpisuje plik)
file_put_contents("log.txt", "Pierwszy wpis logu.\n");

// Dopisywanie do pliku
file_put_contents("log.txt", "Kolejny wpis.\n", FILE_APPEND);

echo "Zapisano plik log.txt (file_put_contents)<br><br>";


/* ------------------------------------------------------------
   9. Sprawdzenie czy zapis się udał
   ------------------------------------------------------------ */

$wynik = file_put_contents("test.txt", "Test zapisu.");

if ($wynik !== false) {   // jeśli zwrócono ilość bajtów, zapis OK
    echo "Zapisano $wynik bajtów do test.txt<br>";
} else {
    echo "Błąd zapisu!<br>";
}

?>
