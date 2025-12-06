'use strict'; // Włącza „surowszy” tryb JS — pomaga wychwycić błędy i złe nawyki.

/* =========================================
   1) Tworzenie tablicy + odczyt indeksów
   ========================================= */
(function setupCreate() {                               // IIFE — natychmiastowa konfiguracja sekcji „Tworzenie”.
  const btn = document.getElementById('btn-create');    // Szukamy przycisku „Pokaż elementy i indeksy”.
  const out = document.getElementById('out-create');    // Szukamy pola <pre> do wypisania wyniku.
  if (!btn || !out) return;                             // Jeśli któregoś elementu nie ma w HTML — kończymy.

  btn.addEventListener('click', function () {           // Reakcja na kliknięcie przycisku:
    const owoce = ['Jabłko', 'Banan', 'Gruszka'];       // Tworzymy tablicę 3 elementów (indeksy: 0,1,2).
    const linie = [];                                   // Pusta tablica na linie tekstu do ładnego wyświetlenia.
    linie.push(`owoce[0] = ${owoce[0]}`);               // .push — dodajemy tekst o elemencie z indeksu 0.
    linie.push(`owoce[1] = ${owoce[1]}`);               // Element z indeksu 1.
    linie.push(`owoce[2] = ${owoce[2]}`);               // Element z indeksu 2.
    linie.push(`Długość (length) = ${owoce.length}`);   // .length — liczba elementów w tablicy.
    out.textContent = linie.join('\n');                 // .join('\n') — sklej linie, każda w nowym wierszu.
  });
})();

/* =========================================
   2) Dodawanie / usuwanie (push, unshift, pop, shift)
   ========================================= */
(function setupAddRemove() {
  const out = document.getElementById('out-addremove'); // Pole <pre> do wypisywania wyników tej sekcji.

  const btnPush = document.getElementById('btn-push');  // Przycisk: push (dodaj na koniec).
  if (btnPush && out) {
    btnPush.addEventListener('click', function () {     // Po kliknięciu:
      const owoce = ['Jabłko', 'Banan', 'Gruszka'];     // Stan początkowy tablicy.
      owoce.push('Śliwka');                             // .push — dodaje NOWY element NA KOŃCU tablicy.
      // Przygotowujemy tekst wyjściowy ręcznie (bez helpera):
      const wynik = `push("Śliwka") →\n[ ${owoce.join(', ')} ]`; // .join — pokaż elementy po przecinku.
      out.textContent = wynik;                          // Wpisujemy wynik do <pre>.
    });
  }

  const btnUnshift = document.getElementById('btn-unshift'); // Przycisk: unshift (dodaj na początek).
  if (btnUnshift && out) {
    btnUnshift.addEventListener('click', function () {
      const owoce = ['Jabłko', 'Banan', 'Gruszka'];     // Stan początkowy tablicy.
      owoce.unshift('Wiśnia');                          // .unshift — dodaje element NA POCZĄTKU (przesuwa resztę).
      const wynik = `unshift("Wiśnia") →\n[ ${owoce.join(', ')} ]`;
      out.textContent = wynik;
    });
  }

  const btnPop = document.getElementById('btn-pop');    // Przycisk: pop (usuń z końca).
  if (btnPop && out) {
    btnPop.addEventListener('click', function () {
      const owoce = ['Wiśnia', 'Jabłko', 'Banan', 'Gruszka']; // Start.
      const usuniety = owoce.pop();                    // .pop — usuwa OSTATNI element i go ZWRACA.
      const wynik =
        `pop() → usunięto: ${usuniety}\n` +            // Pokaż jaki element usunęliśmy…
        `[ ${owoce.join(', ')} ]`;                     // …i jak wygląda teraz tablica.
      out.textContent = wynik;
    });
  }

  const btnShift = document.getElementById('btn-shift'); // Przycisk: shift (usuń z początku).
  if (btnShift && out) {
    btnShift.addEventListener('click', function () {
      const owoce = ['Wiśnia', 'Jabłko', 'Banan', 'Gruszka']; // Start.
      const usuniety = owoce.shift();                  // .shift — usuwa PIERWSZY element i go ZWRACA.
      const wynik =
        `shift() → usunięto: ${usuniety}\n` +          // Co usunięto…
        `[ ${owoce.join(', ')} ]`;                     // …i aktualny stan tablicy.
      out.textContent = wynik;
    });
  }
})();

/* =========================================
   3) splice — usuń / wstaw / podmień
   Składnia: tablica.splice(start, ileUsunąć, ...noweElementyOpcjonalnie)
   ========================================= */
