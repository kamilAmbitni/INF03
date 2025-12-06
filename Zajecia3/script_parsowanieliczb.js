'use strict'; // Surowszy tryb — pomaga wyłapać błędy (np. niezadeklarowane zmienne).

/* ==========================================================
   1) Problem z typami: + skleja teksty (bez parsowania)
   ========================================================== */
(function () {                                // IIFE — uruchamia się od razu po wczytaniu pliku.
  const btn = document.getElementById('btn-bad-sum');   // Przycisk „Dodaj BEZ parsowania”.
  const out = document.getElementById('out-bad');       // Pole <pre> na wynik.
  const clear = document.getElementById('btn-clear-1'); // Przycisk „Wyczyść wynik”.
  if (!btn || !out || !clear) return;                   // Jeśli któregoś elementu brak — wyjdź.

  btn.addEventListener('click', function () {           // Po kliknięciu:
    const aText = document.getElementById('a').value;   // .value z inputa to ZAWSZE TEKST (string).
    const bText = document.getElementById('b').value;   // Tu CELowo nie konwertujemy na liczbę.
    const wynik = aText + bText;                        // + dla stringów = sklejanie (konkatenacja).
    out.textContent = `a="${aText}", b="${bText}" → a + b = "${wynik}"  (to tekst, nie dodawanie)`;
    alert('Bez parsowania 5 i 7 da "57". To jest sklejanie tekstów, nie suma.');
  });

  clear.addEventListener('click', function () {         // Wyczyść wynik.
    out.textContent = '';
  });
})();

/* ==========================================================
   2) Poprawne dodawanie — różne konwersje liczb
   ========================================================== */
(function () {
  const out   = document.getElementById('out-good');            // Pole wynikowe.
  const btnPF = document.getElementById('btn-sum-parsefloat');  // parseFloat
  const btnPI = document.getElementById('btn-sum-parseint');    // parseInt
  const btnN  = document.getElementById('btn-sum-number');      // Number
  const btnUP = document.getElementById('btn-sum-unary');       // Unarny plus (+x)
  const btnSV = document.getElementById('btn-sum-safe');        // Z walidacją isNaN()
  const clear = document.getElementById('btn-clear-2');         // Wyczyść
  if (!out || !btnPF || !btnPI || !btnN || !btnUP || !btnSV || !clear) return;

  // parseFloat — potrafi czytać ułamki (np. "5.7" → 5.7)
  btnPF.addEventListener('click', function () {
    const a = parseFloat(document.getElementById('a').value);
    const b = parseFloat(document.getElementById('b').value);
    out.textContent = `parseFloat: ${a} + ${b} = ${a + b}`;
  });

  // parseInt — zamienia na liczbę całkowitą (ucina część po kropce)
  btnPI.addEventListener('click', function () {
    const a = parseInt(document.getElementById('a').value);
    const b = parseInt(document.getElementById('b').value);
    out.textContent = `parseInt: ${a} + ${b} = ${a + b}`;
  });

  // Number — rygorystyczna konwersja (cały tekst musi być liczbą; "20px" → NaN)
  btnN.addEventListener('click', function () {
    const a = Number(document.getElementById('a').value); 
    const b = Number(document.getElementById('b').value);
    out.textContent = `Number: ${a} + ${b} = ${a + b}`;
  });

  // Unarny plus — najkrócej; działa tak jak Number(x)
  btnUP.addEventListener('click', function () {
    const a = +document.getElementById('a').value;
    const b = +document.getElementById('b').value;
    out.textContent = `Unarny plus: ${a} + ${b} = ${a + b}`;
  });

  // Bezpieczne dodawanie — najpierw konwersja, potem sprawdzenie isNaN()
  btnSV.addEventListener('click', function () {
    const a = parseFloat(document.getElementById('a').value);
    const b = parseFloat(document.getElementById('b').value);
    if (isNaN(a) || isNaN(b)) {                           // true → to nie jest poprawna liczba
      alert('Błąd: podaj poprawne liczby!');
      out.textContent = 'Błąd: niepoprawne dane.';
      return;                                             // przerwij — nie licz dalej
    }
    const suma = a + b;
    out.textContent = `Bezpiecznie (parseFloat + isNaN): ${a} + ${b} = ${suma}`;
  });

  clear.addEventListener('click', function () {
    out.textContent = '';
  });
})();

