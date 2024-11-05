
let x = 0
let valor

do {
    valor = parseInt(prompt("Ingrese un valor (0000 para finalizar):"));
    if (valor !== 0000) {
        x += valor;
    }
} while (valor !== 0000);

document.write("Valor es."+" "+ x +" ");

if (x > 0) {
    document.write("mayor que cero.");
} else if (x < 0) {
    document.write("menor que cero.");
} else {
    document.write("es cero.");
}

