function ejercicio2() {
    let n1 = Number(document.getElementById("num1").value);
    let n2 = Number(document.getElementById("num2").value);
    let n3 = Number(document.getElementById("num3").value);

    let mayor = Math.max(n1, n2, n3);
    document.getElementById("resultado").textContent = "El número mayor es: " + mayor;
}