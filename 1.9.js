function ejercicio9() {
    let numStr = document.getElementById("num").value;

    if (numStr.length !== 3 || isNaN(numStr)) {
        document.getElementById("resultado").textContent = "Ingresa un número exactamente de 3 cifras";
        return;
    }

    if (numStr[0] === numStr[2]) {
        document.getElementById("resultado").textContent = `El número ${numStr} ES capicúa`;
    } else {
        document.getElementById("resultado").textContent = `El número ${numStr} NO es capicúa`;
    }
}