//* BUCLE FOR

for (let i=1; i<=20; i+=1){
  if ( i % 2 == 0 ){
    console.log(i)
  } else {
    console.log(i)
  }
  
}

let vocales= 'aeiou'
console.log(vocales.length)

for(  i=0; i< vocales.length; i++){
  console.log (vocales[i])
}
//

let texto= 'hola como estas pta'
let contador= 0

for(  i=0  ; i < texto.length ; i++){
  if (texto[i]== 'a'){
    contador+=1
  }
}
console.log('tiene', contador, 'vocales')

/////////////////////////////////////
 
let texto1= 'holaa como estas '
let contador1= 0



for(  i=0  ; i < texto1.length ; i++){
  switch(texto1[i]){
   case "a": case "e": case "i": case "o": case "u":  
 contador1+=1

}}
console.log(contador1)

//* BUCLE WHILE

let eval = true
let eval2 = 'salir'
while (eval == true){
   if (eval2 == 'salir') {
       console.log('adios')
       eval=false
   }
}

// BUCLE DO-WHILE

var i = 0;
do {
  i = i + 1;
  console.log(i);
} while (i < 5);

// con la estructura de for 
// mostrar los numeros pares entre 1 y 20

//hacer una programa que muestre el factorial de un numero //

const numero = 5; 
let factorial = 1;
for(let i = numero; i>0; i--){
    factorial *= i;
}
console.log(factorial);

// hacer un programa que determine si un texto es polindromo 

function Palindromo(text) {
  

  return  text.split("").reverse().join("") === text ;
}
console.log(Palindromo("oso")); // es palindromo
console.log(Palindromo("hola")); // no es palindromo
console.log(Palindromo("omo")); // es palindromo


// fibonacci 

function fibonacci(n){
  return n < 2? n: fibonacci(n-1) + fibonacci(n-2)
}
console.log(fibonacci(5))
console.log(fibonacci(7))
console.log(fibonacci(9))




