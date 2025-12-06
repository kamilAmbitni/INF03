'use strict';

/* ======================================================
   1) onclick w HTML (atrybut) — funkcja globalna
   ====================================================== */
// Uwaga: to jest funkcja, której używa atrybut onclick w HTML.
// W HTML masz: <button onclick="pokazKomunikat()">...</button>
function pokazKomunikat() {
  alert('Przycisk został kliknięty! (onclick w HTML)');
}

/* ======================================================
   2) onclick w JS (element.onclick = ...) + nadpisywanie
   ====================================================== */
(function setupOnclickProperty() {
  const btnProp = document.getElementById('przycisk-onclick-prop');
  if (btnProp) {
    // Przypiszemy handler w JS (bez atrybutu w HTML)
    btnProp.onclick = function () { // anonimowa function jako handler
      alert('Klik (element.onclick w JS)');
    };
  }

  const btnOverwrite = document.getElementById('przycisk-overwrite');
  if (btnOverwrite) {
    // Najpierw 1. funkcja…
    btnOverwrite.onclick = function () {
      alert('Kliknięcie — funkcja nr 1');
    };
    // …a teraz nadpisujemy ją 2. funkcją:
    btnOverwrite.onclick = function () {
      alert('Kliknięcie — funkcja N R 2 (nadpisuje #1)');
    };
    // Po kliknięciu zobaczysz TYLKO nr 2 — bo .onclick trzyma zawsze jeden handler
  }
})();

/* ======================================================
   3) addEventListener — funkcja nazwana (bez nawiasów)
   ====================================================== */
// Definiujemy „klasyczną” funkcję nazwaną:
function pokazKomunikatNamed() {
  alert('Kliknięto przycisk! (addEventListener + nazwana funkcja)');
}
(function setupAddNamed() {
  const btn = document.getElementById('przycisk-add-named');
  if (btn) {
    // Uwaga: przekazujemy REFERENCJĘ do funkcji (bez „()”)
    btn.addEventListener('click', pokazKomunikatNamed);
  }
})();

/* ======================================================
   4) addEventListener — wiele handlerów dla jednego zdarzenia
   ====================================================== */
function pokazAlert() {
  alert('Klik! (handler #1)');
}
function zmienKolorMulti() {
  const b = document.getElementById('przycisk-add-multi');
  if (b) b.style.backgroundColor = 'lightgreen';
}
(function setupAddMulti() {
  const btn = document.getElementById('przycisk-add-multi');
  if (btn) {
    btn.addEventListener('click', pokazAlert);     // 1. reakcja
    btn.addEventListener('click', zmienKolorMulti); // 2. reakcja
    // Obie zadziałają — addEventListener pamięta wiele reakcji
  }
})();

/* ======================================================
   5) addEventListener — funkcja anonimowa
   ====================================================== */
(function setupAddAnon() {
  const btn = document.getElementById('przycisk-add-anon');
  if (btn) {
    btn.addEventListener('click', function () { // anonimowa function
      alert('Kliknięto przycisk! (anonimowa function) ');
    });
  }
})();

/* ======================================================
   6) addEventListener — funkcja strzałkowa
   ====================================================== */
(function setupAddArrow() {
  const btn = document.getElementById('przycisk-add-arrow');
  if (btn) {
    btn.addEventListener('click', (e) => { // arrow
      // W strzałce nie używamy 'this' — bierzemy e.currentTarget:
      e.currentTarget.textContent = 'Zmieniono (arrow handler)';
      e.currentTarget.style.backgroundColor = 'lightblue';
    });
  }
})();

/* ======================================================
   7) removeEventListener — funkcja nazwana
   ====================================================== */
// Funkcja DO podpięcia i POTEM do usunięcia:
function pokazKomunikatRemove() {
  alert('Klik! (funkcja nazwana — będzie można usunąć)');
}
(function setupRemoveNamed() {
  const btn = document.getElementById('przycisk-remove');
  const usun = document.getElementById('usun-remove');
  if (btn)  btn.addEventListener('click', pokazKomunikatRemove);
  if (usun) usun.addEventListener('click', function () {
    // Musimy wskazać DOKŁADNIE tę samą funkcję, którą wcześniej podpięliśmy
    const b = document.getElementById('przycisk-remove');
    if (b) {
      b.removeEventListener('click', pokazKomunikatRemove);
      usun.textContent = 'Usunięto obsługę (nazwana)';
    }
  });
})();

