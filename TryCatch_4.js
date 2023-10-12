
var arrPeliculas= []
mostrarMenu()

function mostrarMenu(){
    var Seguir = true

    do {
        let op = parseInt(prompt(" Que accion desea realizar " +
         "\n1 Guardar Pelicula. "+" \n2 Mostrar peliculas.\n3 Comprar boletos.\n4 Salir."))  
        switch (op){

            case 1:
                AggPelicula()
                break;

                case 2:
                    Mostrarpeliculas(arrPeliculas)
                    break

                    case 3:
                        Comprando_boleto(arrPeliculas)
                        break

                        case 4:
                            Seguir=false
                            break

                    default:
                        break;
        }
    } while(Seguir==true);
}


function AggPelicula(){

    var Pelicula = {
        titulo:"",
        edad:0   
     }
    
     try{
        Pelicula.titulo=prompt("Ingrese el titulo de la pelicula")
        Pelicula.edad=parseInt(prompt("Ingrese la clasificacion de la pelicula"))

        if (typeof Pelicula.edad == 'number'){
            throw "La clasificacion debe de ser un numero"

        }else if (isNaN(Pelicula.edad)){
            throw "La clasificacion debe de ser un numero"

        }else{
            arrPeliculas.push(Pelicula)

     }
     }catch(error){
        console.error(error);
  }
}

function Mostrarpeliculas(peliculas){
    for (let i = 0; i < peliculas.length; i++){
        console.log("Pelicula" + (i+1)+ ":")
        console.log("Titulo: "+ peliculas[i].titulo+"clasificacion: "+peliculas[i].edad);
        }
}

function comprarBoleto (peliculas) {
    Mostrarpeliculas(peliculas)
try{
    let index = parseInt(prompt("Cual pelicula desea ver? "))
    let edad = parseInt(prompt("Ingrese su edad"))
if (typeof edad == 'number' || typeof index == 'number' ){
    throw "Se esperaba un numero"
    }else if (isNaN(edad)|| isNaN(index)){
        throw "Se esperaba un numero"
        }else if (peliculas.length < 1){
            throw "No existen peliculas"
        }
        else{
            if (edad>peliculas[index-1].edad){
                alert("Disfrute su pelicula")

         }else{
            alert("E menor de edad, no puede ver esta pelicula")
         }
        }
    }catch (error){
        console.error(error);
    }
}