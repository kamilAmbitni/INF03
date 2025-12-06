<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <title>Lekcja 02 - Instrukcje warunkowe</title>
</head>
<body>

<h1>Instrukcje warunkowe w PHP</h1>

<?php
    // ---------------------------
    // Prosty przykład instrukcji if
    // ---------------------------

    $wiek = 17; // Zmienna z wiekiem użytkownika

    // Sprawdzamy, czy użytkownik ma co najmniej 18 lat
    if ($wiek >= 18) { 
        echo "Witaj w systemie dla osób pełnoletnich.<br>";
    } else { 
        // W przeciwnym przypadku użytkownik dostaje odmowę
        echo "Dostęp zabroniony. Musisz mieć co najmniej 18 lat.<br><br>";
    }


    // ---------------------------
    // Instrukcja if z wieloma warunkami (elseif)
    // ---------------------------

    $ocena = 4; // Przykładowa ocena

    if ($ocena == 6) {
        echo "Celujący - gratulacje!<br>";
    } elseif ($ocena == 5) {
        echo "Bardzo dobry - świetny wynik!<br>";
    } elseif ($ocena == 4) {
        echo "Dobry - całkiem nieźle.<br>";
    } elseif ($ocena == 3) {
        echo "Dostateczny - zaliczone, ale mogło być lepiej.<br>";
    } else {
        echo "Konieczna poprawa!<br><br>";
    }


    // ---------------------------
    // Alternatywna składnia if z użyciem endif
    // ---------------------------

    $liczba = 10; // Liczba, którą analizujemy

    if ($liczba > 0):          // Jeśli liczba jest większa od zera
        echo "Liczba jest dodatnia<br>";
    elseif ($liczba < 0):     // Jeśli liczba jest mniejsza od zera
        echo "Liczba jest ujemna<br>";
    else:                     // W każdym innym przypadku (czyli 0)
        echo "Liczba jest równa zero<br><br>";
    endif; // Koniec alternatywnej składni


    // ---------------------------
    // Częsty błąd - = zamiast ==
    // ---------------------------

    echo "<b>Przykład błędnego zapisu loginu:</b><br>";

    $login = "admin123"; // Przykładowy login
    $haslo = "tajne";    // Przykładowe hasło

    // Uwaga: to jest błędny warunek! = oznacza przypisanie, a nie porównanie.
    if ($login = "admin") { 
        echo "Warunek nie działa poprawnie, ponieważ wykonano przypisanie!<br><br>";
    }


    // ---------------------------
    // Operatory logiczne: ||, &&, !
    // ---------------------------

    $wiek = 20;
    $czyMaDowod = true;

    // Sprawdzamy dwa warunki naraz - oba muszą być prawdziwe
    if ($wiek >= 18 && $czyMaDowod == true) {
        echo "Użytkownik może wejść - pełnoletni i posiada dokument.<br>";
    }

    // Sprawdzamy czy użytkownik jest NIEpełnoletni - użycie negacji
    if (!($wiek >= 18)) {
        echo "Użytkownik NIE jest pełnoletni.<br>";
    }

    echo "<br>";


    // ---------------------------
    // Różnica między AND a &&
    // ---------------------------

    echo "<b>Różnica priorytetu operatorów:</b><br>";

    $wynik1 = true && false;  // && ma wyższy priorytet → wynik false
    $wynik2 = true and false; // 'and' ma niższy priorytet → najpierw przypisze true

    echo "Wynik dla 'true && false': ";
    var_export($wynik1); // wypisze false
    echo "<br>";

    echo "Wynik dla 'true and false': ";
    var_export($wynik2); // wypisze true!
    echo "<br><br>";


    // ---------------------------
    // Operator trójargumentowy (skrócony if)
    // ---------------------------

    $wiek = 20; // Przykład wieku

    // Jeśli wiek >= 18 → przypisz "Pełnoletni", w innym wypadku "Niepełnoletni"
    $komunikat = ($wiek >= 18) ? "Pełnoletni" : "Niepełnoletni";

    echo "Skrócony zapis if: $komunikat<br><br>";


    // ---------------------------
    // Przykład praktyczny - kalkulator rabatu
    // ---------------------------

    echo "<h3>Kalkulator rabatu</h3>";

    $kwota = 300; // Kwota zamówienia

    if ($kwota >= 500) {
        $rabat = 0.2; // 20% zniżki
    } elseif ($kwota >= 200 && $kwota < 500) {
        $rabat = 0.1; // 10% zniżki
    } else {
        $rabat = 0; // Brak zniżki
    }

    // Obliczamy cenę po rabacie
    $cenaPoRabacie = $kwota - ($kwota * $rabat);

    echo "Kwota zamówienia: $kwota zł<br>";
    echo "Rabat: " . ($rabat * 100) . "%<br>";
    echo "Cena po rabacie: $cenaPoRabacie zł<br>";
?>

</body>
</html>
