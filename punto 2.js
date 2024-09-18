//simulamos una funcion que obtenga datos de una API   
function TraerDatosdeApi  = async(url) =>{
 return new Promise((resolve) => {
    setTimeout (() => {
        resolve(`Datos de ${url}`);
    }, 1000); // simulamos un retraso de 1 segundo
 });

};

//funcion principal que utiliza async y await   
const datos = async () => {
    try{ // llamamos a la primera API
     const DatosAPI1 = await TraerDatosdeApi ('https://jsonplaceholder.typicode.com/todos/1');
     console.log("Respuesta de API 1: ", DatosAPI1);
     
    // llamamos a la segunda API
    
    const datosAPI2 = await TraerDatosdeApi ('https://jsonplaceholder.typicode.com/todos/2');
    console.log("Respuesta de API 2: ", datosAPI2);

    } catch(error){
      console.log("Ocurrio un error",error);
    }
};
 datos();
