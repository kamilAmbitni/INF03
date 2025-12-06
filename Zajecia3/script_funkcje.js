'use strict';

// 1) Funkcja zliczająca samogłoski w podanym tekście
function policzSamogloski(tekst) {                     // Deklaracja funkcji z parametrem 'tekst'
  const t = tekst.toLowerCase();                       // Zamieniamy cały tekst na małe litery (żeby 'A' i 'a' traktować tak samo)
  const samogloski = 'aeiouyąęó';                      // Zestaw znaków uznanych za samogłoski (w tym PL)
  let licznik = 0;                                     // Licznik znalezionych samogłosek, start od 0

  for (let i = 0; i < t.length; i++) {                 // Klasyczna pętla po każdym znaku w tekście
    if (samogloski.includes(t[i])) {                   // Sprawdź: czy bieżący znak jest w łańcuchu 'samogloski'?
      licznik++;                                       // Jeśli tak — zwiększ licznik o 1
    }
  }

  return licznik;                                      // Zwróć wynik (ile samogłosek wykryto)
}

// 2) Podpinamy działanie pod przycisk "Uruchom demo: policz samogloski"
(function setupVowelsDemo() {                          // IIFE — funkcja wywoływana od razu po zdefiniowaniu (izoluje zmienne)
  const btn = document.getElementById('btn-vowels');   // Pobierz przycisk po ID (ten od uruchamiania demo)
  const out = document.getElementById('out-vowels');   // Pobierz <pre> do wypisania wyników
  if (!btn || !out) return;                            // Gdyby któregoś elementu brakowało — wyjdź i nic nie rób

  btn.addEventListener('click', function () {          // Po kliknięciu przycisku wykonaj poniższą funkcję
    // === BEZ FUNKCJI — powtarzamy ten sam kod 3x (żeby pokazać problem) ===
    const SAMOGLOSKI = 'aeiouyąęó';                    // Zmienna z zestawem samogłosek (lokalnie w tym handlerze)

    let tekst1 = 'Ala ma kota';                        // Pierwszy tekst testowy
    let t1 = tekst1.toLowerCase();                     // Na małe litery
    let c1 = 0;                                        // Licznik samogłosek w tekście 1
    for (let i = 0; i < t1.length; i++) {              // Pętla po znakach tekstu 1
      if (SAMOGLOSKI.includes(t1[i])) {                // Czy aktualny znak to samogłoska?
        c1++;                                          // Jeśli tak — zwiększ licznik
      }
    }

    let tekst2 = 'JavaScript jest fajny';              // Drugi tekst testowy
    let t2 = tekst2.toLowerCase();                     // Na małe litery
    let c2 = 0;                                        // Licznik samogłosek w tekście 2
    for (let i = 0; i < t2.length; i++) {              // Pętla po znakach tekstu 2
      if (SAMOGLOSKI.includes(t2[i])) {                // Czy aktualny znak to samogłoska?
        c2++;                                          // Jeśli tak — zwiększ licznik
      }
    }

    let tekst3 = 'Technikum informatyczne';            // Trzeci tekst testowy
    let t3 = tekst3.toLowerCase();                     // Na małe litery
    let c3 = 0;                                        // Licznik samogłosek w tekście 3
    for (let i = 0; i < t3.length; i++) {              // Pętla po znakach tekstu 3
      if (SAMOGLOSKI.includes(t3[i])) {                // Czy aktualny znak to samogłoska?
        c3++;                                          // Jeśli tak — zwiększ licznik
      }
    }

    // === Z FUNKCJĄ — ta sama logika bez duplikacji ===
    const f1 = policzSamogloski('Ala ma kota');        // Wywołaj funkcję dla tekstu 1 — zwróci liczbę samogłosek
    const f2 = policzSamogloski('JavaScript jest fajny'); // Dla tekstu 2
    const f3 = policzSamogloski('Technikum informatyczne'); // Dla tekstu 3

    // 3) Zbudujmy jeden tekst wynikowy
    const bezFunkcji =                                 // Łańcuch z wynikami z „ręcznej” (powtarzalnej) wersji
      '--- BEZ FUNKCJI ---\n' +                        // Nagłówek sekcji
      'Tekst 1 ma ' + c1 + ' samoglosek.\n' +          // Linia z wynikiem dla tekstu 1
      'Tekst 2 ma ' + c2 + ' samoglosek.\n' +          // Linia z wynikiem dla tekstu 2
      'Tekst 3 ma ' + c3 + ' samoglosek.';             // Linia z wynikiem dla tekstu 3

    const zFunkcja =                                   // Łańcuch z wynikami z podejścia „z funkcją”
      '--- Z FUNKCJĄ ---\n' +                          // Nagłówek sekcji
      'Tekst 1 ma ' + f1 + ' samoglosek.\n' +          // Linia z wynikiem dla tekstu 1 (funkcja)
      'Tekst 2 ma ' + f2 + ' samoglosek.\n' +          // Linia z wynikiem dla tekstu 2 (funkcja)
      'Tekst 3 ma ' + f3 + ' samoglosek.';             // Linia z wynikiem dla tekstu 3 (funkcja)

    const wynik = bezFunkcji + '\n\n' + zFunkcja;      // Sklejamy obie sekcje tekstu w jedną zmienną

    // 4) Wypisz do <pre>, do konsoli i pokaż alert
    out.textContent = wynik;                           // Wyświetl wynik na stronie (w <pre id="out-vowels">)
    console.log(wynik);                                // Wypisz ten sam tekst do konsoli (narzędzia dev)
    alert(wynik);                                      // Pokaż wynik w okienku alert
  });
})();                                                  // Natychmiast wywołaj IIFE (uruchamia podpięcie zdarzenia po wczytaniu skryptu)



