// Función que retorna una promesa
function HacerPromesa(){
        return new Promise((resolve, reject) => {
    // simulamos una operacion asincrona con setTimeout        
    setTimeout(() => {
        const num = 8; // numero inicial
        resolve(num); // resolvemos la promesa con el numero
    }, 1000);
});

}
// Encadenando dos operaciones
HacerPromesa()
.then((num) => {
    console.log("Numero Inicial : " , num);
    return num + 2; //primera operacion sumamos 2
})
.then((resultado) => {
    console.log("Resultado despues de sumar 2 : " , resultado);
    return resultado * 2; // segunda operacion multiplicamos por dos
})
.then((resultadoFinal) => {
    console.log("Resultado final : " ,resultadoFinal ); // mostramos el resultado final
});
