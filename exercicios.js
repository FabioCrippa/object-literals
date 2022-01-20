//object literals=>

//Estrutura
//let nomeVariavel = {
//propriedade1: valor,
//propriedade2: valor,
//}
//console.log(nomeVariavel);
//console.log(nomeVariavel.propriedade) 
//dot notation://busca propriedade

let paises = {
     nome: "Brasil",
     populacao: 22320,
     continente: "americano",
}
console.log(paises.continente);

//acrescentar uma funcao no objeto=>
//uma propriedade armazena uma funcao, ou seja, um metodo desse objeto

//Estrutura
//let nomeVariavel = {
//propriedade1: valor,
//propriedade2: valor,
//nomePropriedadeFunction: function() {
        //return this.propriedade
    //}
//}
//console.log(nomeVariavel.nomePropriedadeFunction())

let pais = {
    nome: "Brasil",
    populacao: 22320,
    continente: "americano",
    ondeNasci: function(){
        return "Eu nasci no" + " " + this.nome;
    }

}
console.log(pais.ondeNasci())

//Outro exemplo
//Estrutura
// let nomeVariavel = {
//     propriedade1: valor,
//     propriedade2: valor,
//     nomePropriedadeFuncao: function() {
//         console.log(this.propriedade)
//     }
// }
// nomeVariavel.nomePropriedadeFuncao()

let carro = {
    nome: "Ferrari",
    ano: 2020,
    modelo: 2019,
    caracteristica: function() {
        console.log(this.ano)
    }
}
carro.caracteristica()

//funcao construtora new=> evita repeticoes e usa a mesma estrutura usada no codigo anterior
//monta um molde ou modelo para todos os objetos que seguem esse mesmo molde

//Estrutura
// function nomeFunction(nomeGenerico1, nomeGenerico2) {
//     this.propriedade1 = nomeGenerico1; this=> evita repeticoes de palavras
//     this.propriedade2 = nomeGenerico2;
// }
// let nomeVariavel = new nomeFunction("nome1", "nome2") 
// console.log(nomeVariavel);

//Exemplo
function Carro(nomeCarro, anoCarro) {
    this.nome = nomeCarro;
    this.ano = anoCarro;
}
let civic = new Carro("Civic", "2019")
console.log(civic);

//Exemplo
function comida(nomeComida, paisComida, tipoComida) {
    this.nome = nomeComida,
    this.pais = paisComida,
    this.tipo = tipoComida
}
let prato = new comida("lasagna", "Italia", "massa")
console.log(prato)
