const container = document.querySelector(".container");
const Reiniciar = document.querySelector("button");
let cartas;
let primeiraCarta = "";
let segundaCarta ="";
let contador = 0;

// itens
const items = [
    {nome: "papagaio", imagem: "papagaio.png"},
    {nome: "gato", imagem: "gato.jpg"},
    {nome: "Totoro", imagem: "Totoro.webp"},
    {nome: "peppa", imagem: "peppa.png"},
    {nome: "cavalo", imagem: "cavalo.png"},
    {nome: "banguela", imagem: "banguela.png"},
];

Reiniciar.addEventListener("click", () => location.reload());

function criarCartas(){
    let itensDuplicados = [...items, ...items]

    //org as imagens
    let figuras = itensDuplicados.sort(() => Math.random() -0.5)

    figuras.map(figura => {
        container.innerHTML += `
        <dic class = "carta" data-carta = ${figura.nome}>
        <div class = "atras">?</div>
        <div class = "frente"> 
        <img src = ${figura.imagem} width = "180px" height = "180px"/>
        </div>
        </div>`;
    });
}

criarCartas();

function virarCartas(){
    cartas = document.querySelectorAll(".carta");

    cartas.forEach((carta) => {
        carta.addEventListener("click", () => {
            if(primeiraCarta == ""){
                carta.classList.add("carta-virada");
                primeiraCarta = carta;
            }else if(segundaCarta == ""){
                carta.classList.add("carta-virada");
                segundaCarta = carta;
                checarCartas();
            }
        });
    });
}
virarCartas();

function checarCartas(){
    const primeiraFigura = primeiraCarta.getAttribute("data-carta");
    const SegundaFigura = segundaCarta.getAttribute("data-carta");

    if(primeiraFigura == SegundaFigura){
        primeiraCarta = "";
        segundaCarta = "";
        contador += 1;
        if(contador == 6){
            setTimeout(() => {
                alert('Parabéns !! Você zerou o jogo :)')
            }, 500);
        }
    }else {
        setTimeout(() => {
            primeiraCarta.classList.remove("carta-virada");
            segundaCarta.classList.remove("carta-virada");
    
            primeiraCarta = "";
            segundaCarta = "";
        }, 500);
    }
}