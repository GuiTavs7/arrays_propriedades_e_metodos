// 1) PROPRIEDADES DOS ARRAYS

let frutas = ["Banana", "Maçã", "Laranja", "Pera"];
let frutasTamanho = frutas.length; // acessando a propriedade de tamanho do array

console.log("Tamanho do array = " + frutasTamanho); // 4

for(let i = 0; i < frutasTamanho; i++){
    console.log("Fruta: " + frutas[i]);
}

frutas.forEach(function(item, index, array){
    console.log(index);
    console.log(array);
    console.log("Fruta: " + item);
})

// 2) MÉTODOS DOS ARRAYS

// 2.1) PUSH => Adiciona elementos ao final do array

frutas.push("Manga");

console.log(frutas);

// 2.2) POP => Remove o último elemento do array

frutas.pop(); 

console.log(frutas);

// 2.3) SHIFT => Remove o primeiro elemento do array

frutas.shift();

console.log(frutas);

// 2.4) UNSHIFT => Adiciona elementos ao início do array

frutas.unshift("Morango");

console.log(frutas);

// 2.5) INDEX OF => Procura o índice de um elemento no array!

let positionLaranja = frutas.indexOf("Laranja");

console.log(positionLaranja);