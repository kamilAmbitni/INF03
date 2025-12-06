'use strict'; // tryb ścisły: wyłapuje typowe błędy (np. użycie niezadeklarowanej zmiennej)

// 1) Anonimowa funkcja przypisana do zmiennej (nie ma nazwy po 'function')
const powiedzCzesc = function () {          // nazwa „pośrednia” to nazwa zmiennej: powiedzCzesc
  alert('Cześć!');                          // po wywołaniu pokaże okienko z tekstem
};

(function () {                               // IIFE: uruchamia się natychmiast po wczytaniu pliku
  // uruchomienie powyższej funkcji po kliknięciu
  const btnCzesc = document.getElementById('btn-czesc'); // łapiemy przycisk
  if (btnCzesc)                                          // jeśli element jest w DOM…
    btnCzesc.addEventListener('click', function () {     // …to po kliknięciu
      powiedzCzesc();                                    // wywołaj anonimową funkcję z zmiennej
    });

  // 2) Anonimowa funkcja jako handler — wersja onclick (podmiana właściwości)
  const btnInline = document.getElementById('przycisk-inline'); // drugi przycisk
  if (btnInline) {
    btnInline.onclick = function () {                   // przypisanie do .onclick (1 handler; nadpisuje poprzedni)
      alert('Kliknięto przycisk! (onclick)');           // prosty efekt po kliknięciu
    };
  }

  // 2b) To samo, ale profesjonalniej — addEventListener (można dodać wiele handlerów)
  const btnAdd = document.getElementById('przycisk-add'); // trzeci przycisk
  if (btnAdd) {
    btnAdd.addEventListener('click', function () {       // dodajemy „słuchacza” zdarzenia
      alert('Kliknięto przycisk! (addEventListener)');   // prosty efekt po kliknięciu
    });
  }

  // 3) forEach z funkcją anonimową — wypisanie elementów do <ul>
  const lista = document.getElementById('lista-liczb');  // <ul>, do którego wstawimy <li>
  if (lista) {
    const liczby = [1, 2, 3, 4, 5];                      // przykładowa tablica
    liczby.forEach(function (liczba) {                   // anonimowa function(liczba) przekazana do forEach
      const li = document.createElement('li');           // utwórz nowy element listy
      li.textContent = 'Liczba: ' + liczba;              // ustaw treść
      lista.appendChild(li);                             // dołącz <li> do <ul>
    });
  }

  // 4) Funkcja strzałkowa — krótszy zapis funkcji zwracającej powitanie
  // klasycznie: function przywitaj(imie) { return "Witaj, " + imie + "!"; }
  const przywitaj = (imie) => "Witaj, " + imie + "!";    // arrow: skrót bez klamerek i bez 'return'
  const btnHello = document.getElementById('btn-przywitaj-arrow'); // przycisk do użycia funkcji
  const inputImie = document.getElementById('imie');              // pole tekstowe z imieniem
  if (btnHello && inputImie) {
    btnHello.addEventListener('click', function () {     // po kliknięciu
      alert(przywitaj(inputImie.value || 'Gość'));       // pokaż wynik funkcji (z domyślnym „Gość”)
    });
  }

  // 5) Arrow jako handler — zmiana tła strony
  const btnBg = document.getElementById('btn-arrow-bg'); // przycisk do zmiany tła
  if (btnBg) {
    btnBg.addEventListener('click', () => {              // handler jako funkcja strzałkowa
      document.body.style.backgroundColor = 'lightblue'; // ustaw tło na lightblue
    });
  }
})(); // koniec IIFE — nawiasy na końcu „odpalają” funkcję od razu