// 2) Funkcje nie startuja same — definicja + wywolanie na przycisk
function przywitaj_kursanta() {                       // Definicja funkcji (sama sie NIE uruchamia)
  alert('Witaj w kursie JavaScript!');                // Dzialanie funkcji: pokaz prosty alert z powitaniem
}

(function setupHello() {                              // IIFE: uruchamia sie natychmiast po wczytaniu pliku
  const btn = document.getElementById('btn-hello');   // Uchwycenie przycisku "Wywolaj: przywitaj_kursanta()"
  const out = document.getElementById('out-hello');   // Uchwycenie <pre id="out-hello"> do wypisywania komunikatow
  if (!btn || !out) return;                           // Jesli ktoregos elementu nie ma w HTML — wyjdz z funkcji

  btn.addEventListener('click', function () {         // Podpinamy reakcje na klikniecie przycisku
    const msg = 'Wywoluje funkcje przywitaj_kursanta()...'; // Tekst komunikatu informacyjnego
    out.textContent = msg;                            // Wypisz komunikat na stronie (do <pre>)
    console.log(msg);                                 // Wypisz ten sam komunikat do konsoli (devtools)
    przywitaj_kursanta();                             // TERAZ dopiero wywolujemy funkcje (definicja nie uruchamia)
    out.textContent += '\nFunkcja zostala wykonana.'; // Dopisz drugi wiersz po wykonaniu funkcji
  });
})();                                                 // Koniec IIFE — natychmiastowe wywolanie


// 3) onclick (inline) vs addEventListener — dwie drogi podpinania reakcji na klik

function pokazKomunikat() {                                        // Funkcja wywoływana przez atrybut inline: onclick="pokazKomunikat()"
  const msg = 'Klik przez inline onclick (przycisk id="btn-inline")'; // Treść komunikatu dla tej wersji
  const out = document.getElementById('out-click');                 // Uchwycenie <pre id="out-click">, gdzie wypiszemy wynik
  if (out) out.textContent = msg;                                   // Wypisz na stronę (jeśli element istnieje)
  console.log(msg);                                                 // Wypisz do konsoli (narzędzia deweloperskie)
  alert(msg);                                                       // Pokaż okienko alert z komunikatem
}

(function setupClickDemo() {                                        // IIFE — uruchamia konfigurację po wczytaniu pliku
  const btn = document.getElementById('btn-add');                   // Drugi przycisk (ten bez inline), do którego podłączymy addEventListener
  const out = document.getElementById('out-click');                 // To samo pole <pre> do wypisywania informacji
  if (!btn || !out) return;                                         // Gdyby brakowało któregoś elementu — kończymy, żeby uniknąć błędów

  btn.addEventListener('click', function (e) {                      // Nowocześniejszy sposób: dodajemy „słuchacza” zdarzenia klik
    const msg = 'Klik przez addEventListener (this.id="' + this.id + '")'; // Komunikat; w function() słowo this wskazuje na kliknięty przycisk
    out.textContent = msg;                                          // Wypisz na stronę
    console.log(msg);                                               // Wypisz do konsoli
    alert(msg);                                                     // Pokaż alert
  });                                                               // (Uwaga: można dodać wielu słuchaczy do jednego elementu)
})();                                                               // Koniec IIFE


// 4) Zdarzenie change: select zmienia tło (wersja bez helpera write)
/* ============================================
   ZDARZENIE change: wybór koloru tła (sekcja główna)
   ============================================ */

