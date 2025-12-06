//F12 lub Ctrl + Shift + I → zakładka Console

/* ===================================================*/



let liczby = [2, 4, 6, 8, 10];
let suma = 0;
for (let i = 0; i < liczby.length; i++) {
    sume += liczby[i]; // literówka!
}
alert(suma);


// let liczby = [3, 6, 9, 12];
// let suma = 0;
// for (let i = 0; i < liczby.length; i++) {
//     suma += liczby[i];
//     console.log("Po dodaniu ", liczby[i], "suma wynosi:", suma);
// }

// Przykładowy obiekt w JS
let uczen = {
    imie: "Kamil",
    nazwisko: "Nowak",
    wiek: 18
};
console.log(uczen); // wypisanie obiektu w czytelnej formie



// let liczby = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 18, 19, 20];
// let pierwsze = [];
// function czyPierwsza(n) {
//     if (n < 2) return false;
//     for (let i = 2; i <= Math.sqrt(n); i++) {
//         if (n % i === 0) return false;
//     }
//     return true;
// }
// // przeglądanie tablicy i "zbieranie" liczb pierwszych
// for (let i = 0; i < liczby.length; i++) {
//     if (czyPierwsza(liczby[i])) {
//         pierwsze.push(liczby[i]);
//     }
// }
// // wypisanie całej tablicy z liczbami pierwszymi - po prostu używamy jej nazwy
// console.log("Liczby pierwsze:", pierwsze);


let imiona = ["Ania", "Bartek", "Celina", "Damian"];
try {
    // jest tu literówka: zamiast imiona.length wpisano imona.length
    for (let i = 0; i < imona.length; i++) {
        alert("Imię nr " + (i + 1) + ": " + imiona[i]);
    }
} catch (blad) {
    // złapanie wyjątku pozwoli wykryć błąd
    console.log("Wystąpił błąd:", blad.message);
}