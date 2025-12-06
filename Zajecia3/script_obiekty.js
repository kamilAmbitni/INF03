'use strict';

/* =========================================================
   1) OKNA DIALOGOWE: alert / prompt / confirm
   ========================================================= */

// Funkcja globalna (MUSI być globalna, bo wywołujemy ją z HTML przez onclick="return potwierdzReset();")
// Zwracamy true (OK) lub false (Anuluj). return sprawi, że reset formularza się wykona lub nie.
function potwierdzReset() {
  return confirm('Czy na pewno chcesz wyczyścić formularz?');
}

// Po załadowaniu pliku HTML ten skrypt się wykona (bo <script> jest na końcu <body>).
// Możemy od razu pobrać uchwyty elementów i podpinać zdarzenia.

const outDlg = document.getElementById('out-dlg');            // <pre> na wyniki dla sekcji dialogów.
const btnAlert = document.getElementById('btn-alert');        // Przycisk: pokaż alert().
const btnPrompt = document.getElementById('btn-prompt');      // Przycisk: prompt() zapyta o imię.
const btnResetJS = document.getElementById('btn-reset-js');   // Przycisk: reset formularza programowo.

if (btnAlert) {
  btnAlert.addEventListener('click', function () {
    // alert — pokazuje proste okno z komunikatem
    alert('Witaj świecie!');
    outDlg.textContent = 'Pokazano alert("Witaj świecie!")';
  });
}

if (btnPrompt) {
  btnPrompt.addEventListener('click', function () {
    // prompt — pyta o wartość (tekst). Zwraca string albo null (gdy Anuluj).
    const imie = prompt('Jak masz na imię?');
    if (imie === null) {
      outDlg.textContent = 'Użytkownik kliknął Anuluj.';
    } else {
      outDlg.textContent = 'Witaj, ' + imie + '!';
    }
  });
}

if (btnResetJS) {
  btnResetJS.addEventListener('click', function () {
    // Programowe czyszczenie formularza: form.reset()
    const form = document.getElementById('formularz');
    form.reset();
    outDlg.textContent = 'Formularz wyczyszczony programowo (form.reset()).';
  });
}

/* =========================================================
   2) OBIEKT Math — przydatne metody
   ========================================================= */

const outMath = document.getElementById('out-math');          // <pre> na wyniki z Math.
const btnMathShow = document.getElementById('btn-math-show'); // Pokaż wyniki wielu metod.
const inpLiczba = document.getElementById('liczba-math');     // Pole z liczbą, np. 4.6.

if (btnMathShow) {
  btnMathShow.addEventListener('click', function () {
    // Pobieramy liczbę z inputa (string → number)
    const x = Number(inpLiczba.value); // Number() — konwersja tekstu na liczbę

    // Proste metody matematyczne:
    const round = Math.round(x);   // Zaokrąglenie do najbliższej całkowitej
    const floor = Math.floor(x);   // Zaokrąglenie w dół
    const ceil  = Math.ceil(x);    // Zaokrąglenie w górę
    const abs   = Math.abs(x);     // Wartość bezwzględna

    // Dodatkowe przykłady:
    const sqrt25 = Math.sqrt(25);  // Pierwiastek kwadratowy z 25
    const pow23  = Math.pow(2, 3); // 2^3 = 8
    const maxEx  = Math.max(3, 9, 1); // Największa z podanych
    const minEx  = Math.min(3, 9, 1); // Najmniejsza z podanych
    const trunc  = Math.trunc(x);  // Ucięcie części dziesiętnej (bez zaokrąglania)
    const sign   = Math.sign(x);   // Znak liczby: -1 / 0 / 1 math.sign(-10) = -1, math.sign(0)=0, math.sign(10)=1
    const cbrt27 = Math.cbrt(27);  // Pierwiastek trzeciego stopnia
    const lnE    = Math.log(Math.E); // log_e(e) = 1
    const exp1   = Math.exp(1);    // e^1 ≈ 2.71828 math.exp(x) = e^x

    outMath.textContent =
      `x = ${x}
Math.round(x)  = ${round}
Math.floor(x)  = ${floor}
Math.ceil(x)   = ${ceil}
Math.abs(x)    = ${abs}
Math.trunc(x)  = ${trunc}
Math.sign(x)   = ${sign}

Dodatki:
Math.sqrt(25)  = ${sqrt25}
Math.pow(2, 3) = ${pow23}
Math.max(3,9,1)= ${maxEx}
Math.min(3,9,1)= ${minEx}
Math.cbrt(27)  = ${cbrt27}
Math.log(e)    = ${lnE}
Math.exp(1)    = ${exp1}`;
  });
}

