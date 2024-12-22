function calcola() {
    const chilometri = document.getElementById("km").value;
    console.log(chilometri);

    const eta = document.getElementById("eta").value;
    console.log(eta);

    const prezzokm = 0.21;
    const scontoMinorenne = 20;
    const scontoOver = 40;

    const prezzoPieno = prezzokm * chilometri;

    let risultato = prezzoPieno;


    if (eta < 18) {
        console.log("Minorenne");
        const sconto = prezzoPieno * scontoMinorenne / 100;
        const prezzoFinale = prezzoPieno - sconto;
        risultato = prezzoFinale.toFixed(2);
    }
    else if (eta > 65) {
        console.log("Over");
        const sconto = prezzoPieno * scontoOver / 100;
        const prezzoFinale = prezzoPieno - sconto;
        risultato = prezzoFinale.toFixed(2);

    }

    document.getElementById("recapKm").innerHTML = chilometri + ' Km';
    document.getElementById("recapEta").innerHTML = eta + ' Anni';
    document.getElementById("risultato").innerHTML = risultato + " Euro";

}
