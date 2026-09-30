function ejercicio7() {
    let n1 = Number(document.getElementById("nota1").value);
    let n2 = Number(document.getElementById("nota2").value);
    let n3 = Number(document.getElementById("nota3").value);

    let promedio = (n1 + n2 + n3) / 3;
    let estado = promedio >= 10.5 ? "Aprobado" : "Desaprobado";

    document.getElementById("resultado").textContent = 
        `Promedio: ${promedio.toFixed(2)} - Estado: ${estado}`;
}