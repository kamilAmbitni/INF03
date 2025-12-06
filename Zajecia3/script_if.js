'use strict';

/*
========================================
= vs == vs === (krótko)
----------------------------------------
=   → przypisanie:   x = 5;
==  → porównanie "luźne" z konwersją typów:
       "5" == 5  → true
=== → porównanie "ścisłe" BEZ konwersji:
       "5" === 5 → false (bo string !== number)
========================================
*/

(function setupComparisons() {
  const aEl   = document.getElementById('eq-a');
  const bEl   = document.getElementById('eq-b');
  const asNum = document.getElementById('eq-as-number');
  const btn   = document.getElementById('btn-compare');
  const out   = document.getElementById('out-eq');
  if (!aEl || !bEl || !asNum || !btn || !out) return;

  btn.addEventListener('click', function () {
    // 1) pobierz surowe wartości (stringi z inputów)
    let a = aEl.value;
    let b = bEl.value;

    // 2) jeśli zaznaczono "porównaj jako liczby", zrób Number(...)
    if (asNum.checked) {
      a = Number(a);   // "5" → 5, "abc" → NaN
      b = Number(b);
    }

    // 3) porównania
    const luźne  = (a == b);   // może konwertować typ
    const ścisłe = (a === b);  // nie konwertuje typu

    const wynik = [
            `A: ${String(a)} (typ: ${typeof a})`,
            `B: ${String(b)} (typ: ${typeof b})`,
            `==  : ${luźne}`,
            `=== : ${ścisłe}`
    ].join('\n');

    out.textContent = wynik;
    console.log(wynik);
    alert(wynik);
  });
})();

/* ==========================
   1) if/else — PIN
   ========================== */
(function setupPIN() {
  const PIN_WZORCOWY = '1945'; // jako string, żeby porównywać string do string
  const pin   = document.getElementById('pin');
  const btn   = document.getElementById('btn-pin');
  const out   = document.getElementById('out-pin');
  if (!pin || !btn || !out) return;

  btn.addEventListener('click', function () {
    const wpisany = pin.value.trim();

    // Użyj === (ścisłe porównanie), by uniknąć „magicznych” konwersji typów
    if (wpisany === PIN_WZORCOWY) {
      out.textContent = 'Poprawny PIN. Dostęp uzyskany.';
      alert('Poprawny PIN. Dostęp uzyskany.');
    } else {
      out.textContent = 'Niepoprawny PIN! Spróbuj ponownie.';
      alert('Niepoprawny PIN!');
    }

    // UWAGA (dla nauki): to byłby błąd — przypisanie zamiast porównania!
    // if (wpisany = PIN_WZORCOWY) { ... }  //  nigdy tak!
  });
})();

/* ==========================
   2) OR (||) — puste pola
   ========================== */
(function setupOR() {
  const aEl = document.getElementById('liczba1');
  const bEl = document.getElementById('liczba2');
  const btn = document.getElementById('btn-or');
  const out = document.getElementById('out-or');
  if (!aEl || !bEl || !btn || !out) return;

  btn.addEventListener('click', function () {
    const a = aEl.value.trim();
    const b = bEl.value.trim();

    // Jeśli przynajmniej jedno pole puste → komunikat
    if (a === '' || b === '') {
      out.textContent = 'Proszę uzupełnić obie liczby! (OR zadziałał)';
      alert('Proszę uzupełnić obie liczby!');
      return;
    }

    out.textContent = 'OK — oba pola wypełnione.';
  });
})();

/* ==========================
   3) AND (&&) — logowanie
   ========================== */
