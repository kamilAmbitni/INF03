"use strict";

// Domyślnie używaj const.

// Użyj let, gdy naprawdę planujesz zmieniać wartość.

// Unikaj var (chyba że świadomie potrzebujesz zasięgu funkcyjnego/legacy).

// if (true) {
//   var a = 1;   // wycieka z bloku
//   let b = 2;   // lokalne tylko w tym if
//   const c = 3; // lokalne tylko w tym if
// }
// console.log(a); // 1
// console.log(b); // ReferenceError
// console.log(c); // ReferenceError

// var n = 1;
// var n = 2;   // OK (nadpisane)

// let m = 1;
// let m = 2;   // SyntaxError (ta sama przestrzeń)

// const k = 1;
// const k = 2; // SyntaxError

/* ============================================================
   0) Ten plik zawiera TYLKO proste, „płaskie” przykłady.
      Każda sekcja ma swój przycisk + pole <pre> na wynik.
      Używamy textContent (bezpieczne, bez HTML).
   ============================================================ */

(function setupBasic() {
  // Uchwyty do elementów z sekcji „length + charAt”.
  const inputTekst = document.getElementById("in-tekst"); // <input> z tekstem.
  const inputIndex = document.getElementById("in-index"); // <input> z numerem znaku.
  const btn = document.getElementById("btn-basic"); // Przycisk „Pokaż”.
  const out = document.getElementById("out-basic"); // <pre> na wynik.

  if (!inputTekst || !inputIndex || !btn || !out) return; // Ochrona, gdyby czegoś brakowało.

  btn.addEventListener("click", function () {
    // Po kliknięciu:
    const txt = inputTekst.value; // Pobierz tekst z pola.
    const idx = Number(inputIndex.value); // Zamień indeks na liczbę.
    const len = txt.length; // Długość napisu (ile znaków).
    // Jeżeli indeks poza zakresem — pokaż informację.
    const znak = idx >= 0 && idx < len ? txt.charAt(idx) : "(poza zakresem)";
    // Wypisz wynik (używamy \n do nowych linii).
    out.textContent =
      `Tekst: "${txt}"\n` + `length = ${len}\n` + `charAt(${idx}) = ${znak}`;
  });
})();

(function setupImmutable() {
  // Sekcja „niemodyfikowalność”: zbudujemy nowy łańcuch z podmianami.
  const btn = document.getElementById("btn-immut"); // Przycisk „Zrób JavaSkrypt”.
  const out = document.getElementById("out-immut"); // <pre> na wynik.
  if (!btn || !out) return;

  btn.addEventListener("click", function () {
    const oryginal = "JavaScript"; // Tekst wyjściowy.
    let nowy = ""; // Zaczynamy pusty łańcuch — będziemy doklejać znaki.

    // Pętla po wszystkich znakach. i = indeks (0..length-1).
    for (let i = 0; i < oryginal.length; i++) {
      if (i === 5) {
        // Na pozycji 5 wstaw „k”.
        nowy += "k";
      } else if (i === 7) {
        // Na pozycji 7 wstaw „y”.
        nowy += "y";
      } else {
        nowy += oryginal.charAt(i); // W pozostałych pozycjach — przepisz oryginalny znak.
      }
    }

    // Pokaż porównanie.
    out.textContent =
      `Oryginał:  ${oryginal}\n` +
      `Nowy napis ${nowy}  (stworzony przez doklejanie += w pętli)`;
  });
})();

(function setupFind() {
  // Wyszukiwanie: indexOf / lastIndexOf oraz „ignore case” (prosto).
  const t = document.getElementById("find-tekst"); // Tekst do przeszukania (textarea).
  const q = document.getElementById("find-szukanie"); // Fraza do szukania.
  const ic = document.getElementById("find-icase"); // Checkbox „ignoruj wielkość liter”.
  const btn = document.getElementById("btn-find"); // Przycisk „Szukaj”.
  const out = document.getElementById("out-find"); // <pre> na wynik.
  if (!t || !q || !ic || !btn || !out) return;

  btn.addEventListener("click", function () {
    const tekst = t.value; // Główny tekst.
    const szukane = q.value; // Szukana fraza.

    // indexOf — pierwsze wystąpienie (od lewej).
    const first = tekst.indexOf(szukane);

    // lastIndexOf — ostatnie wystąpienie (od prawej).
    const last = tekst.lastIndexOf(szukane);

    // „Ignore case” (prosty wariant) — porównujemy wersje z toLowerCase().
    const firstICase = tekst.toLowerCase().indexOf(szukane.toLowerCase());

    // Jeśli checkbox zaznaczony, pokaż również wynik „bez rozróżniania wielkości”.
    out.textContent =
      `Tekst:   ${tekst}\n` +
      `Szukane: ${szukane}\n\n` +
      `indexOf("${szukane}") = ${first}\n` +
      `lastIndexOf("${szukane}") = ${last}\n` +
      (ic.checked ? `indexOf (ignoruj wielkość) = ${firstICase}\n` : "");
  });
})();