function zmienTlo() {                                       // Funkcja wywoływana przez atrybut onchange w <select id="kolor">
  const select = document.getElementById('kolor-changehtml');          // Pobierz uchwyt do listy rozwijanej z sekcji głównej
  if (!select) return;                                      // Gdyby elementu nie było w DOM, wyjdź cicho (bez błędu)
  const wybranyKolor = select.value;                        // value = wartość z atrybutu value zaznaczonej <option>
  document.body.style.backgroundColor = wybranyKolor;       // Nadaj kolor jako styl inline (zmiana tła całej strony)
  console.log('Ustawiono kolor tla:', wybranyKolor);        // Informacja diagnostyczna w konsoli (do podglądu działania)
  // alert('Ustawiono kolor tla: ' + wybranyKolor);         // (opcjonalnie) odkomentuj, jeśli chcesz też alert
}

(function setupResetBg() {                                  // IIFE: konfiguracja przycisku „Reset tła” (uruchamia się od razu po wczytaniu skryptu)
  const btn = document.getElementById('btn-reset-bg-changehtml');      // Szukamy przycisku resetu w sekcji głównej
  if (!btn) return;                                         // Jeśli przycisku nie ma w HTML, kończymy konfigurację

  btn.addEventListener('click', function () {               // Po kliknięciu przycisku…
    document.body.style.backgroundColor = '';               // …usuń styl inline (pusty string = powrót do domyślnego tła)
    const select = document.getElementById('kolor-changedemo');// Uwaga: tu resetowany jest selekt Z NOTATKI (id="kolor-notatka").
                                                            // Jeśli chcesz resetować główny selekt, zmień na: document.getElementById('kolor')
    if (select) select.value = 'white';                     // Przestaw widoczny wybór na „white”, by UI zgadzało się z tłem
    console.log('Zresetowano kolor tla');                   // Log diagnostyczny do konsoli
  });
})();

/* ============================================
   NOTATKA — demo change z addEventListener (ID unikalne)
   ============================================ */

(function setupNotatkaChangeDemo() {                        // IIFE: „żywe” demo w notatce — bez atrybutu onchange w HTML
  const select = document.getElementById('kolor-changedemo');  // Pobierz selekt z notatki (ma inny ID, by nie mieszać z sekcją główną)
  const reset  = document.getElementById('btn-reset-bg-changedemo'); // Pobierz przycisk resetu z notatki
  if (!select || !reset) return;                            // Gdyby któregoś elementu brakowało, przerwij konfigurację

  select.addEventListener('change', function () {           // Reaguj na zmianę wyboru (zdarzenie 'change')
    document.body.style.backgroundColor = this.value;       // this = bieżący <select>; ustaw tło na wybraną wartość
    console.log('Ustawiono kolor tla (changedemo):', this.value); // Log do konsoli dla łatwiejszego śledzenia
  });

  reset.addEventListener('click', function () {             // Po kliknięciu „Reset tła” w notatce…
    document.body.style.backgroundColor = '';               // …usuń styl inline (wróć do domyślnego tła)
    select.value = 'white';                                 // Przywróć widocznie opcję „white” w select
    console.log('Zresetowano kolor tla (changedemo)');         // Log do konsoli
  });
})();



// 5) return — funkcja zwracająca wartość (wersja podstawowa)

// Funkcja, która LICZY pole i od razu pokazuje wynik w alert
function obliczPoleAlert(a, b) {                   // a i b to liczby
  const pole = a * b;                               // mnożymy a razy b
  alert('Pole wynosi: ' + pole);                    // pokazujemy wynik w okienku alert
}

// Funkcja, która TYLKO ZWRACA wynik (nie pokazuje go sama)
function obliczPole(a, b) {
  return a * b;                                     // zwróć iloczyn (wynik trafi do miejsca wywołania)
}

