<?php
// Sprawdzamy, czy formularz został wysłany.
// Używamy isset(), ponieważ pola mogą nie istnieć,
// dopóki użytkownik niczego nie wyśle.
$formularz_wyslany = ($_SERVER["REQUEST_METHOD"] === "POST");
?>

<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <title>Odczytywanie kontrolek - PHP</title>
</head>
<body>

<h1>Odczytywanie danych z kontrolek formularza</h1>

<form method="post">

    <h2>1. Pole typu RADIO (jedna wartość)</h2>
    <p>Wybierz język programowania:</p>

    <!-- RADIO - wszystkie pola muszą mieć to samo name -->
    <label><input type="radio" name="jezyk" value="PHP"> PHP</label><br>
    <label><input type="radio" name="jezyk" value="Python"> Python</label><br>
    <label><input type="radio" name="jezyk" value="JavaScript"> JavaScript</label><br>


    <h2>2. Pojedynczy SELECT (jedna wartość)</h2>
    <label>Wybierz miasto:</label><br>
    <select name="miasto">
        <option value="Warszawa">Warszawa</option>
        <option value="Kraków">Kraków</option>
        <option value="Gdańsk">Gdańsk</option>
    </select>


    <h2>3. CHECKBOXY (wiele wartości → tablica)</h2>
    <p>Wybierz swoje zainteresowania:</p>

    <!-- [] w name oznacza: do PHP trafi TABLICA wartości -->
    <label><input type="checkbox" name="zainteresowania[]" value="Muzyka"> Muzyka</label><br>
    <label><input type="checkbox" name="zainteresowania[]" value="Sport"> Sport</label><br>
    <label><input type="checkbox" name="zainteresowania[]" value="Programowanie"> Programowanie</label><br>


    <h2>4. SELECT MULTIPLE (wiele wartości → tablica)</h2>
    <label>Wybierz ulubione kolory (Ctrl + klik):</label><br>

    <!-- multiple → wybór wielu opcji; [] → wysyłanie tablicy -->
    <select name="kolory[]" multiple size="3">
        <option value="Czerwony">Czerwony</option>
        <option value="Zielony">Zielony</option>
        <option value="Niebieski">Niebieski</option>
    </select>

    <br><br>
    <input type="submit" value="Wyślij">

</form>

<hr>

<h2>Wyniki przesłanego formularza:</h2>

<?php
// Jeśli formularz został wysłany - wypisujemy wyniki
if ($formularz_wyslany) {

    // ---- RADIO ----
    echo "<h3>Wybrany język:</h3>";
    if (isset($_POST["jezyk"])) {
        // $_POST["jezyk"] = jedna wartość z pola radio
        echo $_POST["jezyk"];
    } else {
        echo "Nie wybrano żadnego języka.";
    }


    // ---- SELECT (pojedynczy wybór) ----
    echo "<h3>Wybrane miasto:</h3>";
    if (isset($_POST["miasto"])) {
        echo $_POST["miasto"];
    } else {
        echo "Nie wybrano miasta.";
    }


    // ---- CHECKBOXY → TABLICA ----
    echo "<h3>Zainteresowania (checkbox):</h3>";
    if (isset($_POST["zainteresowania"])) {

        // $_POST["zainteresowania"] jest TABLICĄ
        $lista = $_POST["zainteresowania"];

        foreach ($lista as $z) {
            // htmlspecialchars() → zabezpieczenie przed HTML-em
            echo "- " . htmlspecialchars($z) . "<br>";
        }
    } else {
        echo "Nie wybrano żadnych zainteresowań.";
    }


    // ---- SELECT MULTIPLE → TABLICA ----
    echo "<h3>Wybrane kolory:</h3>";
    if (isset($_POST["kolory"])) {

        $kolory = $_POST["kolory"];

        foreach ($kolory as $k) {
            echo "- " . htmlspecialchars($k) . "<br>";
        }

    } else {
        echo "Nie wybrano kolorów.";
    }
} else {
    echo "<p>Wypełnij formularz powyżej.</p>";
}

// Pętla foreach przechodzi po wszystkich elementach tablicy $kolory.
// Tablica $kolory powstała z przesłanych danych formularza
// (select multiple lub checkboxy), więc zawiera kilka wybranych kolorów.
//
// W każdej iteracji zmienna $k zawiera JEDEN wybrany kolor.
// Przykład: jeśli użytkownik wybrał ["Czerwony", "Zielony"],
// to pętla wykona się 2 razy:
// 1. $k = "Czerwony"
// 2. $k = "Zielony"
//
// htmlspecialchars($k) – funkcja zabezpiecza tekst przed wstrzyknięciem HTML,
// aby użytkownik nie mógł np. wpisać tagu <script>. Zamienia znaki specjalne
// na bezpieczne encje HTML.
//
// echo "- " . htmlspecialchars($k) . "<br>";
// wypisuje każdy wybrany kolor w osobnej linii, np.:
// - Czerwony<br>
// - Zielony<br>

?>

</body>
</html>
