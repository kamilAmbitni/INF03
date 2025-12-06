<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <title>Lekcja 03 - Pętle w PHP</title>
</head>
<body>

<h1>Pętle w PHP - przykłady i omówienie</h1>

<?php
// -------------------------------------------------------
// PĘTLA FOR
// -------------------------------------------------------

echo "<h2>Pętla for</h2>";

$suma = 0; // Zmienna do przechowywania sumy

// Pętla wykona się od i = 1 do i = 100
for ($i = 1; $i <= 100; $i++) {

    $suma += $i; // Dodajemy każdą kolejną liczbę do sumy
}

echo "Suma liczb od 1 do 100 wynosi: $suma<br><br>";



// -------------------------------------------------------
// PĘTLA WHILE
// -------------------------------------------------------

echo "<h2>Pętla while</h2>";

$licznik = 1;  // Pierwsza liczba, którą dodajemy
$suma = 0;     // Początkowa suma
$limit = 1000; // Ustalony limit sumy

// Pętla wykonuje się tak długo, jak długo suma + licznik <= limit
while ($suma + $licznik <= $limit) {

    $suma += $licznik; // Dodajemy liczbę do sumy
    $licznik++;        // Zwiększamy licznik
}

echo "Suma najbliższa limitowi wynosi: $suma<br>";
echo "Ostatnia dodana liczba to: " . ($licznik - 1) . "<br><br>";



// -------------------------------------------------------
// PĘTLA do..while
// -------------------------------------------------------

echo "<h2>Pętla do..while</h2>";

$szczesliwa = 7;   // Nasza "wygrywająca" liczba
$licznikProb = 0;  // Licznik prób
$wylosowana = 0;   // Zmienna na wylosowaną liczbę

// Pętla wykona się ZAWSZE przynajmniej raz
do {
    $wylosowana = rand(1, 49); // Losujemy liczbę
    $licznikProb++;            // Liczymy próbę
    echo "Próba $licznikProb: Wylosowano $wylosowana<br>";

} while ($wylosowana != $szczesliwa); // Powtarzamy, dopóki nie trafimy 7

echo "<strong>Udało się! Trafiliśmy liczbę $szczesliwa po $licznikProb próbach.</strong><br><br>";



// -------------------------------------------------------
// PĘTLA FOREACH - iteracja po tablicy
// -------------------------------------------------------

echo "<h2>Pętla foreach</h2>";

$owoce = ["jabłko", "banan", "gruszka"]; // Tablica owoców

// Przechodzimy przez każdy element tablicy
foreach ($owoce as $owoc) {

    echo "Owoc z tablicy: $owoc <br>"; // Wypisujemy pojedynczy owoc
}

echo "<br>";

// Iteracja wraz z dodatkowymi informacjami - indeks + wartość
foreach ($owoce as $indeks => $owoc) {

    echo "Element numer $indeks: $owoc <br>"; // Wypisujemy indeks i wartość
}

echo "<br><br>";



// -------------------------------------------------------
// INSTRUKCJA break - przerwanie działania pętli
// -------------------------------------------------------

echo "<h2>Instrukcja break</h2>";

$uczestnicy = ["Kamil", "Anna", "Tomek", "Zofia", "Natalia", "Marek"]; // Tablica uczestników
$szukanyUczen = "Zofia"; // Kogo szukamy
$znaleziono = false; // Flaga informująca czy znaleziono

foreach ($uczestnicy as $uczen) {

    echo "Sprawdzam: $uczen<br>"; // Informacja diagnostyczna

    if ($uczen == $szukanyUczen) { // Jeśli znaleziono

        echo "<strong>$uczen jest zapisany na egzamin!</strong><br>";
        $znaleziono = true;
        break; // Przerywamy dalsze przeszukiwanie tablicy
    }
}

if (!$znaleziono) { 
    echo "<strong>$szukanyUczen nie znajduje się na liście uczestników.</strong>";
}

echo "<br><br>";



// -------------------------------------------------------
// INSTRUKCJA continue - pominięcie iteracji
// -------------------------------------------------------

echo "<h2>Instrukcja continue</h2>";

$dane_uzytkownika = [
    "imie" => "Kamil",
    "nazwisko" => "",
    "email" => "kamil@example.com",
    "telefon" => "",
    "adres" => "ul. Kwiatowa 12"
];

// Przeglądamy pola formularza
foreach ($dane_uzytkownika as $pole) {

    if (empty($pole)) { 
        continue; // Jeśli puste → pomiń tę iterację
    }

    echo $pole . "<br>"; // Wypisz tylko niepuste pola
}

?>

</body>
</html>
