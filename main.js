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
                afirmacao: [
                " Você prefere músicas calmas, como lo-fi e jazz, geralmente busca tranquilidade e concentração.",
                "Prefiro músicas calmas, como lo-fi e jazz, que ajudam a criar um ambiente tranquilo e focado.",
                "Busco tranquilidade e concentração com sons suaves que promovem um clima de calma e produtividade."
                ]
            },
            {
                texto: " Uma música mais animada com batidas eletrizantes",
                afirmacao: [ 
                "Gosto de músicas mais animadas com batidas eletrizantes, que trazem energia e deixam qualquer momento mais vibrante.",
                "Sons intensos e cheios de ritmo me motivam, elevam o astral e criam uma atmosfera cheia de movimento.",
                " Você prefere músicas com batidas eletrizantes busca energia e excitação, geralmente em festas ou para se motivar."
                ]
            }
        ]
    },
    {
        enunciado: " Que horas você costuma ouvir músicas no seu dia a dia?",
        alternativas: [
            {
                texto: " Na parte da manhã e à tarde",
                afirmacao: [
                "Quem prefere ouvir músicas pela manhã costuma buscar motivação e energia para começar o dia com mais disposição.",
                " Você ouve música de manhã e à tarde busca melhorar o humor e manter a energia e o foco ao longo do dia.",
                "Quem escuta músicas à tarde geralmente procura manter o ritmo ou aliviar o estresse acumulado, equilibrando foco e relaxamento."
                ]
            },
            {
                texto: " Na parte da noite ou madrugada ",
                afirmacao: [
                "Quem ouve música à noite ou de madrugada costuma buscar tranquilidade e introspecção.",
                " Você ouve música a noite e/ou na madrugada, busca relaxar, descontrair e preparar a mente para o descanso. ",
                "Esse horário favorece a criatividade e um clima mais relaxante."
                ]
            }
        ]
    },
    {
        enunciado: " Qual seu estilo de música favorito ?",
        alternativas: [
            {
                texto: " Rock, eletrônica ou funk ",
                afirmacao: [
                "Quem prefere rock, eletrônica ou funk geralmente busca músicas fortes e cheias de energia.",
                "Esses estilos atraem pessoas que curtem ambientes dinâmicos e cheios de ritmo, buscando expressão e diversão. ",
                "Esses estilos mostram uma personalidade vibrante e dinâmica."
                ]
            },
            {
                texto: " MPB, samba, lofi ou sertanejo",
                afirmacao: [
                "Esses estilos atraem pessoas que apreciam uma conexão mais íntima e tranquila com a música, seja para refletir, relaxar ou celebrar momentos cotidianos.",
                "Quem gosta de MPB, samba, lo-fi ou sertanejo busca músicas leves e acolhedoras.",
                "Esses estilos mostram uma personalidade tranquila e sensível."
                ]
            }
        ]
    },
    {
        enunciado: " Você prefere ouvir músicas nacionais ou internacionais?",
        alternativas: [
            {
                texto: " Nacionais ",
                afirmacao: [
                "Você prefere músicas nacionais valoriza a cultura e as tradições brasileiras, conectando-se com a identidade do país através de estilos como MPB, samba e sertanejo.",
                "Quem prefere músicas nacionais geralmente valoriza a cultura e as raízes do próprio país.",
                "Esse gosto mostra conexão com a língua, os ritmos e as histórias locais."
                ]
            },
            {
                texto: " Internacionais ",
                afirmacao: [
                "Quem prefere músicas internacionais costuma buscar diversidade de estilos e sons de outros países.",
                "Esse gosto demonstra curiosidade cultural e interesse por experiências musicais globais.",
                "Você prefere músicas internacionais busca uma conexão com estilos e influências globais, explorando uma diversidade de ritmos e culturas."
                ]
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