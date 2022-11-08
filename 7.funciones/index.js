//pasos para construir una fuction
// declara una fuction
// 2 ponerle un nombre que describa el trabajo   que realizara la funccion 
//3 la funcion puede resivir parametros pero si o si indicar que parametro tendra
////()
//(listadeamigos)
//(edad,nombre)
// 4 DATO IMPORTANTE. una funcion siempre tiene que retornar un tipo de dato


function saludo(){
    let saludo = "hola como estas "
    return saludo

}
// para usar una funcion debo llamar a la funcion 
console.log (saludo('frankli'))

//funccion contarvocales(texto) { retur vocal}


function contador(texto){
    let contador = 0
   // let vocales = ['a','e','i','o','u']
    for(  i=0  ; i < texto.length ; i++){
        switch(texto[i]){
            case "a": case "e": case "i": case "o": case "u":  
          contador+=1
    }
}
 return contador
}
console.log(contador("mi mama me mima yo mimo a mi mama "))

///function calculadora(num1,num2,operacion)(return total)

//calculadora(45,12,'resta')//33

function sumar(a,b ){
    var sumar = a+b

    return sumar

}
console.log(sumar(2,6))