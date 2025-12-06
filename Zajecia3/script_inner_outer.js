"use strict";

/* ========================================
   1) innerText vs innerHTML — losowanie liczby
   ======================================== */

// Losuj liczbę 1..100 (pomocniczo)
function losuj() {
  // Math.random() -> losowa liczba zmiennoprzecinkowa z przedziału [0, 1)
  //                  (może być 0, nigdy 1)
  // Przykłady: 0.0, 0.173, 0.999..., ale nie 1.0

  // * 100  -> skalujemy zakres do [0, 100)
  // Math.floor(...)  -> ucinamy część ułamkową w dół
  //                    więc dostajemy całkowite 0..99
  // + 1    -> przesuwamy zakres o 1 w górę, czyli 1..100
  return Math.floor(Math.random() * 100) + 1;
}

// Wersja z innerText — znaczniki wyświetlą się jako ZWYKŁY TEKST
function losujLiczbeInnerText() {
  const naglowek = document.querySelector(".tytul"); // pierwszy element z klasą "tytul"
  if (!naglowek) return;
  const n = losuj();
  // Uwaga: <u> nie zadziała jako podkreślenie — to zwykłe znaki w tekście
  naglowek.innerText = "Twoja liczba to: <u>" + n + "</u>. Jeszcze raz?";
}

// Wersja z innerHTML — znaczniki zostaną zinterpretowane (tu: podkreślenie)
function losujLiczbeInnerHTML() {
  const naglowek = document.querySelector(".tytul");
  if (!naglowek) return;
  const n = losuj();
  // Teraz <u> zadziała, bo innerHTML pozwala na tagi HTML
  naglowek.innerHTML = "Twoja liczba to: <u>" + n + "</u>. Jeszcze raz?";
}

/* ========================================
   2) textContent vs innerText — odczyt z ukrytego elementu
   ======================================== */
function pokazZawartosc() {
  const akapit = document.querySelector(".napis"); // ukryty element (display:none)
  if (!akapit) return;

  // Oba alerty w nowoczesnych przeglądarkach pokażą tę samą treść:
  alert("textContent: " + akapit.textContent);
  alert("innerText: " + akapit.innerText);
}

/* ========================================
   3) outerHTML — podmiana CAŁEGO elementu (znacznik + zawartość)
   ======================================== */
function zmienOuterHTML() {
  const p = document.getElementById("tekst"); // <p id="tekst">To jest paragraf.</p>
  if (!p) {
    // Po pierwszym kliknięciu element zostanie podmieniony (ID zniknie) — ostrzeż przy kolejnych próbach
    alert(
      "Element został już podmieniony (brak #tekst). Odśwież stronę, aby zobaczyć ponownie pierwotny stan."
    );
    return;
  }

  // Podmień cały element <p> na nowy <h2> (zawartość + rodzaj znacznika)
  p.outerHTML = "<h2>Czary mary — teraz to nagłówek!</h2>";
}

/* ========================================
   4) Interpolacja (template strings) vs konkatenacja (+)
   ======================================== */
function pobierzDaneUzytkownika() {
  // Proste pobranie wartości inputów po ID
  // Jeśli element z id="imie" istnieje -> weź jego .value,
  // jeśli nie istnieje -> wynik z lewej to undefined,
  // a wtedy || '' zwróci pusty string (bezpieczna wartość domyślna).
  const imie = document.getElementById("imie")?.value || "";

  // Analogicznie dla nazwiska i wieku:
  const nazwisko = document.getElementById("nazwisko")?.value || "";
  const wiek = document.getElementById("wiek")?.value || "";

  return { imie, nazwisko, wiek };
}

// Wypisywanie nowocześnie: template strings (backticki ` ... ${zmienna} ... `)
function wypiszTemplate() {
  const out = document.getElementById("wynik-template");
  if (!out) return;

  const { imie, nazwisko, wiek } = pobierzDaneUzytkownika();

  // Czytelnie łączymy tekst i wartości zmiennych
  out.textContent = `Użytkownik: ${imie} ${nazwisko}, wiek: ${wiek} lat`; //zwróć uwagę na "ciapki" w tym wypadku są to ` (znak pod esc na klawiaturze)
  console.log(`Template: Użytkownik: ${imie} ${nazwisko}, wiek: ${wiek} lat`);
}

// Wypisywanie klasycznie: konkatenacja łańcuchów operatorem +
function wypiszConcat() {
  const out = document.getElementById("wynik-template");
  if (!out) return;

  const { imie, nazwisko, wiek } = pobierzDaneUzytkownika();

  // Działa, ale bywa mniej czytelne przy wielu wstawkach
  out.textContent ="Użytkownik: " + imie + " " + nazwisko + ", wiek: " + wiek + " lat";
  console.log("Concat: Użytkownik: " + imie + " " + nazwisko + ", wiek: " + wiek + " lat");
}
