<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <title>Formatowanie HTML w PHP</title>
</head>
<body>

<h1>Formatowanie HTML wypisywanego przez PHP</h1>

<?php
// =========================================================
// 1) PROBLEM — echo bez formatowania generuje jedną linię
// =========================================================
echo "<h2>1) Kod HTML bez formatowania</h2>";

echo "<pre>"; // używamy <pre>, aby widzieć to w formie surowej
echo "<html><head><title>Test</title></head><body><h1>Witaj!</h1><p>To jest paragraf.</p></body></html>";
echo "</pre>";



// =========================================================
// 2) Formatowanie HTML za pomocą znaku nowej linii \n
// =========================================================
echo "<h2>2) Formatowanie za pomocą \\n (nowa linia)</h2>";

echo "<pre>";   // pokaże w przeglądarce nowe linie
echo "<html>\n";
echo "<head>\n";
echo "<title>Test</title>\n";
echo "</head>\n";
echo "<body>\n";
echo "<h1>Witaj!</h1>\n";
echo "<p>To jest paragraf.</p>\n";
echo "</body>\n";
echo "</html>\n";
echo "</pre>";



// =========================================================
// 3) Dodatkowe znaki formatowania: \t (tabulator) i \r
// =========================================================
echo "<h2>3) Dodatkowe znaki: \\t (tabulator), \\r (powrót karetki)</h2>";

// \r – tzw. carriage return (powrót karetki)
// Przesuwa kursor na POCZĄTEK tej samej linii, bez przechodzenia do nowej.
// W Windows standard końca linii to \r\n (powrót + nowa linia).
echo "ABC\r123";
// Wynik: 123 (kursor wrócił na początek i nadpisał ABC)
echo "<pre>";
echo "<html>\n";
echo "<body>\n";
echo "\t<h1>Nagłówek z tabulatorem</h1>\n";  // \t doda wcięcie
echo "\\t<p>Wcięty paragraf</p>\n";
echo "</body>\n</html>";
echo "</pre>";



// =========================================================
// 4) HEREDOC - wieloliniowy tekst z interpretacją zmiennych
// =========================================================
echo "<h2>4) HEREDOC - wygodne wstawianie HTML</h2>";

$imie = "Kasia"; // zmienna pojawi się wewnątrz heredoc

echo "<pre>"; // tylko po to, żeby było widać formatowanie

echo <<<HTML
<html>
    <body>
        <h1>Witaj $imie!</h1>
        <p>To jest wypisane za pomocą HEREDOC.</p>
    </body>
</html>
HTML;

echo "</pre>";



// =========================================================
// 5) NOWDOC - wieloliniowy tekst BEZ interpretacji zmiennych
// =========================================================
echo "<h2>5) NOWDOC - tekst nie interpretuje zmiennych</h2>";

echo "<pre>";

echo <<<'HTML'
<html>
    <body>
        <h1>Witaj $imie!</h1>
        <p>To jest tekst wypisany przy użyciu NOWDOC.</p>
        <p>UWAGA: $imie NIE zostanie podmieniona.</p>
    </body>
</html>
HTML;

echo "</pre>";

?>

</body>
</html>