// Trygonometria: UWAGA — radiany, nie stopnie!
const inpDeg = document.getElementById('deg');     // Pole z kątem w stopniach.
const btnSin = document.getElementById('btn-sin'); // Przycisk licz sinusa.

if (btnSin) {
  btnSin.addEventListener('click', function () {
    const deg = Number(inpDeg.value);        // stopnie z inputa
    const rad = deg * Math.PI / 180;         // zamiana stopni na radiany
    const s = Math.sin(rad);                 // sinus kąta w radianach
    outMath.textContent = `Kąt: ${deg}° = ${rad.toFixed(6)} rad 
sin(${deg}°) = ${s}`; // toFixed(6) — 6 miejsc po przecinku
  });
}

/* =========================================================
   3) Math.random() — losowania
   ========================================================= */

const outRand = document.getElementById('out-random'); // <pre> na wyniki losowań.

// 0..9 (całkowita)
const btnR0n = document.getElementById('btn-rand-0n');
if (btnR0n) {
  btnR0n.addEventListener('click', function () {
    // Math.random() → [0,1)  → *10 → [0,10) → floor → 0..9
    const n = Math.floor(Math.random() * 10);
    outRand.textContent = `Los 0..9: ${n}`;
  });
}

// a..b (całkowita, włącznie z b)
const aInt = document.getElementById('r-a');
const bInt = document.getElementById('r-b');
const btnRaB = document.getElementById('btn-rand-a-b');
if (btnRaB) {
  btnRaB.addEventListener('click', function () {
    const a = Number(aInt.value);
    const b = Number(bInt.value);
    // Wzór: floor( random() * (b - a + 1) ) + a
    const n = Math.floor(Math.random() * (b - a + 1)) + a;
    outRand.textContent = `Los całkowita ${a}..${b}: ${n}`;
  });
}

// a..b (zmiennoprzecinkowa, bez b)
const aF = document.getElementById('rf-a');
const bF = document.getElementById('rf-b');
const btnRF = document.getElementById('btn-rand-float');
if (btnRF) {
  btnRF.addEventListener('click', function () {
    const a = Number(aF.value);
    const b = Number(bF.value);
    // Wzór: random() * (b - a) + a
    const x = Math.random() * (b - a) + a;
    outRand.textContent = `Los zmienno. ${a}..${b} (bez ${b}): ${x}`;
  });
}

// PIN 4-cyfrowy (1000..9999)
const btnPin = document.getElementById('btn-pin');
if (btnPin) {
  btnPin.addEventListener('click', function () {
    // Wzór: floor(1000 + random() * 9000) → 1000..9999
    const pin = Math.floor(1000 + Math.random() * 9000);
    outRand.textContent = `PIN: ${pin}`;
  });
}

// Rzut kostką (1..6)
const btnDice = document.getElementById('btn-dice');
if (btnDice) {
  btnDice.addEventListener('click', function () {
    const eye = Math.floor(Math.random() * 6) + 1;
    outRand.textContent = `Kostka: ${eye}`;
  });
}

// Losowy element z tablicy (kolory)
const btnColor = document.getElementById('btn-color');
if (btnColor) {
  btnColor.addEventListener('click', function () {
    const kolory = ['czerwony', 'zielony', 'niebieski'];
    const idx = Math.floor(Math.random() * kolory.length); // losowy indeks 0..length-1
    const kolor = kolory[idx];
    outRand.textContent = `Losowy kolor: ${kolor} (indeks ${idx})`;
  });
}

/* =========================================================
   4) Obiekt Date — praca z datą i czasem
   ========================================================= */

