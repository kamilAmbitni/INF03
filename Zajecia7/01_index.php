<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <title>Lekcja 7 - Podstawowy skrypt PHP</title>
</head>
<body>

<h1>Podstawy PHP - zmienne, echo, operatory</h1>

<p>
<?php
    // --- ZMIENNE W PHP ---

    $imie = "Rasmus";         // Tworzymy zmienną przechowującą imię
    $nazwisko = "Lerdorf";    // Tworzymy zmienną przechowującą nazwisko
    $rok_urodzenia = 1965;    // Tworzymy zmienną przechowującą rok urodzenia

    echo "Imię: " . $imie . "<br>";               
    // echo wypisuje tekst, kropka łączy tekst z wartością zmiennej

    echo "Nazwisko: " . $nazwisko . "<br>";       
    // ponownie używamy echo i konkatenacji

    echo "Rok urodzenia: " . $rok_urodzenia . "<br><br>";
    // wypisanie liczby również działa bez problemu


    // --- ECHO vs PRINT ---

    echo "Przykład wypisywania za pomocą echo<br>";
    // echo – najczęściej używane polecenie

    print "Przykład wypisywania za pomocą print<br><br>";
    // print również wypisuje tekst, ale dodatkowo zwraca wartość 1


    // --- PRZYKŁADOWE UŻYCIE PRINT W WARUNKU ---

    $czyWyswietlic = true;        // ustawiamy zmienną logiczną

    if ($czyWyswietlic && print("Witaj $imie")) {  // print zwraca 1 → czyli true
        echo " - Udało się poprawnie wypisać dane<br><br>";
    }


    // --- WIELOLINIOWE ECHO (HEREDOC) ---

    $tech1 = "HTML";
    $tech2 = "CSS";
    $tech3 = "JavaScript";

    echo <<<LISTA
    <h3>Przykład wypisywania HTML z użyciem HEREDOC:</h3>
    <ul>
        <li>$tech1</li>
        <li>$tech2</li>
        <li>$tech3</li>
    </ul>
LISTA;
    // Ten zapis pozwala wypisywać wiele linii kodu HTML w czytelny sposób


    // --- PRINT_R DO PODGLĄDU TABLICY ---

    $owoce = ["jabłko", "banan", "gruszka"];    // tworzymy tablicę

    echo "<h3>Podgląd tablicy za pomocą print_r:</h3>";
    print_r($owoce);                            // funkcja wypisuje strukturę tablicy
    echo "<br><br>";                            // dodajemy odstęp w HTML


    // --- OPERATORY MATEMATYCZNE ---

    $a = 10;          // pierwsza liczba
    $b = 5;           // druga liczba

    echo "Dodawanie: " . ($a + $b) . "<br>";        // dodawanie
    echo "Odejmowanie: " . ($a - $b) . "<br>";      // odejmowanie
    echo "Mnożenie: " . ($a * $b) . "<br>";         // mnożenie
    echo "Dzielenie: " . ($a / $b) . "<br>";        // dzielenie
    echo "Reszta z dzielenia: " . ($a % $b) . "<br>"; // modulo
    echo "Potęgowanie: " . ($a ** $b) . "<br>";     // potęgowanie
    echo "Pierwiastek kwadratowy z a: " . sqrt($a) . "<br><br>";  // pierwiastek


    // --- KONKATENACJA TEKSTU ---

    echo "Pełne imię i nazwisko: " . $imie . " " . $nazwisko . "<br><br>";
    // łączenie tekstu za pomocą operatora .


    // --- ŚREDNIKI W PHP ---

    echo "Pamiętaj — każda instrukcja w PHP musi kończyć się średnikiem!<br>";
    // Jeśli zabraknie średnika, interpreter wyświetli błąd składni.
?>
</p>

</body>
</html>