(function setupCut() {
  // Wycinanie: slice / substring / substr.
  const itxt = document.getElementById("cut-tekst"); // Tekst.
  const ist = document.getElementById("cut-start"); // start.
  const iend = document.getElementById("cut-end"); // end (opcjonalny).
  const ilen = document.getElementById("cut-len"); // length dla substr.
  const btnSlice = document.getElementById("btn-slice");
  const btnSub = document.getElementById("btn-substring");
  const btnSubstr = document.getElementById("btn-substr");
  const out = document.getElementById("out-cut");
  if (
    !itxt ||
    !ist ||
    !iend ||
    !ilen ||
    !btnSlice ||
    !btnSub ||
    !btnSubstr ||
    !out
  )
    return;

  btnSlice.addEventListener("click", function () {
    const txt = itxt.value; // Główny tekst.
    const start = Number(ist.value); // start → liczba.
    // end może być pusty: jeśli puste, nie podajemy go do slice() (zwróci do końca).
    const endRaw = iend.value; // To jest string (może być "").
    const hasEnd = endRaw !== ""; // Czy użytkownik coś wpisał?
    const end = Number(endRaw); // Zamiana na liczbę (jeśli była).

    const wynik = hasEnd
      ? txt.slice(start, end) // slice(start, end) — end niewliczony.
      : txt.slice(start); // slice(start) — do końca.

    out.textContent = `slice → "${wynik}"`;
  });

  btnSub.addEventListener("click", function () {
    const txt = itxt.value;
    const start = Number(ist.value);
    const endRaw = iend.value;
    const hasEnd = endRaw !== "";
    const end = Number(endRaw);

    const wynik = hasEnd
      ? txt.substring(start, end) // substring nie przyjmuje ujemnych indeksów.
      : txt.substring(start);

    out.textContent = `substring → "${wynik}"`;
  });

  btnSubstr.addEventListener("click", function () {
    const txt = itxt.value;
    const start = Number(ist.value);
    const lenRaw = ilen.value;
    const hasLen = lenRaw !== "";
    const len = Number(lenRaw);

    const wynik = hasLen
      ? txt.substr(start, len) // substr(start, length)
      : txt.substr(start); // substr(start) — do końca.

    out.textContent = `substr → "${wynik}"  (Uwaga: metoda przestarzała, ale działa)`;
  });
})();

(function setupReplace() {
  // Zamiana fragmentów: replace pierwsze / wszystkie (prosto) / wszystkie ignore case (prosto).
  const itxt = document.getElementById("rep-tekst"); // Tekst.
  const isrc = document.getElementById("rep-szukaj"); // Szukane.
  const irep = document.getElementById("rep-na"); // Na co zamienić.
  const b1 = document.getElementById("btn-rep-first"); // Pierwsze.
  const b2 = document.getElementById("btn-rep-all"); // Wszystkie (prosto).
  const b3 = document.getElementById("btn-rep-all-icase"); // Wszystkie (ignore case, prosto).
  const out = document.getElementById("out-replace");
  if (!itxt || !isrc || !irep || !b1 || !b2 || !b3 || !out) return;

  b1.addEventListener("click", function () {
    const res = itxt.value.replace(isrc.value, irep.value); // replace — tylko pierwsze wystąpienie.
    out.textContent = res;
  });

  b2.addEventListener("click", function () {
    // Zamiana wszystkich „prosto”: rozbijamy po szukanym i łączymy „na co”.
    const parts = itxt.value.split(isrc.value); // split rozcina po szukanym.
    const res = parts.join(irep.value); // join skleja nowym słowem.
    out.textContent = res;
  });

  b3.addEventListener("click", function () {
    // „Ignore case” bez RegExp — porównujemy po lowercase, a składamy ręcznie.
    const tekst = itxt.value;
    const src = isrc.value;
    const repl = irep.value;
    const lowT = tekst.toLowerCase();
    const lowS = src.toLowerCase();

    if (!src) {
      out.textContent = tekst;
      return;
    } // Pusta fraza — nic nie rób.

    let i = 0; // Bieżąca pozycja w tekście.
    let wynik = ""; // Zbierany wynik.
    while (true) {
      const pos = lowT.indexOf(lowS, i); // Szukaj od pozycji i (ignore case).
      if (pos === -1) {
        // Nie znaleziono — dopisz resztę i wyjdź.
        wynik += tekst.slice(i);
        break;
      }
      wynik += tekst.slice(i, pos) + repl; // Doklej fragment przed trafieniem + zamiennik.
      i = pos + src.length; // Przeskocz za znalezioną frazę.
    }
    out.textContent = wynik;
  });
})();

