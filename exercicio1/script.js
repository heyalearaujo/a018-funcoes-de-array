const objeto = [
     nome= "astrodev" ,
     profissao= "Dev das estrelas" ,
     username= "astrodev_labenu" ,
     senha= "melhorDeTodos" 
]
//Crie duas funcões que recebem como parâmetro um objeto.
// 1. A primeira deve retornar o objeto, alterando as propriedades dele para que fiquem em CAIXA ALTA.
// 2. A segunda deve retornar os valores do objeto como texto corrido.

const obj = (objeto) => {
    const novoArray = null
        objeto.nome.toUpperCase();
        objeto.profissao = objeto.senha.toUpperCase();
        objeto.username = objeto.username.toUpperCase();
        objeto.senha = objeto.senha.toUpperCase()
        console.log(obj(objeto))
    }
console.log(obj(objeto))

//MAP()
// const obje = objeto.map((texto) => {
//     return texto.nome
    
// })
// console.log(obje)

let objeto = {
    nome: "astrodev",
    profissao: "Dev das estrelas",
    username: "astrodev_labenu",
    senha: "melhorDeTodos"
}
const func1 = () => {
for(let propriedade in objeto){
  console.log(objeto.toUpperCase())
}
}
func1()