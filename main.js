 let obtenerChatStatus = (vector) => {
   
let respuesta = "";

if (vector.length === 1) {
    respuesta = vector[0]+" está conectada"
}
     else if (vector.length === 2){
     
       respuesta = vector[0] + " y " + vector[1]+" están conectadas"
     }
          else{
              respuesta = vector[0] + ", " + vector[1] + " y " + (vector.length - 2) + " persona(s) más están conectadas"
          }

return respuesta

}


console.log(obtenerChatStatus(["jenara","lili" , "mirta"]))