(function setupSplice() {
  const out = document.getElementById('out-splice');   // Pole wynikowe tej sekcji.

  const btnRemove = document.getElementById('btn-splice-remove'); // „Usuń 2 od indeksu 0”
  if (btnRemove && out) {
    btnRemove.addEventListener('click', function () {
      const owoce = ['Jabłko', 'Banan', 'Gruszka'];    // Start.
      owoce.splice(0, 2);                              // Od indeksu 0 usuń 2 elementy → zostaje tylko „Gruszka”.
      const wynik = `splice(0, 2) →\n[ ${owoce.join(', ')} ]`;
      out.textContent = wynik;
    });
  }

  const btnInsert = document.getElementById('btn-splice-insert'); // „Wstaw Malinę na indeks 1”
  if (btnInsert && out) {
    btnInsert.addEventListener('click', function () {
      const owoce = ['Jabłko', 'Banan', 'Gruszka'];    // Start.
      owoce.splice(1, 0, 'Malina');                    // Od indeksu 1, usuń 0, wstaw „Malina”.
      const wynik = `splice(1, 0, "Malina") →\n[ ${owoce.join(', ')} ]`;
      out.textContent = wynik;
    });
  }

  const btnReplace = document.getElementById('btn-splice-replace'); // „Podmień indeks 2 na Wiśnia”
  if (btnReplace && out) {
    btnReplace.addEventListener('click', function () {
      const owoce = ['Jabłko', 'Banan', 'Gruszka'];    // Start.
      owoce.splice(2, 1, 'Wiśnia');                    // Od indeksu 2 usuń 1 i wstaw „Wiśnia”.
      const wynik = `splice(2, 1, "Wiśnia") →\n[ ${owoce.join(', ')} ]`;
      out.textContent = wynik;
    });
  }
})();

/* =========================================
   4) Iteracja: for, forEach, for...of
   ========================================= */
(function setupIterate() {
  const out = document.getElementById('out-iterate');  // Pole wynikowe sekcji iteracji.
  const arr = ['Jabłko', 'Banan', 'Gruszka'];          // Tablica do iterowania.

  // for — klasyczna pętla z indeksem i
  const btnFor = document.getElementById('btn-for');   // Przycisk „for”.
  if (btnFor && out) {
    btnFor.addEventListener('click', function () {
      const linie = [];                                 // Zbieramy linie tekstu.
      for (let i = 0; i < arr.length; i++) {            // i rośnie od 0 do arr.length-1.
        linie.push(`i=${i} → ${arr[i]}`);               // arr[i] — wartość pod danym indeksem.
      }
      out.textContent = linie.join('\n');               // Wypisz każdą linię w nowym wierszu.
    });
  }

  // forEach — nowocześnie, callback dla każdego elementu
  const btnForEach = document.getElementById('btn-foreach'); // Przycisk „forEach”.
  if (btnForEach && out) {
    btnForEach.addEventListener('click', function () {
      const linie = [];                                 // Bufor na treść.
      arr.forEach((owoc, indeks) => {                   // (element, indeks) — drugi parametr to numer szuflady.
        linie.push(`indeks=${indeks} → ${owoc}`);       // Dokładnie opisujemy indeks i wartość.
      });
      out.textContent = linie.join('\n');               // Wypisujemy wynik.
    });
  }

  // for...of — bardzo czytelne przejście po WARTOŚCIACH (bez indeksu)
  const btnForOf = document.getElementById('btn-forof'); // Przycisk „for...of”.
  if (btnForOf && out) {
    btnForOf.addEventListener('click', function () {
      const linie = [];                                 // Bufor na linie.
      for (const owoc of arr) {                         // Każde „owoc” to kolejna WARTOŚĆ z tablicy.
        linie.push(`wartość → ${owoc}`);                // Wypisujemy samą wartość.
      }
      out.textContent = linie.join('\n');               // Wyświetlamy całość.
    });
  }
})();

/* =========================================
   5) Szukanie: includes, indexOf
   ========================================= */
