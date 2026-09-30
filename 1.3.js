function ejercicio3() {
    let letra = document.getElementById("letra").value.toLowerCase();
    
    if (!letra || letra.length > 1 || !/[a-zñ]/.test(letra)) {
        document.getElementById("resultado").textContent = "Ingresa una sola letra válida";
        return;
    }

    if ("aeiou".includes(letra)) {
        document.getElementById("resultado").textContent = `La letra '${letra}' es una VOCAL`;
    } else {
        document.getElementById("resultado").textContent = `La letra '${letra}' es una CONSONANTE`;
    }
}