(function setupAND() {
  const login = document.getElementById('login');
  const haslo = document.getElementById('haslo');
  const btn   = document.getElementById('btn-and');
  const out   = document.getElementById('out-and');
  if (!login || !haslo || !btn || !out) return;

  const POPRAWNY_LOGIN = 'admin';
  const POPRAWNE_HASLO = 'tajne';

  btn.addEventListener('click', function () {
    const l = login.value;
    const h = haslo.value;

    // AND: oba warunki muszą być true
    if (l === POPRAWNY_LOGIN && h === POPRAWNE_HASLO) {
      out.textContent = 'Poprawne logowanie. Witamy!';
      alert('Poprawne logowanie.');
    } else {
      out.textContent = 'Niepoprawne dane logowania.';
      alert('Niepoprawne dane logowania.');
    }
  });
})();

/* ==========================================
   4) Priorytet: && ważniejszy niż ||
   ========================================== */
(function setupPriority() {
  const imie = document.getElementById('p-imie');
  const wiek = document.getElementById('p-wiek');
  const btnA = document.getElementById('btn-bez-nawiasow');
  const btnB = document.getElementById('btn-z-nawiasami');
  const out  = document.getElementById('out-priorytet');
  if (!imie || !wiek || !btnA || !btnB || !out) return;

  btnA.addEventListener('click', function () {
    const name = imie.value.trim();
    const age  = Number(wiek.value);

    // Bez nawiasów: AND ma pierwszeństwo!
    // imie == "Marek" || (imie == "Adam" && wiek >= 18)
    const ok = (name === 'Marek') || (name === 'Adam' && age >= 18);

    out.textContent = `BEZ nawiasów → wynik: ${ok}`;
    alert(`BEZ nawiasów → wynik: ${ok}`);
  });

  btnB.addEventListener('click', function () {
    const name = imie.value.trim();
    const age  = Number(wiek.value);

    // Z nawiasami: (imie == "Marek" || imie == "Adam") && wiek >= 18
    const ok = ((name === 'Marek') || (name === 'Adam')) && (age >= 18);

    out.textContent = `Z nawiasami → wynik: ${ok}`;
    alert(`Z nawiasami → wynik: ${ok}`);
  });
})();

/* ==========================================
   5) NOT (!) + isNaN — czy to liczba?
   ========================================== */
(function setupNOT() {
  const input = document.getElementById('liczba-tekst');
  const btn   = document.getElementById('btn-not');
  const out   = document.getElementById('out-not');
  if (!input || !btn || !out) return;

  btn.addEventListener('click', function () {
    const value  = input.value;
    const number = Number(value);

    // isNaN(x) → true gdy x NIE jest liczbą
    // !isNaN(x) → true gdy x JEST liczbą
    if (!isNaN(number)) {
      out.textContent = `To jest poprawna liczba: ${number}`;
    } else {
      out.textContent = 'To nie jest poprawna liczba.';
    }
  });
})();



/* ==========================================
   6) Operator trójargumentowy (ternary)
   ========================================== */
(function setupTernary() {
  const wiek = document.getElementById('t-wiek');
  const btn  = document.getElementById('btn-ternary');
  const out  = document.getElementById('out-ternary');
  if (!wiek || !btn || !out) return;

  btn.addEventListener('click', function () {
    const age = Number(wiek.value);
    // warunek ? wartość_gdy_true : wartość_gdy_false
    const komunikat = (age >= 18) ? 'Pełnoletni' : 'Niepełnoletni';
    out.textContent = komunikat;
    alert(komunikat);
  });
})();

/* ==========================================
   7) else if — więcej przypadków
   ========================================== */
(function setupElseIf() {
  const wiek = document.getElementById('e-wiek');
  const btn  = document.getElementById('btn-elseif');
  const out  = document.getElementById('out-elseif');
  if (!wiek || !btn || !out) return;

  btn.addEventListener('click', function () {
    const age = Number(wiek.value);

    if (age >= 35) {
      out.textContent = 'Możesz zostać prezydentem i jesteś osobą pełnoletnią.';
    } else if (age >= 18) {
      out.textContent = 'Jesteś pełnoletni, ale nie możesz jeszcze zostać prezydentem.';
    } else {
      out.textContent = 'Nie jesteś pełnoletni i nie możesz zostać prezydentem.';
    }

    
  });
})();