/*
===========================================
slice() vs substring() — najważniejsze różnice
===========================================

1) Wspólne:
   • Obie zwracają WYCIĘTY fragment tekstu z oryginalnego łańcucha.
   • Drugi parametr (end) jest NIE-włącznie (exclusive) — znak na pozycji "end" nie wchodzi do wyniku.
   • Gdy pominiesz drugi parametr, biorą wszystko do końca łańcucha.

2) Różnice kluczowe:

   A) UJEMNE INDEKSY
      - slice(start, end)     — akceptuje ujemne indeksy (liczy od końca).
        PRZYKŁAD: "JavaScript".slice(-3)  → "ipt"   (3 ostatnie znaki)

      - substring(start, end) — NIE akceptuje ujemnych indeksów.
        Ujemne wartości traktuje jak 0.
        PRZYKŁAD: "JavaScript".substring(-3) → "JavaScript" (bo start = 0)

   B) KOLEJNOŚĆ ARGUMENTÓW (start > end)
      - slice(start, end)     — NIE zamienia argumentów miejscami.
        Jeśli start > end → wynik to pusty string "".
        PRZYKŁAD: "JavaScript".slice(6, 4) → ""  (bo 6 > 4)

      - substring(start, end) — ZAMIENIA argumenty miejscami, jeśli start > end.
        PRZYKŁAD: "JavaScript".substring(6, 4) → "Sc"
                  (tak jak substring(4, 6), czyli znaki z indeksów 4..5)

   C) ZACHOWANIE PRZY WYJŚCIU POZA ZAKRES
      - Obie metody „przycinają” argumenty do długości łańcucha,
        ale pamiętaj o różnicy z ujemnymi liczbami (patrz A).

3) Praktyczna rada:
   • Na co dzień preferuj slice() — jest bardziej przewidywalne
     (obsługa ujemnych indeksów, brak automatycznej zamiany argumentów). */

(function setupCase() {
  // Zmiana wielkości liter: toLowerCase / toUpperCase.
  const itxt = document.getElementById("case-tekst"); // Tekst.
  const low = document.getElementById("btn-lower"); // Przycisk lower.
  const up = document.getElementById("btn-upper"); // Przycisk upper.
  const out = document.getElementById("out-case"); // <pre> wynik.
  if (!itxt || !low || !up || !out) return;

  low.addEventListener("click", function () {
    out.textContent = itxt.value.toLowerCase(); // Wszystko na małe.
  });

  up.addEventListener("click", function () {
    out.textContent = itxt.value.toUpperCase(); // Wszystko na DUŻE.
  });
})();

(function () {
  // Pobieramy uchwyty do pól i przycisku
  const itxt = document.getElementById('split-tekst');   // tekst źródłowy
  const isep = document.getElementById('split-sep');     // separator (np. spacja, przecinek)
  const ilim = document.getElementById('split-limit');   // limit (opcjonalny)
  const btn  = document.getElementById('btn-split');     // przycisk „Rozbij”
  const out  = document.getElementById('out-split');     // pole na wynik
  if (!itxt || !isep || !ilim || !btn || !out) return;   // wyjdź, jeśli czegoś brakuje w HTML

  btn.addEventListener('click', function () {
    // 1) Zczytaj wartości z formularza
    const txt = itxt.value;        // tekst do rozbicia
    const sep = isep.value;        // separator (może być pusty: '' → litera po literze)
    const limText = ilim.value;    // limit jako tekst (pole może być puste)

    // 2) Rozbij na tablicę — z limitem albo bez
    let arr;
    if (limText === '') {
      // Bez limitu
      arr = txt.split(sep);
    } else {
      // Z limitem (zamieniamy na liczbę)
      const limit = Number(limText);
      arr = txt.split(sep, limit);
    }

    // 3) Zbuduj czytelny wynik linia po linii
    let wynik = '';
    wynik += 'Liczba elementów: ' + arr.length + '\n';
    wynik += 'Elementy tablicy:\n';

    // Pokaż każdy element z jego indeksem
    for (let i = 0; i < arr.length; i++) {
      wynik += '- [' + i + ']: "' + arr[i] + '"\n';
    }

    // 4) Pokaż też wersję „sklejoną” (join łączy elementy tablicy w jeden napis)
    wynik += '\nPo join(" | "):\n';
    wynik += arr.join(' | ');

    // 5) Wypisz do <pre>
    out.textContent = wynik;
  });
})();


(function setupCharCode() {
  // charCodeAt — pokażemy kody ASCII wszystkich znaków.
  const itxt = document.getElementById("cc-tekst"); // Tekst.
  const btn = document.getElementById("btn-ccode"); // Przycisk.
  const out = document.getElementById("out-ccode"); // Wynik.
  if (!itxt || !btn || !out) return;

  btn.addEventListener("click", function () {
    const txt = itxt.value; // Tekst użytkownika.
    let linie = []; // Będziemy zbierać linie tekstu do wypisania.
    for (let i = 0; i < txt.length; i++) {
      // Przejdź po każdym znaku.
      const znak = txt.charAt(i); // Znak o indeksie i.
      const kod = txt.charCodeAt(i); // Kod numeryczny (ASCII/Unicode). //String.fromCharCode(kod); // Odtwórz znak z kodu (powinno być to samo co 'znak').
      linie.push(`'${znak}' → ${kod}`); // Dodaj linię opisu do tablicy.
    }
    out.textContent = linie.join("\n"); // Wypisz wszystko w <pre>.
  });
})();
