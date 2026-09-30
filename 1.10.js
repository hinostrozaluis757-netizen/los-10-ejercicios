function ejercicio10() {
    let num = Number(document.getElementById("num").value);
    if (num <= 1) {
        document.getElementById("resultado").textContent = `El número ${num} NO es primo`;
        return;
    }

    let esPrimo = true;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            esPrimo = false;
            break;
        }
    }

    document.getElementById("resultado").textContent = 
        esPrimo ? `El número ${num} ES primo` : `El número ${num} NO es primo`;
}