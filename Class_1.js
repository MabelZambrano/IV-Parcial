class Persona{
    constructor(nombre,edad){
        this.nombre= nombre
        this.edad= edad
    }
    saludar(){
        console.log("Hola soy" + this.nombre + "y tengo" + this.edad + "años")
        }
    }

class Estudiante extends Persona {
    constructor (nombre,edad,grado){
        super(nombre,edad)
        this.grado= grado
    }
    estudiar(){
        console.log(this.nombre+ " Estudia el grado "+ this.grado)
    }
}

var estudiante1 =new Estudiante("( Pedro ",  12 , " tercero) ")
estudiante1.saludar()
estudiante1.estudiar()