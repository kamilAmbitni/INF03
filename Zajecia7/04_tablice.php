<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <title>Lekcja 04 - Tablice w PHP</title>
</head>
<body>

<h1>Tablice w PHP - przykłady i omówienie</h1>

<?php
// ---------------------------------------------------------------
// 1. TABLICA INDEKSOWANA (NUMERYCZNA)
// ---------------------------------------------------------------

echo "<h2>Tablica indeksowana (numeryczna)</h2>";

// Tworzymy tablicę za pomocą array() - każda wartość trafia do osobnej „szufladki”
$owoce = array("jabłko", "banan", "gruszka");  
// Indeksy (szuflady) liczone są od 0:
// [0] => jabłko
// [1] => banan
// [2] => gruszka

echo $owoce[0] . "<br>"; // Odczytujemy wartość z szufladki numer 0 → jabłko
echo $owoce[1] . "<br>"; // Odczytujemy wartość z szufladki numer 1 → banan

// Podmiana wartości w konkretnej szufladce
$owoce[1] = "kiwi"; // Zmieniamy wartość w szufladce [1] z banana na kiwi

// Dodawanie nowego elementu na koniec tablicy
$owoce[] = "truskawka"; // PHP tworzy nową szufladkę z kolejnym numerem indeksu

echo "<pre>";
print_r($owoce); // Pokazujemy strukturę całej tablicy
echo "</pre><br>";



// ---------------------------------------------------------------
// 2. TABLICA ASOCJACYJNA (KLUCZE TEKSTOWE)
// ---------------------------------------------------------------

echo "<h2>Tablica asocjacyjna</h2>";

// Tworzymy tablicę gdzie klucze (szufladki) mają nazwy tekstowe
$osoba = array(
    "imie" => "Jan",       // szufladka 'imie'
    "nazwisko" => "Kowalski", // szufladka 'nazwisko'
    "wiek" => 30           // szufladka 'wiek'
);

// Odczyt danych po nazwie klucza
echo $osoba["imie"] . "<br>";     // Jan
echo $osoba["nazwisko"] . "<br>"; // Kowalski

// Podmiana danych
$osoba["wiek"] = 31; // Aktualizacja wartości w szufladce 'wiek'

// Dodanie nowej pary klucz → wartość
$osoba["miasto"] = "Warszawa";

echo "<pre>";
print_r($osoba);
echo "</pre><br>";



// ---------------------------------------------------------------
// 3. TABLICA WIELOWYMIAROWA (TABLICE W TABLICACH)
// ---------------------------------------------------------------

echo "<h2>Tablica wielowymiarowa</h2>";

// Tablica zawiera inne tablice - jak tabela z wierszami
$uczniowie = array(
    array("imie" => "Anna", "nazwisko" => "Nowak", "wiek" => 17),
    array("imie" => "Tomasz", "nazwisko" => "Lis", "wiek" => 18)
);

// Odczyt konkretnej wartości:
// najpierw wybieramy „wiersz”, potem szufladkę w środku
echo $uczniowie[1]["nazwisko"] . "<br>"; // Lis

// Podmiana wartości w tablicy zagnieżdżonej
$uczniowie[0]["wiek"] = 18; // Zmieniamy wiek pierwszego ucznia

echo "<pre>";
print_r($uczniowie);
echo "</pre><br>";



// ---------------------------------------------------------------
// 4. PĘTLE DO PRACY Z TABLICAMI
// ---------------------------------------------------------------

echo "<h2>Pętle i tablice</h2>";

echo "<h3>Pętla foreach - tylko wartości</h3>";

$owoce = array("jabłko", "banan", "gruszka");

// foreach pobiera kolejne wartości niezależnie od indeksów
foreach ($owoce as $owoc) {
    echo "Owoc: $owoc<br>"; // wypisze 3 linie
}

echo "<h3>Pętla foreach - klucz i wartość</h3>";

$osoba = array("imie" => "Anna", "wiek" => 25);

