const readline = require('readline');
let arr = [];
let min = 2;
let max = 20;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


rl.on('line', (N) =>{
    arr.push(parseInt(N))
    let M = Math.floor((Math.random() * (max - min + 1)) + min);
    let Vi;
    let number_Gloria;
    let M_arr = [];

    for(i = 1; i < M; i++){
        Vi = Math.floor((Math.random() * (500 - 1 + 1)) + 1);
        M_arr.push(Vi)
    }
    if(arr.length > 0){
      number_Gloria = arr[0];
      if(number_Gloria > 1 && number_Gloria < M){
        The_Coins_Of_Robbie(number_Gloria,M_arr)
      }    

     arr = [];
    
    }

})

function The_Coins_Of_Robbie(N,arr){
  let value_salto = arr[N];
  let teste = [];
  let teste2 = [];
  let i = 0;
  let arr_salto = []
  arr_salto.push(value_salto)
  let first_value = arr.slice
  console.log("Valor de N " + N)
let value_arr = arr.slice(N);
teste = value_arr[0]


if(value_salto % 2 == 0 || value_salto % 3 == 0){
  // console.log(arr)
  // console.log("Número que não é primo " + value_salto)
}else{
  // console.log(arr)
  // console.log("Número primo " + value_salto)
}
}