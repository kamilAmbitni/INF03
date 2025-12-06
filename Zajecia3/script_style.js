'use strict';

/*
  Ten plik pokazuje, jak w JS zmieniać style elementów przez właściwość .style.

  WAŻNE:
  - Wartości stylów to napisy (stringi), np. "red", "24px", "center".
  - Nazwy właściwości CSS z myślnikami zapisujemy w JS w camelCase:
    background-color → backgroundColor
    font-size        → fontSize
    text-align       → textAlign
    border-radius    → borderRadius
*/

// Użyjemy IIFE (funkcja natychmiast wywoływana), aby nie „zaśmiecać” globalnego zakresu.
(function () {

  /* ==========================================================
     1) Zmień kolor i rozmiar tekstu akapitu
     ========================================================== */

  // Łapiemy elementy z HTML po id:
  const pDemo   = document.getElementById('napis');          // <p id="napis">...</p>
  const btnOn   = document.getElementById('btn-zmien-styl'); // przycisk „Zmień styl”
  const btnOff  = document.getElementById('btn-reset-styl'); // przycisk „Resetuj styl”

  // Upewniamy się, że elementy istnieją (gdyby ktoś usunął id w HTML)
  if (pDemo && btnOn && btnOff) {

    // Po kliknięciu: ustaw czerwony kolor i większy rozmiar czcionki
    btnOn.addEventListener('click', function () {
      // W JS używamy camelCase: color, fontSize (nie font-size!)
      pDemo.style.color = 'red';      // kolor tekstu
      pDemo.style.fontSize = '24px';  // rozmiar tekstu (pamiętaj o "px")
      // Możemy ustawić także inne style:
      pDemo.style.textAlign = 'left'; // wyrównanie tekstu
      pDemo.style.fontWeight = 'bold';// pogrubienie
    });

    // Reset stylów: wystarczy ustawić pusty string '', wtedy wraca do CSS bazowego
    btnOff.addEventListener('click', function () {
      pDemo.style.color = '';
      pDemo.style.fontSize = '';
      pDemo.style.textAlign = '';
      pDemo.style.fontWeight = '';
    });
  }

  /* ==========================================================
     2) Warunkowa zmiana stylu pola input
        Zasada:
        - jeśli liczba > 100 → zielone tło
        - inaczej → czerwone tło
     ========================================================== */

  const inNum  = document.getElementById('pole-liczba'); // <input type="number" id="pole-liczba" />
  const btnChk = document.getElementById('btn-sprawdz'); // przycisk „Sprawdź i pokoloruj”

  if (inNum && btnChk) {

    btnChk.addEventListener('click', function () {
      // .value to ZAWSZE tekst; Number(...) robi konwersję na liczbę
      const val = Number(inNum.value);

      // Sprawdzamy, czy to poprawna liczba
      if (Number.isNaN(val)) {
        // Jeśli niepoprawna → ustaw neutralny kolor + podpowiedź
        inNum.style.backgroundColor = 'lightgray';
        inNum.style.color = '#000';
        alert('Podaj poprawną liczbę.');
        return; // zakończ funkcję
      }

      // Warunek z zadania: > 100 → zielone, w przeciwnym razie czerwone
      if (val > 100) {
        inNum.style.backgroundColor = 'lightgreen'; // zielone tło
        inNum.style.color = '#000';                 // czarny tekst, żeby było czytelnie
      } else {
        inNum.style.backgroundColor = 'tomato';     // czerwone tło
        inNum.style.color = '#fff';                 // biały tekst, lepszy kontrast
      }
    });
  }

  /* ==========================================================
     3) Ciemny motyw strony (zmiana stylów na <body>)
        - włącz: ciemne tło + jasny tekst
        - wyłącz: domyślne (pusty string)
     ========================================================== */

  const btnDarkOn  = document.getElementById('btn-dark-on');  // „Włącz ciemny motyw”
  const btnDarkOff = document.getElementById('btn-dark-off'); // „Wyłącz ciemny motyw”

  if (btnDarkOn && btnDarkOff) {

    btnDarkOn.addEventListener('click', function () {
      // Zmieniamy style bezpośrednio na <body>:
      document.body.style.backgroundColor = '#121212'; // ciemne tło
      document.body.style.color = '#eaeaea';           // jasny tekst
    });

    btnDarkOff.addEventListener('click', function () {
      // Reset stylów (wróć do CSS bazowego z <style> w <head>)
      document.body.style.backgroundColor = '';
      document.body.style.color = '';
    });
  }

})();
