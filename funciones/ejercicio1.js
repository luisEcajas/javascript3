/**
 * Función para calcular el área de un hexágono regular
 * @param {number} lado - La longitud de un lado del hexágono
 * @param {number} apotema - La distancia del centro al punto medio de un lado
 */
function calcularAreaHexagono(lado, apotema) {
    const perimetro = lado * 6;
    const area = (perimetro * apotema) / 2;
    return area;
}

// Ejemplo de uso:
let ladoHex = 10;
let apotemaHex = 8.66; 

let resultado = calcularAreaHexagono(ladoHex, apotemaHex);

console.log(`El área del hexágono con lado ${ladoHex} y apotema ${apotemaHex} es: ${resultado}`);