(function setupSearch() {
  const out = document.getElementById('out-search');   // Pole wynikowe sekcji „Szukanie”.
  const owoce = ['Jabłko', 'Banan', 'Gruszka'];        // Przykładowa tablica do sprawdzeń.

  const btnIncludes = document.getElementById('btn-includes'); // Przycisk „includes”.
  if (btnIncludes && out) {
    btnIncludes.addEventListener('click', function () {
      const czyJest = owoce.includes('Banan');         // .includes — zwraca true/false (czy wartość istnieje).
      out.textContent = `includes("Banan") → ${czyJest}`; // Wypisz wynik typu boolean.
    });
  }

  const btnIndexOf = document.getElementById('btn-indexof');   // Przycisk „indexOf”.
  if (btnIndexOf && out) {
    btnIndexOf.addEventListener('click', function () {
      const idx = owoce.indexOf('Gruszka');             // .indexOf — zwraca indeks pierwszego wystąpienia lub -1.
      out.textContent = `indexOf("Gruszka") → ${idx}`;  // Wypisz indeks (np. 2) lub -1 (gdy brak).
    });
  }
})();

/* =========================================
   6) Łączenie i modyfikacje: concat, reverse, sort
   ========================================= */
(function setupTransform() {
  const out = document.getElementById('out-transform'); // Pole wynikowe tej sekcji.

  const btnConcat = document.getElementById('btn-concat'); // Przycisk „concat”.
  if (btnConcat && out) {
    btnConcat.addEventListener('click', function () {
      const owoce = ['Jabłko', 'Banan', 'Gruszka'];    // Pierwsza tablica.
      const warzywa = ['Marchew', 'Ziemniak'];         // Druga tablica.
      const produkty = owoce.concat(warzywa);          // .concat — tworzy NOWĄ tablicę: owoce + warzywa (nie modyfikuje oryginałów).
      // Budujemy ręcznie kilka linii do pokazania:
      const linie = [
        `owoce:   [ ${owoce.join(', ')} ]`,            // Oryginalne owoce (bez zmian).
        `warzywa: [ ${warzywa.join(', ')} ]`,          // Oryginalne warzywa (bez zmian).
        `concat → [ ${produkty.join(', ')} ]`          // Wynik po połączeniu.
      ];
      out.textContent = linie.join('\n');              // Wypisz całość.
    });
  }

  const btnReverse = document.getElementById('btn-reverse'); // Przycisk „reverse”.
  if (btnReverse && out) {
    btnReverse.addEventListener('click', function () {
      const owoce = ['Jabłko', 'Banan', 'Gruszka'];    // Start.
      owocesort = reverse(owoce)  ;     // przypisuje do nowej zmiennej odwróconą tablicę ale jej nie modyfikuje                        
      owoce.reverse();   // .reverse — ODWRACA kolejność W MIEJSCU (modyfikuje tablicę).
      const wynik = `reverse() →\n[ ${owoce.join(', ')} ]`;
      out.textContent = wynik;
    });
  }

  const btnSort = document.getElementById('btn-sort'); // Przycisk „sort”.
  if (btnSort && out) {
    btnSort.addEventListener('click', function () {
      const owoce = ['Jabłko', 'Banan', 'Gruszka'];    // Start.
      owoce.sort();                                    // .sort — sortuje ALFABETYCZNIE (też modyfikuje tablicę).
      const wynik = `sort() →\n[ ${owoce.join(', ')} ]`;
      out.textContent = wynik;
    });
  }
})();

/* =========================================
   7) Konwersje: join (tablica → string), split (string → tablica)
   ========================================= */
(function setupConvert() {
  const out = document.getElementById('out-convert');  // Pole wynikowe sekcji „Konwersje”.

  const btnJoin = document.getElementById('btn-join'); // Przycisk „join”.
  if (btnJoin && out) {
    btnJoin.addEventListener('click', function () {
      const owoce = ['Jabłko', 'Banan', 'Gruszka'];    // Startowa tablica.
      const tekst = owoce.join(' ');                   // .join(' ') — skleja elementy w jeden tekst, rozdzielone spacją.
      out.textContent = `join(" ") → "${tekst}"`;      // Pokazujemy wynikowy string.
    });
  }

  const btnSplit = document.getElementById('btn-split'); // Przycisk „split”.
  const inpText = document.getElementById('inp-text');   // Pole tekstowe do rozcięcia na tablicę.
  if (btnSplit && out && inpText) {
    btnSplit.addEventListener('click', function () {
      const tekst = inpText.value;                       // Pobieramy to, co wpisano w input.
      const slowa = tekst.split(' ');                    // .split(' ') — rozcina string na tablicę, gdzie separator to spacja.
      const wynik = `split(" ") →\n[ ${slowa.join(', ')} ]`; // Pokazujemy powstałą tablicę (połączoną przecinkami do podglądu).
      out.textContent = wynik;                           // Wypisujemy wynik do <pre>.
    });
  }
})();
