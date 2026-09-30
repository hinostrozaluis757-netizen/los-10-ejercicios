function ejercicio8() {
    let radio = Number(document.getElementById("radio").value);
    if (radio <= 0) {
        document.getElementById("resultado").textContent = "Ingresa un radio mayor a 0";
        return;
    }
    let area = Math.PI * Math.pow(radio, 2);
    document.getElementById("resultado").textContent = `Área del círculo: ${area.toFixed(2)}`;
}