const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");


const perguntas = [
    {
        enunciado: "Que tipo de música você costuma ouvir diariamente?",
        alternativas: [
            {
                texto: " Músicas calmas e relaxantes.",
                afirmacao: " Você prefere músicas calmas, como lo-fi e jazz, geralmente busca tranquilidade e concentração.",
            },
            {
                texto: " Uma música mais animada com batidas eletrizantes",
                afirmacao: " Você prefere músicas com batidas eletrizantes busca energia e excitação, geralmente em festas ou para se motivar.",
            }
        ]
    },
    {
        enunciado: " Que horas você costuma ouvir músicas no seu dia a dia?",
        alternativas: [
            {
                texto: " Na parte da manhã e à tarde",
                afirmacao: " Você ouve música de manhã e à tarde busca melhorar o humor e manter a energia e o foco ao longo do dia.",
            },
            {
                texto: " Na parte da noite ou madrugada ",
                afirmacao: " Você ouve música a noite e/ou na madrugada, busca relaxar, descontrair e preparar a mente para o descanso. ",
            }
        ]
    },
    {
        enunciado: " Qual seu estilo de música favorito ?",
        alternativas: [
            {
                texto: " Rock, eletrônica ou funk ",
                afirmacao: " Esses estilos atraem pessoas que curtem ambientes dinâmicos e cheios de ritmo, buscando expressão e diversão. ",
            },
            {
                texto: " MPB, samba, lofi ou sertanejo",
                afirmacao: " Esses estilos atraem pessoas que apreciam uma conexão mais íntima e tranquila com a música, seja para refletir, relaxar ou celebrar momentos cotidianos. ",
            }
        ]
    },
    {
        enunciado: " Você prefere ouvir músicas nacionais ou internacionais?",
        alternativas: [
            {
                texto: " Nacionais ",
                afirmacao: " Você prefere músicas nacionais valoriza a cultura e as tradições brasileiras, conectando-se com a identidade do país através de estilos como MPB, samba e sertanejo. ",
            },
            {
                texto: " Internacionais ",
                afirmacao: " Você prefere músicas internacionais busca uma conexão com estilos e influências globais, explorando uma diversidade de ritmos e culturas. ",
            }
        ]
    },
    {
        enunciado: " Você prefere músicas com letras profundas e emocionais ou músicas mais instrumentais e atmosféricas?",
        alternativas: [
            {
                texto: " Músicas com letras profundas e emocionais ",
                afirmacao: "Você prefere músicas com letras profundas e emocionais geralmente busca uma conexão mais íntima com a música, procurando refletir sobre sentimentos, experiências e histórias que tocam o coração. ",
            },
            {
                texto: " Músicas mais instrumentais e atmosféricas ",
                afirmacao: " Você prefere músicas mais instrumentais e atmosféricas geralmente busca uma experiência mais imersiva, onde o foco está nas texturas sonoras e na ambientação. ",
            }
        ]
    },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = " ";

function mostraPergunta() {
     if (atual >= perguntas.length) {
        mostraResultado();
        return;
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener('click', () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = " ";
    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener('click', () => respostaSelecionada(alternativa));
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
    caixaPerguntas.textContent = "Seu estilo é";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = " ";
}

mostraPergunta();