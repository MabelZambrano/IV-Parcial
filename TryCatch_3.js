
function dividirNumeros(n1,n2){
    try{
        if(typeof n1!=="number"|| typeof n2!=="number"){
            throw " Uno de los argumentos no es un numero "
            
        }else if(n2==0){
            throw " No se puede dividir entre 0 "
        
        }else{
            return n1/n2
        }
    }catch(error){
        return "Error" + error
    }
}
console.log(dividirNumeros(10,2))
console.log(dividirNumeros(5,0))
console.log(dividirNumeros("abc",2))
