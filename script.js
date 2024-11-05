
let x = 0
let valor

let num = 0000

do {
    valor = parseInt(prompt("Ingrese un valor (0000 para finalizar):"));
    if (valor !== num) {
        x += valor;
    }
} while (valor !== num);

document.write("Valor es."+" "+ x +" ");

if (x > 0) {
    document.write("mayor que cero.");
} else if (x < 0) {
    document.write("menor que cero.");
} else {
    document.write("es cero.");
}

