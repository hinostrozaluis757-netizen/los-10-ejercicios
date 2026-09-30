function ejercicio5() {
    let inputEl = document.getElementById("num") || document.getElementById("num1");
    let resultadoEl = document.getElementById("resultado");

    let valorTexto = inputEl ? inputEl.value.trim() : "";

    if (valorTexto === "") {
        resultadoEl.textContent = "Por favor, ingresa un número.";
        return;
    }

    let num = Number(valorTexto);

    if (isNaN(num) || num < 0) {
        resultadoEl.textContent = "Ingresa un número entero mayor o igual a 0.";
        return;
    }

    if (num === 0 || num === 1) {
        resultadoEl.innerHTML = `Factorial de ${num}:<br><b>${num}! = 1</b>`;
        return;
    }


    let fact = 1n;

    if (num <= 15) {
        let procedimiento = [];
        for (let i = num; i >= 1; i--) {
            fact *= BigInt(i);
            procedimiento.push(i);
        }
        resultadoEl.innerHTML = 
            `Factorial de ${num}:<br>` +
            `<b>${num}!</b> = ${procedimiento.join(" × ")} = <b>${fact.toString()}</b>`;
    } else {
       
        for (let i = num; i >= 1; i--) {
            fact *= BigInt(i);
        }
        resultadoEl.innerHTML = 
            `Factorial de ${num}:<br>` +
            `<b>${num}!</b> = <br><div style="word-break: break-all; max-height: 200px; overflow-y: auto; margin-top: 10px;"><b>${fact.toString()}</b></div>`;
    }
}