"use strict"; // Włącza „tryb ścisły” — pomaga łapać błędy (np. użycie niezadeklarowanej zmiennej).

/* =========================================
   1) Pętla for — znamy liczbę iteracji
   ========================================= */

// 1a) 1..10 rosnąco
(function setupForUp() {
  // IIFE: natychmiast wywołująca się funkcja, aby nie „zaśmiecać” globalnego zasięgu.
  const btn = document.getElementById("btn-for-1-10"); // Szukamy przycisku po ID — będziemy podpinać klik.
  const out = document.getElementById("out-for-up"); // Szukamy <pre>, do którego wypiszemy wynik.
  if (!btn || !out) return; // Jeśli któregoś elementu brak w HTML, kończymy cicho.

  btn.addEventListener("click", function () {
    // Nasłuchiwanie kliknięcia (po kliknięciu uruchom tę funkcję).
    let linie = []; // Pusta tablica — będziemy do niej dodawać kolejne wiersze tekstu.
    // for (start; warunek; krok) — klasyczna składnia pętli for
    for (let i = 1; i <= 30; i++) {
      // i=1 (start), dopóki i<=10 (warunek), po każdej iteracji i++ (krok +1)
      linie.push("To jest iteracja nr " + i); // .push() — dodaje element na KONIEC tablicy (tutaj nowy wiersz tekstu).
    }
    out.textContent = linie.join("\n"); // .join('\n') — łączy elementy tablicy w JEDEN łańcuch, rozdzielając \n (nowa linia).
    // .textContent — wpisuje tekst do <pre> (bez interpretacji HTML).
    console.log(out.textContent); // Wypisz ten sam tekst do konsoli (DevTools).
    alert("Wypisano 1..10 (zobacz też w <pre> i w konsoli)."); // Prosty komunikat — informacja dla użytkownika.
  });
})();

// 1b) 10..0 malejąco
(function setupForDown() {
  // Druga IIFE do drugiego przycisku.
  const btn = document.getElementById("btn-for-10-0"); // Przycisk „Odliczanie 10..0”.
  const out = document.getElementById("out-for-down"); // Pole wyjściowe <pre>.
  if (!btn || !out) return; // Ochrona gdyby brakowało w HTML.

  btn.addEventListener("click", function () {
    // Reakcja na klik.
    let linie = []; // Będziemy kolekcjonować linie tekstu.
    for (let i = 10; i >= 0; i--) {
      // Start 10, dopóki i>=0, po każdej iteracji i-- (krok -1).
      linie.push("Odliczanie: " + i); // .push — dopisz tekst „Odliczanie: X”.
    }
    out.textContent = linie.join("\n"); // .join — połącz tablicę w tekst z nowymi liniami.
    console.log(out.textContent); // Debug do konsoli.
    alert("Odliczono 10..0."); // Komunikat.
  });
})();

// 1c) Krok = 2 (parzyste 2..10)
(function setupForStep() {
  // Kolejna IIFE.
  const btn = document.getElementById("btn-for-step2"); // Przycisk „Parzyste 2..10”.
  const out = document.getElementById("out-for-step"); // <pre> na wynik.
  if (!btn || !out) return; // Ochrona.

  btn.addEventListener("click", function () {
    // Po kliknięciu:
    let liczby = []; // Tablica na liczby parzyste.
    for (let i = 2; i <= 10; i += 2) {
      // i+=2 — zwiększamy w kroku 2 (2,4,6,8,10).
      liczby.push(i); // Dopisujemy aktualne i do tablicy.
    }
    out.textContent = "Parzyste: " + liczby.join(", "); // .join(', ') — połącz liczby przecinkami i spacją.
    console.log(out.textContent); // Debug.
    alert("Wypisano liczby parzyste 2..10."); // Komunikat.
  });
})();

/* =========================================
   2) while — dopóki warunek jest spełniony
   ========================================= */

