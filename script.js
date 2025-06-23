function calcularDominioRango() {
    const funcionStr = document.getElementById('funcionInput').value.trim().toLowerCase();
    let dominio = "No se pudo determinar. Prueba con funciones más simples (ej: x^2, 1/x, sqrt(x), log(x)).";
    let rango = "No se pudo determinar. Prueba con funciones más simples.";

    // Lógica simplificada para funciones comunes
    switch (funcionStr) {
        case "x":
        case "x^2":
        case "x^3":
        case "2x":
        case "3x+5": // Polinomios básicos
            dominio = "(-∞, ∞) o Todos los números reales";
            if (funcionStr === "x^2") {
                rango = "[0, ∞) o Todos los números reales no negativos (y ≥ 0)";
            } else if (funcionStr === "x" || funcionStr === "x^3" || funcionStr === "2x" || funcionStr === "3x+5") {
                rango = "(-∞, ∞) o Todos los números reales";
            }
            break;

        case "1/x":
            dominio = "(-∞, 0) U (0, ∞) o Todos los números reales excepto x = 0";
            rango = "(-∞, 0) U (0, ∞) o Todos los números reales excepto y = 0";
            break;

        case "sqrt(x)": // Raíz cuadrada de x
            dominio = "[0, ∞) o Todos los números reales no negativos (x ≥ 0)";
            rango = "[0, ∞) o Todos los números reales no negativos (y ≥ 0)";
            break;

        case "log(x)": // Logaritmo natural o base 10 (asumimos logaritmo común)
            dominio = "(0, ∞) o Todos los números reales positivos (x > 0)";
            rango = "(-∞, ∞) o Todos los números reales";
            break;

        default:
            // Si la función no coincide con los casos anteriores
            // Intentamos una detección muy básica para polinomios que contienen 'x'
            if (funcionStr.includes("x") && !funcionStr.includes("/") && !funcionStr.includes("sqrt") && !funcionStr.includes("log")) {
                 dominio = "(-∞, ∞) o Todos los números reales";
                 rango = "Depende de la función específica. Para polinomios de grado impar: (-∞, ∞). Para polinomios de grado par: [mínimo/máximo, ∞) o (-∞, mínimo/máximo].";
            }
            break;
    }

    document.getElementById('dominioResultado').innerText = dominio;
    document.getElementById('rangoResultado').innerText = rango;
}
