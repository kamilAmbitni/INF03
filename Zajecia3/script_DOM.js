"use strict";

/* ================================
   getElementById — po ID (1 element)
   ================================ */
function pobierzImie() {
  const input = document.getElementById("imie-id"); // znajdź <input id="imie-id">
  const wynik = document.getElementById("wynik-id"); // znajdź <p id="wynik-id">
  // zabezpieczenie: gdyby elementów nie było w HTML — nic nie rób
  if (!input || !wynik) return;

  const imie = input.value; // odczytaj tekst wpisany w input
  wynik.innerHTML = "Wpisane imię: " + imie; // pokaż wynik (innerHTML, bo czasem używamy <br>)
}

/* ===========================================
   querySelector — pierwszy pasujący (CSS)
   =========================================== */
function zmienKolor() {
  // .tekst-qsel — selektor CSS (klasa). querySelector() zwróci PIERWSZY pasujący element.
  const p = document.querySelector(".tekst-qsel");
  if (!p) return;
  p.style.color = "blue"; // ustaw styl tylko temu pierwszemu akapitowi
}

/* ===========================================
   querySelectorAll — wszystkie pasujące (CSS)
   =========================================== */
function pokolorujLinkiStopki() {
  // Wszystkie linki <a> wewnątrz #stopka-demo
  const linki = document.querySelectorAll("#stopka-demo a"); // NodeList (działa .forEach)
  linki.forEach(function (link) {
    // funkcja anonimowa dla każdego linku
    link.style.color = "gray"; // ustaw kolor tekstu na szary
  });
}

/* ===========================================
   getElementsByTagName — po nazwie tagu (kolekcja)
   =========================================== */
function pokazWszystkieInputy() {
  const sekcja = document.getElementById("sekcja-tag");
  const inputy = sekcja.getElementsByTagName("input"); // tylko w obrębie sekcji bez tego pobierze nam wszystkie 10 inputów z tego pliku
  const wynik = document.getElementById("wynik-tag");
  if (!wynik) return;

  let tekst = "Liczba pól input: " + inputy.length + "<br>";
  for (let i = 0; i < inputy.length; i++) {
    tekst += "Zawartość pola nr " + (i + 1) + ": " + inputy[i].value + "<br>";
  }
  wynik.innerHTML = tekst;
}

function pokazNazwisko() {
  const sekcja = document.getElementById("sekcja-tag");
  const inputy = sekcja.getElementsByTagName("input"); // tylko ta trójka
  const wynik = document.getElementById("wynik-tag");
  if (!wynik) return;

  const nazwisko = inputy[1] ? inputy[1].value : "";
  wynik.innerHTML = "Nazwisko: " + nazwisko;
}

/* ===========================================
   getElementsByClassName — po klasie (kolekcja)
   =========================================== */
function pokazWszystkie() {
  const pola = document.getElementsByClassName("pole"); // HTMLCollection elementów z klasą "pole"
  const wynik = document.getElementById("wynik-klasa");
  if (!wynik) return;

  let tekst = "";
  for (let i = 0; i < pola.length; i++) {
    tekst += "Zawartość pola nr " + (i + 1) + ": " + pola[i].value + "<br>";
  }
  wynik.innerHTML = tekst;
}

function pokazDrugi() {
  const pola = document.getElementsByClassName("pole"); // wszystkie z klasą "pole"
  const wynik = document.getElementById("wynik-klasa");
  if (!wynik) return;

  // Drugi element z tej kolekcji (indeks 1) — zgodnie z przykładem
  let nazwisko = pola[1] ? pola[1].value : "";
// Alternatywnie, bardziej rozbudowana wersja:
//   let nazwisko = "";
//   const drugiePole = pola[1]; // DRUGI element (może być undefined)

//   if (drugiePole) {
//     // jeśli istnieje
//     nazwisko = drugiePole.value; // przypisz jego wartość
//   } else {
//     nazwisko = ""; // w przeciwnym razie pozostań przy pustym stringu
//   }

  wynik.innerHTML = "Nazwisko: " + nazwisko;
}

/* ===========================================
   document.forms — formularz i kontrolki po name
   =========================================== */
function pokazDane() {
  const form = document.forms["logowanie"]; // znajdź formularz po name="logowanie"
  const wynik = document.getElementById("wynik-form");
  if (!form || !wynik) return;

  // form['login'] — pobiera kontrolkę formularza po atrybucie name="login"
  // ? ... : ...  — operator warunkowy (ternary):
  //                jeśli kontrolka istnieje → weź jej .value,
  //                w przeciwnym razie → użyj pustego łańcucha '' (żeby uniknąć błędu)
  const login = form["login"] ? form["login"].value : "";

  // Analogicznie dla pola hasła (name="haslo")
  const haslo = form["haslo"] ? form["haslo"].value : "";

  wynik.innerHTML = "Login: " + login + "<br>Hasło: " + haslo;
}
