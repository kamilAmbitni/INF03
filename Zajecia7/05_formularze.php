<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <title>Lekcja 05 - Obsługa formularzy</title>
</head>
<body>

<h1>Obsługa formularzy - metody POST i GET</h1>

<?php


// $_SERVER["REQUEST_METHOD"] sprawdza, JAK użytkownik wysłał żądanie do strony.
// Jeśli wartość to "POST", oznacza to że formularz został faktycznie wysłany
// przyciskiem "Wyślij" i możemy bezpiecznie odczytywać dane z tablicy $_POST.
// Dzięki temu unikamy błędów typu "Undefined index", które pojawiają się
// przy pierwszym wejściu na stronę (bo wtedy nic nie zostało jeszcze wysłane).

// isset($_POST["imie"]) sprawdza, czy SZUFLADKA o nazwie "imie" istnieje
// w tablicy $_POST. Jeśli nie istnieje, oznacza to że pole nie zostało
// przesłane. Natomiast !empty($_POST["imie"]) sprawdza czy ta wartość
// nie jest pusta (czy użytkownik faktycznie coś wpisał).
// Używamy obu warunków razem, aby upewnić się że:
// 1) pole przyszło z formularza,
// 2) użytkownik coś do niego wpisał.

// ====================================================================
// 1. OBSŁUGA FORMULARZA METODĄ POST (pole: imię)
// ====================================================================

// Sprawdzamy, czy formularz został WYSŁANY metodą POST
if ($_SERVER["REQUEST_METHOD"] == "POST") {    
    // Tutaj wiemy, że coś zostało wysłane z formularza

    // Sprawdzamy czy pole "imie" zostało przesłane i NIE jest puste
    if (isset($_POST["imie"]) && !empty($_POST["imie"])) {

        // Odczytujemy imię z tablicy $_POST
        // htmlspecialchars() zamienia niebezpieczne znaki na encje HTML
        // → zabezpieczenie przed wstrzyknięciem HTML
        $imie = htmlspecialchars($_POST["imie"]);

        echo "<p>Witaj, <strong>$imie</strong>!</p>";
    } 
    else {
        // Pole istnieje, ale jest puste
        echo "<p>Nie podano imienia.</p>";
    }
}
?>

<!-- ============================================================= -->
<!-- FORMULARZ METODĄ POST                                         -->
<!-- ============================================================= -->

<h2>Formularz - metoda POST</h2>

<form method="post"> 
    <!-- method="post" → dane NIE pojawią się w adresie URL -->
    <!-- for łaczy się z id a name idzie do php -->
    <label for="imie">Podaj imię:</label> 
    <input type="text" name="imie" id="imie"> 
    <!-- name="imie" → klucz szufladki w tablicy $_POST -->

    <button type="submit">Wyślij</button>
</form>

<hr>

<?php
// ====================================================================
// 2. OBSŁUGA FORMULARZA METODĄ GET (pole: tytul)
// ====================================================================

// Sprawdzamy, czy przesłano dane metodą GET
// Używamy isset() aby upewnić się, że SZUFLADKA istnieje
if (isset($_GET["tytul"])) {

    // Odbieramy wartość pola "tytul"
    $tytul = htmlspecialchars($_GET["tytul"]);

    // Sprawdzamy, czy nie jest pusta
    if (!empty($tytul)) {
        echo "<p>Szukasz filmu: <strong>$tytul</strong></p>";
    } else {
        echo "<p>Nie podano tytułu filmu.</p>";
    }
}
?>

<!-- ============================================================= -->
<!-- FORMULARZ METODĄ GET                                          -->
<!-- ============================================================= -->

<h2>Formularz - metoda GET</h2>

<form method="get"> 
    <!-- method="get" → dane pojawią się w adresie przeglądarki -->

    <label for="tytul">Tytuł filmu:</label>
    <input type="text" name="tytul" id="tytul">
    <!-- Dane pojawią się w adresie jako: ?tytul=NazwaFilmu -->

    <button type="submit">Szukaj</button>
</form>

<hr>


<!-- ============================================================= -->
<!-- PODSUMOWANIE                                                   -->
<!-- ============================================================= -->

<h2>Różnica między GET a POST</h2>

<ul>
    <li><strong>GET</strong> - dane w adresie URL, dobre do wyszukiwania</li>
    <li><strong>POST</strong> - dane niewidoczne w URL, dobre do logowania</li>
    <li><strong>$_POST</strong> odbiera dane z metody POST</li>
    <li><strong>$_GET</strong> odbiera dane z metody GET</li>
    <li>Przed odczytem używamy <strong>isset()</strong> lub <strong>REQUEST_METHOD</strong></li>
    <li>Używamy <strong>htmlspecialchars()</strong>, żeby zabezpieczyć dane</li>
</ul>

</body>
</html>