(function setupWhileGuess() {
  // IIFE od gry w zgadywanie.
  const btn = document.getElementById("btn-while-guess"); // Przycisk start gry.
  const out = document.getElementById("out-while"); // Pole wynikowe <pre>.
  if (!btn || !out) return; // Ochrona.

  btn.addEventListener("click", function () {
    // Start gry po kliknięciu.
    const tajemnica = Math.floor(Math.random() * 100) + 1; // Los 1..100: Math.random() => [0,1), *100 => [0,100), floor => 0..99, +1 => 1..100
    let proba = 0; // Licznik prób.
    let liczba = NaN; // Bieżąca zgadywana liczba (NaN = Not-a-Number).

    // Pętla while — wykona się dopóki liczba !== tajemnica
    while (liczba !== tajemnica) {
      // Warunek pętli — dopóki nie trafimy.
      const txt = prompt("Zgadnij liczbę 1..100 (Anuluj aby przerwać)"); // Pobierz tekst z okna prompt.
      if (txt === null) {
        // Jeśli kliknięto „Anuluj” — prompt zwraca null.
        out.textContent = "Przerwano grę."; // Pokaż komunikat w <pre>.
        return; // Wyjście z funkcji — kończymy.
      }
      liczba = Number(txt); // Konwersja tekstu na liczbę.
      if (Number.isNaN(liczba)) {
        // Sprawdź, czy to na pewno liczba (NaN = nie liczba).
        alert("To nie jest liczba. Spróbuj jeszcze raz."); // Informacja o błędzie.
        continue; // continue — pomiń resztę tej iteracji i przejdź do następnej próby.
      }

      proba++; // Zwiększ licznik prób (inkrementacja).
      if (liczba < tajemnica) alert("Za mało!"); // Wskazówka: za mało…
      else if (liczba > tajemnica) alert("Za dużo!"); // …albo za dużo.
      // Gdy równa — warunek pętli stanie się fałszywy (liczba !== tajemnica => false) i wyjdziemy z while.
    }

    out.textContent = `Brawo! Trafiłeś liczbę ${tajemnica} w ${proba} próbach.`; // Template string — interpolacja ${…}.
    console.log(out.textContent); // Debug.
  });
})();

/* =========================================
   3) do..while — co najmniej jedno wykonanie
   ========================================= */

(function setupDoWhile() {
  // IIFE dla do..while.
  const btn = document.getElementById("btn-do-login"); // Przycisk „Podaj hasło”.
  const out = document.getElementById("out-do"); // Pole wynikowe.
  if (!btn || !out) return; // Ochrona.

  btn.addEventListener("click", function () {
    // Po kliknięciu:
    const HASLO = "admin123"; // Wzorzec hasła.
    let wpis = ""; // Ostatni wpis użytkownika.

    // do..while — ciało wykona się co najmniej raz, warunek sprawdzany PO wykonaniu ciała
    do {
      const txt = prompt(
        "Podaj hasło (podpowiedź: admin123). Anuluj, aby przerwać."
      ); // Pytamy o hasło.
      if (txt === null) {
        // Anulowano?
        out.textContent = "Przerwano."; // Komunikat.
        return; // Wyjście.
      }
      wpis = txt; // Zapamiętaj wpis.
    } while (wpis !== HASLO); // Jeśli hasło niepoprawne — pytaj dalej.

    out.textContent = "Dostęp przyznany (hasło poprawne)."; // Sukces.
    console.log(out.textContent); // Debug.
  });
})();

/* =========================================
   4) break — przerwanie całej pętli
   ========================================= */

(function setupBreak() {
  // IIFE dla przykładu z break.
  const btn = document.getElementById("btn-break-7"); // Przycisk „Znajdź pierwszą liczbę podzielną przez 7”.
  const out = document.getElementById("out-break"); // Pole wynikowe.
  if (!btn || !out) return; // Ochrona.

  btn.addEventListener("click", function () {
    // Po kliknięciu:
    let znaleziono = null; // Będziemy tu zapisywać znalezioną liczbę.

    for (let i = 30; i <= 50; i++) {
      // Przeglądamy liczby 30..50.
      if (i % 7 === 0) {
        // Operator modulo (%) — reszta z dzielenia (czyli „podzielność przez 7”).
        znaleziono = i; // Zapisz pierwszą pasującą liczbę.
        break; // break — natychmiast PRZERWIJ CAŁĄ pętlę (nie sprawdzaj dalej).
      }
    }

    out.textContent = `Pierwsza liczba podzielna przez 7 w [30..50] to: ${znaleziono}`; // Wypisz wynik.
    alert(out.textContent); // Pokaż też w alercie.
  });
})();

/* =========================================
   5) continue — pomiń bieżącą iterację
   ========================================= */