const outDate = document.getElementById('out-date');

// Bieżąca data/czas + wybrane gettery
const btnNow = document.getElementById('btn-now');
if (btnNow) {
  btnNow.addEventListener('click', function () {
    const d = new Date(); // aktualna data/czas
    // getMonth() zwraca 0..11 (styczeń=0), więc dodajemy 1 do wyświetlania
    outDate.textContent =
      `Teraz: ${d.toString()}

Gettery:
Rok:     ${d.getFullYear()}
Miesiąc: ${d.getMonth() + 1}  (uwaga: styczeń to 0)
Dzień:   ${d.getDate()}
Dzień tygodnia (0=nd): ${d.getDay()}
Godzina: ${d.getHours()}
Minuty:  ${d.getMinutes()}
Sekundy: ${d.getSeconds()}`;
  });
}

// toLocaleDateString — format typu "30.04.2025" (zależny od języka/przeglądarki)
const btnLocale = document.getElementById('btn-locale');
if (btnLocale) {
  btnLocale.addEventListener('click', function () {
    const d = new Date();
    outDate.textContent = `toLocaleDateString(): ${d.toLocaleDateString()}`;
  });
}

// Wiek z roku urodzenia
const inpRok = document.getElementById('rok-ur');
const btnAge = document.getElementById('btn-age');
if (btnAge) {
  btnAge.addEventListener('click', function () {
    const rok = Number(inpRok.value);
    const teraz = new Date();
    const wiek = teraz.getFullYear() - rok; // proste obliczenie wieku w latach
    outDate.textContent = `Rok urodzenia: ${rok}\nWiek: ${wiek} lat`;
  });
}

// Benchmark — prosty pomiar czasu wykonania (ms) przez różnicę getTime()
const btnBench = document.getElementById('btn-benchmark');
if (btnBench) {
  btnBench.addEventListener('click', function () {
    const start = new Date();                 // czas start
    // Prosta pętla tylko po to, żeby "zajęła" chwilę czasu
    let s = 0;
    for (let i = 0; i < 1_000_00; i++) {      // 100 000 iteracji
      s += i;
    }
    const koniec = new Date();                // czas koniec
    const ms = koniec.getTime() - start.getTime(); // różnica w milisekundach
    outDate.textContent = `Suma kontrolna: ${s}\nCzas wykonania pętli: ${ms} ms`;
  });
}

// Settery — ustaw konkretną datę 01.01.2000
const btnSet2000 = document.getElementById('btn-set-2000');
if (btnSet2000) {
  btnSet2000.addEventListener('click', function () {
    const d = new Date(); // bieżąca
    d.setFullYear(2000);  // ustaw rok
    d.setMonth(0);        // 0 = styczeń
    d.setDate(1);         // 1 = pierwszy dzień miesiąca
    outDate.textContent = `Ustawiono datę setterami na: ${d.toLocaleDateString()}`;
  });
}

/* =========================================================
   5) console — log, table, error (debugowanie)
   ========================================================= */

const btnCLog   = document.getElementById('btn-console-log');
const btnCTable = document.getElementById('btn-console-table');
const btnCError = document.getElementById('btn-console-error');

if (btnCLog) {
  btnCLog.addEventListener('click', function () {
    console.log('To jest zwykły log do konsoli.');
    alert('Zajrzyj do konsoli (F12 → Console): console.log() wypisano.');
  });
}

if (btnCTable) {
  btnCTable.addEventListener('click', function () {
    // console.table — ładna tabelka z tablicy obiektów (do debugowania)
    const osoby = [
      { imie: 'Ania', wiek: 18 },
      { imie: 'Bartek', wiek: 21 },
      { imie: 'Celina', wiek: 19 },
    ];
    console.table(osoby);
    alert('Sprawdź konsolę (F12 → Console). Użyliśmy console.table(osoby).');
  });
}

if (btnCError) {
  btnCError.addEventListener('click', function () {
    console.error('To jest przykładowy komunikat błędu (console.error).');
    alert('Sprawdź konsolę (F12 → Console): console.error() wypisano.');
  });
}
