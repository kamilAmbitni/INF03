function oblicz(){
    const rodzajPaliwa = +document.getElementById("rodzaj").value;
    const iloscLitrow = parseFloat(document.getElementById("ilosc").value);

    const wynik = document.getElementById("wynik");

    let cenaZaLitr = 0;

    if (rodzajPaliwa === 1){
        cenaZaLitr = 4; 
    }
    else if (rodzajPaliwa === 2){
        cenaZaLitr = 3.5; 
    }
    else{
        cenaZaLitr = 0; 
    }
    let wartosc = cenaZaLitr * iloscLitrow;

    wynik.innerHTML = "koszt paliwa: " + wartosc + " zł";


}