(function setupContinue() {
  // IIFE dla przykładu z continue.
  const btn = document.getElementById("btn-continue-names"); // Przycisk „Wypisz tylko niepuste imiona”.
  const out = document.getElementById("out-continue"); // Pole wynikowe.
  if (!btn || !out) return; // Ochrona.

  btn.addEventListener("click", function () {
    // Po kliknięciu:
    const uczniowie = ["Ania", "", "Bartek", "", "", "Jacek"]; // Tablica z imionami (są też puste ciągi "").
    const widoczni = []; // Nowa tablica — tu zbierzemy tylko niepuste imiona.

    for (let i = 0; i < uczniowie.length; i++) {
      // Przejdź po indeksach 0..length-1.
      if (uczniowie[i] === "") {
        // Jeśli pusty tekst…
        continue; // …to pomiń tylko tę iterację (nie wykonuj push niżej).
      }
      widoczni.push(uczniowie[i]); // .push — dołóż niepuste imię na koniec tablicy widoczni.
    }

    out.textContent = "Niepuste imiona: " + widoczni.join(", "); // .join — połącz imiona przecinkami.
    console.log(out.textContent); // Debug.
  });
})();

/* =========================================
   6) forEach — iteracja po elementach tablicy
   ========================================= */

(function setupForEach() {
  // IIFE dla forEach.
  const btn = document.getElementById("btn-foreach-sum"); // Przycisk „Zsumuj tablicę”.
  const out = document.getElementById("out-foreach"); // Pole wynikowe.
  if (!btn || !out) return; // Ochrona.

  btn.addEventListener("click", function () {
    // Po kliknięciu:
    const liczby = [10, 20, 30, 40]; // Tablica liczb.
    let suma = 0; // Zmienna akumulator — będziemy dodawać liczby.
    const logi = []; // Zbierzemy opisy kroków, by je ładnie wypisać.

    // forEach((element, indeks) => { ... }) — wywołaj funkcję dla KAŻDEGO elementu tablicy
    liczby.forEach((liczba, indeks) => {
      // liczba = aktualna wartość, indeks = jej pozycja w tablicy.
      logi.push(`Dodaję indeks ${indeks}: ${liczba}`); // .push — dodaj opis kroku do tablicy logów.
      suma += liczba; // Dodaj bieżącą liczbę do sumy (inkrementacja o liczbę).
    });

    // // forEach tylko z elementem (bez indeksu)
    // liczby.forEach((liczba) => {      // callback dostaje wyłącznie bieżący element
    // logi.push(`Dodaję liczbę: ${liczba}`); // opis kroku bez indeksu
    // suma += liczba;                          // sumujemy elementy
    // });

    out.textContent = logi.join("\n") + `\nSuma = ${suma}`; // .join('\n') — każdy log w nowej linii, na końcu suma.
    console.log(out.textContent); // Debug.
    alert("Suma policzona. Zobacz szczegóły w <pre> i w konsoli."); // Komunikat.
  });
})();

/* 
UWAGA praktyczna:
— Pętle mogą stać się „nieskończone”, jeśli warunek nigdy nie stanie się fałszywy.
— Zmieniaj w pętli wartości wpływające na warunek (np. i++, i--), aby z niej wyjść gdy trzeba.

Dodatkowe wyjaśnienia metod:
— Array.prototype.push(element): dodaje element na koniec tablicy (zwiększa jej długość o 1).
— Array.prototype.join(separator): łączy WSZYSTKIE elementy tablicy w JEDEN string; separator ustala, co wstawić pomiędzy (np. ', ', '\n').
— Node.appendChild(node): DODANIE węzła (elementu DOM) jako „dziecko” do innego węzła (np. ul.appendChild(li)).
   TUTAJ nie używamy appendChild, bo piszemy wynik jako czysty tekst do <pre> przez .textContent.
— Element.textContent: wpisuje/odczytuje TEKST w elemencie (tagi HTML traktowane jak zwykły tekst).
— console.log(...): wypisuje informacje do konsoli przeglądarki (DevTools).
— alert(...): pokazuje okienko z komunikatem.
— Math.random(): losuje liczbę z zakresu [0, 1). Math.floor(x): zaokrągla w dół do liczby całkowitej.
— Number.isNaN(x): sprawdza, czy x jest „Not-a-Number”.
*/