/* ==========================================================
   3) Mini kalkulator: odejmowanie, mnożenie, dzielenie
   (za każdym razem: parsujemy + walidujemy)
   ========================================================== */
(function () {
  const out   = document.getElementById('out-calc');
  const btnSub = document.getElementById('btn-sub');  // Odejmowanie
  const btnMul = document.getElementById('btn-mul');  // Mnożenie
  const btnDiv = document.getElementById('btn-div');  // Dzielenie
  const clear  = document.getElementById('btn-clear-3');
  if (!out || !btnSub || !btnMul || !btnDiv || !clear) return;

  btnSub.addEventListener('click', function () {
    const a = parseFloat(document.getElementById('a').value);
    const b = parseFloat(document.getElementById('b').value);
    if (isNaN(a) || isNaN(b)) { alert('Podaj liczby!'); return; }
    out.textContent = `Odejmowanie: ${a} − ${b} = ${a - b}`;
  });

  btnMul.addEventListener('click', function () {
    const a = parseFloat(document.getElementById('a').value);
    const b = parseFloat(document.getElementById('b').value);
    if (isNaN(a) || isNaN(b)) { alert('Podaj liczby!'); return; }
    out.textContent = `Mnożenie: ${a} × ${b} = ${a * b}`;
  });

  btnDiv.addEventListener('click', function () {
    const a = parseFloat(document.getElementById('a').value);
    const b = parseFloat(document.getElementById('b').value);
    if (isNaN(a) || isNaN(b)) { alert('Podaj liczby!'); return; }
    if (b === 0) {                                       // Dzielenie przez zero — niewłaściwe
      alert('Nie dziel przez zero!');
      out.textContent = 'Błąd: dzielenie przez zero.';
      return;
    }
    out.textContent = `Dzielenie: ${a} ÷ ${b} = ${a / b}`;
  });

  clear.addEventListener('click', function () {
    out.textContent = '';
  });
})();

/* ==========================================================
   4) Laboratorium parsowania — testuj pojedynczą wartość
   ========================================================== */
(function () {
  const input = document.getElementById('to-parse');            // Pole do wpisania tekstu (np. "20.5px")
  const out   = document.getElementById('out-parse');           // Tu pokażemy wynik testu
  const bPI   = document.getElementById('btn-test-parseint');   // Przycisk: parseInt
  const bPF   = document.getElementById('btn-test-parsefloat'); // Przycisk: parseFloat
  const bN    = document.getElementById('btn-test-number');     // Przycisk: Number
  const clear = document.getElementById('btn-clear-4');         // Wyczyść
  if (!input || !out || !bPI || !bPF || !bN || !clear) return;

  bPI.addEventListener('click', function () {
    const txt = input.value;                       // Surowy tekst z inputa
    const v = parseInt(txt);                       // parseInt — liczba całkowita (ucina ułamki, czyta „od lewej”)
    out.textContent =
      `parseInt("${txt}") → ${v}\n` +
      `Czy liczba? ${isNaN(v) ? 'Nie (NaN)' : 'Tak'}`;
  });

  bPF.addEventListener('click', function () {
    const txt = input.value;
    const v = parseFloat(txt);                     // parseFloat — liczba z ułamkiem, czyta „od lewej”
    out.textContent =
      `parseFloat("${txt}") → ${v}\n` +
      `Czy liczba? ${isNaN(v) ? 'Nie (NaN)' : 'Tak'}`;
  });

  bN.addEventListener('click', function () {
    const txt = input.value;
    const v = Number(txt);                         // Number — całość musi być liczbą (np. "20px" → NaN tak samo 12,6 ten przecinek też nie przejdzie jak już to kropka)
    out.textContent =
      `Number("${txt}") → ${v}\n` +
      `Czy liczba? ${isNaN(v) ? 'Nie (NaN)' : 'Tak'}`;
  });

  clear.addEventListener('click', function () {
    out.textContent = '';
  });
})();