// foreach może także podawać klucze (nazwy szufladek)
foreach ($osoba as $klucz => $wartosc) {
    echo "$klucz: $wartosc<br>";
}

echo "<h3>Pętla for - najlepsza do tablic numerowanych</h3>";

$liczby = array(10, 20, 30, 40);

// count() zwraca liczbę elementów, dzięki czemu wiemy, ile jest szufladek
for ($i = 0; $i < count($liczby); $i++) {

    // $i to numer szufladki
    echo "Indeks $i → wartość: " . $liczby[$i] . "<br>";
}

echo "<h3>Pętla while - alternatywa</h3>";

$kolory = array("czerwony", "zielony", "niebieski");
$i = 0; // zaczynamy od szufladki numer 0

while ($i < count($kolory)) {
    echo $kolory[$i] . "<br>";
    $i++; // przejście do kolejnej szufladki
}

echo "<br>";



// ---------------------------------------------------------------
// 5. WYBRANE FUNKCJE DO TABLIC
// ---------------------------------------------------------------

echo "<h2>Wybrane funkcje tablicowe</h2>";

echo "<h3>count()</h3>";
$owoce = ["jabłko", "banan", "gruszka"];
echo "Liczba elementów: " . count($owoce) . "<br><br>";

echo "<h3>array_push()</h3>";
$liczby = [1, 2, 3];
array_push($liczby, 4, 5); // dodaje 4 i 5 na koniec
print_r($liczby);
echo "<br><br>";

echo "<h3>array_pop()</h3>";
$kolory = ["czerwony", "zielony", "niebieski"];
$usuniety = array_pop($kolory); // usuwa ostatnią szufladkę
echo "Usunięto: $usuniety<br>";
print_r($kolory);
echo "<br><br>";

echo "<h3>array_shift()</h3>";
$kolejka = ["Anna", "Tomek", "Ola"];
$pierwszy = array_shift($kolejka); // usuwa szufladkę [0]
echo "Usunięto: $pierwszy<br>";
print_r($kolejka);
echo "<br><br>";

echo "<h3>in_array()</h3>";
$wartosci = ["a", "b", "c"];
if (in_array("b", $wartosci)) {
    echo "Znaleziono element 'b'<br><br>";
}

echo "<h3>array_key_exists()</h3>";
$osoba = ["imie" => "Jan", "wiek" => 30];
if (array_key_exists("wiek", $osoba)) {
    echo "Klucz 'wiek' istnieje<br><br>";
}

echo "<h3>array_merge()</h3>";
$a = ["a", "b"];
$b = ["c", "d"];
$polaczona = array_merge($a, $b);
print_r($polaczona);
echo "<br><br>";

echo "<h3>sort()</h3>";
$liczby = [3, 1, 4];
sort($liczby);
print_r($liczby);
echo "<br><br>";

echo "<h3>array_reverse()</h3>";
$odwrocona = array_reverse($liczby);
print_r($odwrocona);
echo "<br><br>";

echo "<h3>array_slice()</h3>";
$owoce = ["jabłko", "banan", "gruszka", "śliwka"];
$kawalek = array_slice($owoce, 1, 2);
print_r($kawalek);
echo "<br><br>";

echo "<h3>array_unique()</h3>";
$liczby = [1, 2, 2, 3, 3];
$unikalne = array_unique($liczby);
print_r($unikalne);
echo "<br><br>";

echo "<h3>array_keys()</h3>";
$klucze = array_keys($osoba);
print_r($klucze);
echo "<br><br>";

echo "<h3>array_values()</h3>";
$wartosci = array_values($osoba);
print_r($wartosci);
echo "<br><br>";

echo "<h3>implode()</h3>";
$slowa = ["PHP", "jest", "super"];
echo implode(" ", $slowa) . "<br><br>";

echo "<h3>explode()</h3>";
$tekst = "jabłko,banan,gruszka";
$tab = explode(",", $tekst);
print_r($tab);
echo "<br><br>";

?>

</body>
</html>
