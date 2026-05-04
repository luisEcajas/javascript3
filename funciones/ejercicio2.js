function calcularDescuentoSencillo() {
    // Definimos los datos aquí mismo
    let costo = 200000; 
    let descuento = 0;

    // Lógica del 5% si es mayor a 150.000
    if (costo > 150000) {
        descuento = costo * 0.05;
    }

    // Mostramos el resultado directamente
    console.log("El costo es:", costo);
    console.log("El descuento aplicado es:", descuento);
    console.log("Total a pagar:", costo - descuento);
}

// Para que funcione, solo tienes que llamar a la función:
calcularDescuentoSencillo();