/* ======================================================
   8) removeEventListener — funkcja anonimowa w zmiennej
   ====================================================== */
// Zapisz anonimową function do zmiennej, żeby mieć do niej referencję:
const reakcjaKlik = function () {
  alert('Klik! (anonimowa w zmiennej — da się usunąć)');
};
(function setupRemoveAnon() {
  const btn = document.getElementById('przycisk-remove-anon');
  const usun = document.getElementById('usun-remove-anon');
  if (btn)  btn.addEventListener('click', reakcjaKlik);
  if (usun) usun.addEventListener('click', function () {
    const b = document.getElementById('przycisk-remove-anon');
    if (b) {
      b.removeEventListener('click', reakcjaKlik);
      usun.textContent = 'Usunięto anon.';
    }
  });
})();

/* ======================================================
   9) removeEventListener — funkcja strzałkowa w zmiennej
   ====================================================== */
const klikFunkcja = () => {
  alert('Klik! (arrow w zmiennej — da się usunąć)');
};
(function setupRemoveArrow() {
  const btn = document.getElementById('przycisk-remove-arrow');
  const usun = document.getElementById('usun-remove-arrow');
  if (btn)  btn.addEventListener('click', klikFunkcja);
  if (usun) usun.addEventListener('click', () => {
    const b = document.getElementById('przycisk-remove-arrow');
    if (b) {
      b.removeEventListener('click', klikFunkcja);
      usun.textContent = 'Usunięto arrow';
    }
  });
})();



/* 
==========================================
NOTATKA: function declaration vs function expression
==========================================

1) Deklaracja funkcji (function declaration)
--------------------------------------------
Składnia:
  function pokazKomunikatRemove() { ... }

• Hoisting: można wywołać PRZED miejscem deklaracji.
    pokazKomunikatRemove(); // działa
    function pokazKomunikatRemove() {}

• Ma stałą nazwę (przydatne w stack trace).
• Dobrze sprawdza się jako „narzędzie” dostępne w całym pliku.
• Do removeEventListener przekazujesz po prostu nazwę:
    btn.addEventListener('click', pokazKomunikatRemove);
    btn.removeEventListener('click', pokazKomunikatRemove);

2) Wyrażenie funkcyjne (function expression) przypisane do zmiennej
-------------------------------------------------------------------
Składnia:
  const reakcjaKlik = function () { ... };

• Brak hoistingu inicjalizacji: NIE można wywołać PRZED tą linią.
    reakcjaKlik(); //  ReferenceError (przed definicją)
    const reakcjaKlik = function () {};

• Funkcja jest „trzymana” w zmiennej; przy const nie można jej później podmienić.
• Silnik często nada nazwę z nazwy zmiennej (ułatwia debug).
• removeEventListener działa, o ile przekażesz TĘ SAMĄ zmienną:
    btn.addEventListener('click', reakcjaKlik);
    btn.removeEventListener('click', reakcjaKlik);

// ARROW w zmiennej — OK
const klikFunkcja = () => alert('Klik!');
btn.addEventListener('click', klikFunkcja);
btn.removeEventListener('click', klikFunkcja); // musi być TA SAMA referencja

// function expression — też OK
const reakcjaKlik = function () { alert('Klik!'); };
btn.addEventListener('click', reakcjaKlik);
btn.removeEventListener('click', reakcjaKlik);


// ZWYKŁA function — 'this' to kliknięty przycisk
btn.addEventListener('click', function () {
  this.textContent = 'OK';     // działa
});

// ARROW — używaj e.currentTarget
btn.addEventListener('click', (e) => {
  e.currentTarget.textContent = 'OK';  // 'this' tu NIE zadziała
});

*/