// „Setup” do przycisków w tej sekcji (wykonuje się od razu po wczytaniu pliku)
(function setupArea() {
  // 1) Łapiemy potrzebne elementy z HTML po ich ID
  const aEl = document.getElementById('a');                     // input z wartością a
  const bEl = document.getElementById('b');                     // input z wartością b
  const btnAlert  = document.getElementById('btn-pole-alert');  // przycisk: wersja z alert
  const btnReturn = document.getElementById('btn-pole-return'); // przycisk: wersja z return
  const btnSuma   = document.getElementById('btn-suma-pol');    // przycisk: suma pól z przykładu
  const out       = document.getElementById('out-area');        // <pre>, w którym wypiszemy wyniki

  // Prosta funkcja pomocnicza: pobiera liczby z pól i sprawdza, czy to na pewno liczby
  function pobierzLiczby() {
    const a = Number(aEl.value);                 // zamiana tekstu z inputa na liczbę
    const b = Number(bEl.value);
    if (!Number.isFinite(a) || !Number.isFinite(b)) {
      alert('Podaj poprawne liczby w polach a i b.'); // komunikat, gdy wpisano coś nienumerycznego
      return null;                                     // przerwij — brak poprawnych danych
    }
    return { a, b };                                   // zwróć obie liczby w obiekcie
  }

  // 2) Wersja „alert” — funkcja SAMA pokazuje wynik
  if (btnAlert) {
    btnAlert.addEventListener('click', function () {
      const dane = pobierzLiczby();            // pobierz a i b
      if (!dane) return;                       // jeśli błąd danych — nic dalej nie rób
      obliczPoleAlert(dane.a, dane.b);         // policz i pokaż wynik w alert
      if (out) out.textContent = 'Wywołano obliczPoleAlert(a, b) — wynik zobaczysz w alert.'; // krótka informacja na stronie
      console.log('obliczPoleAlert:', dane.a, 'x', dane.b); // log do konsoli
    });
  }

  // 3) Wersja „return” — funkcja zwraca wynik, a my go WYŚWIETLAMY sami
  if (btnReturn) {
    btnReturn.addEventListener('click', function () {
      const dane = pobierzLiczby();
      if (!dane) return;
      const wynik = obliczPole(dane.a, dane.b);                 // bierzemy ZWRÓCONĄ wartość
      if (out) out.textContent = 'Wynik (return): ' + wynik;    // sami decydujemy co z nim zrobić (tu: wypisujemy)
      console.log('obliczPole (return):', wynik);               // log do konsoli
      // alert('Pole: ' + wynik); // jeśli chcesz, możesz też tu zrobić alert — ale celowo pokazujemy różnicę
    });
  }

  // 4) Dodatkowy przycisk: suma dwóch przykładowych pól
  if (btnSuma) {
    btnSuma.addEventListener('click', function () {
      const sumaPol = obliczPole(5, 10) + obliczPole(3, 4);     // używamy funkcji wielokrotnie
      if (out) out.textContent = 'Suma pól (5×10 + 3×4) = ' + sumaPol;
      console.log('Suma pól:', sumaPol);
    });
  }
})();


// 6) Funkcje anonimowe — przykłady podstawowe

// Funkcja anonimowa przypisana do zmiennej (nie ma nazwy po 'function', nazwą jest zmienna)
const powiedzCzesc = function () {             // <- anonimowa funkcja, którą zapisujemy do zmiennej
  alert('Czesc!');                             // Po wywołaniu pokaże prosty alert
};

(function setupAnon() {                        // IIFE — konfiguracja zdarzeń uruchamia się od razu po wczytaniu pliku
  // 1) Przycisk, który wywoła anonimową funkcję z powyższej zmiennej
  const btnPowiedz = document.getElementById('btn-powiedz'); // Szukamy przycisku
  if (btnPowiedz) {                                          // Jeśli istnieje…
    btnPowiedz.addEventListener('click', function () {       // …po kliknięciu
      powiedzCzesc();                                        // wywołujemy naszą anonimową funkcję
      btnPowiedz.textContent = 'Wywolano powiedzCzesc()';    // (dla feedbacku) zmień napis na przycisku
      console.log('Klik: powiedzCzesc()');                   // log do konsoli (pomoc w nauce)
    });
  }

  // 2) Różnica this: zwykla function() jako handler
  const btnThisFn = document.getElementById('btn-this-function'); // Drugi przycisk
  if (btnThisFn) {
    btnThisFn.addEventListener('click', function () {        // Uwaga: zwykla function()
      // W zwykłej function() 'this' wskazuje na element, na którym było zdarzenie
      this.textContent = 'Kliknieto (function) - this to przycisk'; // Możemy modyfikować kliknięty przycisk przez 'this'
      console.log('this === btnThisFn ?', this === btnThisFn);      // true - potwierdzenie w konsoli
    });
  }

  // 3) Różnica this: funkcja strzałkowa jako handler
  const btnThisArrow = document.getElementById('btn-this-arrow'); // Trzeci przycisk
  if (btnThisArrow) {
    btnThisArrow.addEventListener('click', (e) => {          // Uwaga: funkcja strzałkowa (=>)
      // W strzałkowej 'this' nie wskazuje na przycisk - dlatego używamy e.currentTarget
      e.currentTarget.textContent = 'Kliknieto (arrow) - uzyto e.currentTarget';
      console.log('this w arrow:', this, 'currentTarget:', e.currentTarget); // this zwykle nie będzie tu przydatne
    });
  }

  // 4) forEach z funkcją anonimową - iteracja po tablicy i tworzenie <li>
  const list = document.getElementById('list-numbers');      // <ul>, do którego dodamy elementy listy
  if (list) {
    const liczby = [1, 2, 3, 4, 5];                          // Prosta tablica liczb
    list.innerHTML = '';                                     // Wyczyść listę (na wypadek ponownego odpalenia)
    liczby.forEach(function (liczba) {                       // Anonimowa function(liczba) przekazana do forEach
      const li = document.createElement('li');               // Utwórz <li>
      li.textContent = 'Liczba: ' + liczba;                  // Ustaw treść
      list.appendChild(li);                                  // Wstaw <li> do <ul>
    });
  }
})(); // Koniec IIFE


