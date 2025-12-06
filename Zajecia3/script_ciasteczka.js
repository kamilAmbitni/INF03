'use strict';

/* =====================================
   1) Tworzenie ciasteczka: odwiedzono=1
   ===================================== */
function ustawCiasteczko() {
  // Przypiszemy tekst do document.cookie → to tworzy/ustawia ciasteczko.
  // - nazwa: odwiedzono
  // - wartość: 1
  // - expires: data wygaśnięcia (GMT)
  // - path=/ : ciasteczko widoczne w całym serwisie
  document.cookie = 'odwiedzono=1; expires=Fri, 31 Dec 2025 23:59:59 GMT; path=/';

  // Pokaż informację w <div id="wynik">
  document.getElementById('wynik').innerHTML = 'Ciasteczko zostało zapisane!';
}

/* ===================================================
   2) Pomocniczo: pobieranie wartości ciasteczka po nazwie
      (prosta wersja z Twoich materiałów)
   =================================================== */
function pobierzCiasteczko(nazwa) {
  // document.cookie zwraca wszystkie ciasteczka jako jeden tekst,
  // np. "odwiedzono=1; foo=bar"
  let ciasteczka = document.cookie.split('; '); // rozdzielamy po "; "
  for (let i = 0; i < ciasteczka.length; i++) {
    let para = ciasteczka[i].split('='); // ["nazwa","wartość"]
    if (para[0] === nazwa) {
      return para[1]; // zwróć wartość, jeśli nazwa się zgadza
    }
  }
  return null; // nie znaleziono takiej nazwy
}

/* ===================================================
   3) Odczyt: sprawdź czy już odwiedzono (odwiedzono=1)
   =================================================== */
function pokazCiasteczko() {
  let odwiedzono = pobierzCiasteczko('odwiedzono');

  // Jeśli wartość jest "1" → to nie jest pierwsza wizyta.
  // W innym wypadku: pierwsza wizyta lub cookie wygasło.
  let komunikat =
    odwiedzono === '1'
      ? 'To nie jest Twoja pierwsza wizyta!'
      : 'Wygląda na to, że jesteś tu pierwszy raz lub ciasteczko wygasło.';

  document.getElementById('wynik').innerHTML = komunikat;
}

/* ==========================================
   4) Usuwanie ciasteczka (data w przeszłości)
   ========================================== */
function usunCiasteczko() {
  // Ustawiamy to samo ciasteczko, ale z datą, która już minęła.
  // Przeglądarka je usunie.
  document.cookie = 'odwiedzono=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/';

  document.getElementById('wynik').innerHTML = 'Ciasteczko zostało usunięte.';
}

/* ==================================================
   5) Tymczasowe ciasteczko (np. ważne 10 sekund)
   ================================================== */
function ustawTymczasoweCiasteczko() {
  // Tworzymy datę za 10 sekund od teraz.
  let teraz = new Date();
  teraz.setSeconds(teraz.getSeconds() + 10);

  // Ustawiamy ciasteczko odwiedzono=1, które wygaśnie za 10 sek.
  document.cookie = 'odwiedzono=1; expires=' + teraz.toUTCString() + '; path=/';

  document.getElementById('wynik').innerHTML =
    'Ustawiono tymczasowe ciasteczko (10 s).';
}
