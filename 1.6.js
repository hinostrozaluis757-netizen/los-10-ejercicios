function ejercicio6() {
    let num = Number(document.getElementById("num").value);
    let salida = "";
    
    for (let i = 1; i <= 10; i++) {
        salida += `${num} x ${i} = ${num * i}<br>`;
    }
    document.getElementById("resultado").innerHTML = salida;
}