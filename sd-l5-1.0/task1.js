export function costCalculator(monto) {

    monto = Number(monto);
    const total = (monto *0.01)+(monto +3)
    return total

}
console.log(costCalculator(124));




// María está calculando el costo de los pagos mensuales. Por cada transacción hay una tarifa de $3 y una tarifa de interés del 1% (0,01). 
//  * Dado el monto de una transacción de entrada, exporte una función que devuelva el valor de lo que debería pagar.
// * Esta función debería poder tomar un número como entrada y devolver un número como salida.