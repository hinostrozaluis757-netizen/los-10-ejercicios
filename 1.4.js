function ejercicio4() {
    let dia = Number(document.getElementById("dia").value);
    let dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];

    if (dia >= 1 && dia <= 7) {
        document.getElementById("resultado").textContent = "Día: " + dias[dia - 1];
    } else {
        document.getElementById("resultado").textContent = "Número inválido (Ingresa de 1 a 7)";
    }
}