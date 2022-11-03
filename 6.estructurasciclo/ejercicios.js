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

