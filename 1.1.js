function ejercicio1() {
    let n1 = Number(document.getElementById("num1").value);
    let n2 = Number(document.getElementById("num2").value);
    
    let suma = n1 + n2;
    let resta = n1 - n2;
    let multi = n1 * n2;
    let divi = n2 !== 0 ? (n1 / n2).toFixed(2) : "Indefinida (División por 0)";

    document.getElementById("resultado").innerHTML = 
        `Suma: ${suma}<br>Resta: ${resta}<br>Multiplicación: ${multi}<br>División: ${divi}`;
}