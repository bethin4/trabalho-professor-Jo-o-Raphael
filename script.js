const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Assim ao sair de casa pela manhã, percebeu as pessoas estranhas. Se depara com um apocalípse zumbi. Qual seria sua primeira reação?",
        alternativas: [
            {
                texto: "Acharia assustador!",
                afirmacao: "Não saberia reagir ao ver as pessoas comendo coisas humanas em minha frente, "
            },
            {
                texto: "Acharia maravilhoso!",
                afirmacao: "Amo zumbis, quero vivenciar esse momento,"
            }
        ]
    },
    {
        enunciado: "Derrepende você se depara com um zumbi vindo em sua direção. O que você faz?",
        alternativas: [
            {
                texto: "Entraria dentro de uma casa e me esconderia no armário.",
                afirmacao: "Um esconderijo para se proteger,"
            },
            {
                texto: "Ficaria fascinada(o), em estado de choque de tão incrível.",
                afirmacao: "Amante de zumbis,"
            }
        ]
    },
    {
        enunciado: "Após o encontro com o zumbi, você precisa ir atrás de suprimentos, ao entrar no mercado, verifica que não tem quase nada. Qual seria o seu jantar?",
        alternativas: [
            {
                texto: "Comeria feijão enlatado, pois é umas das únicas coisas que sobrou no supermercado.",
                afirmacao: "Amo comer feijão,"
            },
            {
                texto: "Comeria lasanha congelada, uma das únicas comidas congeladas que restou.",
                afirmacao: "Amo comer lasanha,"
            }
        ]
    },
    {
        enunciado: "Agora você precisa escolher um abrigo. Para onde você deseja ir?",
        alternativas: [
            {
                texto: "Desejo ir ficar na estação de metrô, pois lá não tem pessoas vivas.",
                afirmacao: " Ama a própria companhia,"
            },
            {
                texto: "Desejo ir para o parque de diversões.",
                afirmacao: " Gosto de emoções,"
            }
        ]
    },
    {
        enunciado: "Um zumbi te avista e corre em sua direção. O que você faz? ",
        alternativas: [
            {
                texto: "Me rendo, minha vida já não é a mesma.",
                afirmacao: "Depressão severa, infelizmente se rendeu e virou um zumbi."
            },
            {
                texto: "Corro para longe e vou atrás de uma arma e munição para sobreviver até ir para a cidade vizinha em busca de paz.",
                afirmacao: "Luta para sobreviver, chega até a cidade vizinha e recomeça sua vida. "
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "Segundo suas escolhas, seu resultado foi de:";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
