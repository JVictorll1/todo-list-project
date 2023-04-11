const objDate = [
    {
        cor: 1,
        titulo: "Example Title Task 1!"
    },
    {
        cor: 2,
        titulo: "Example Title Task 2!"
    },
    {
        cor: 3,
        titulo: "Example Title Task 3!"
    },
    {
        cor: 2,
        titulo: "Example Title Task 4!"
    },
    {
        cor: 3,
        titulo: "Example Title Task 5!"
    },
    {
        cor: 2,
        titulo: "Example Title Task 4!"
    },
]
//Captura a classe cor-cartão para desenvolver a lógica do ITERÁVEL
const corCartao = document.getElementsByClassName('cor-cartao')

//Variável que recebe do Objeto traduzido do arquivo JSON o valor da cor dos cartões
let colorTask = []
let numeroCor = objDate.map((res) => {
    colorTask.unshift(res.cor)
})

console.log(colorTask)



/* >>>>>>>>>>>>>>>>>>>> CONTINUAR DAQUI !
let a = fetch("database/date.json")
let list = JSON.parse(a)
*/

//Função que define a cor do cartão para Verde
const tarefaSimples = (cor) => 
    cor.style.backgroundColor = "#00b894" 

//Função que define a cor do cartão para Amarelo
const tarefaMedia = (cor) => 
    cor.style.backgroundColor = "#fdcb6e"

//Função que define a cor do cartão para Vermelho
const tarefaUrgente = (cor) => 
    cor.style.backgroundColor = "#ff6b6b"


/* >> Como o ITERÁVEL corCartao não é um Array para ser percorrido, é necessário usar
      o Array.from para transformar o ITERÁVEL em um Array */
/* >> Para se adequar à lógica das funções que alteram as cores dos cartões
      utilizei Cases para cada número de tipo de tarefas encontradas no arquivo JSON */
let count = 0
Array.from(corCartao).forEach((cor) => {
   switch(colorTask[count++]) {
        case 1:
            tarefaSimples(cor)
            break
        case 2:
            tarefaMedia(cor)
            break
        case 3:
            tarefaUrgente(cor)
            break
        default:
            console.log("Nenhuma das opções.")
   }
})
















