const pos3 = document.getElementById("pos3");
//const pos2 = document.getElementById("pos2");
//const pos3 = document.getElementById("pos3");
//const pos4 = document.getElementById("pos4");
//const pos5 = document.getElementById("pos5");

var step = -1;

pos3.innerHTML = "Aperte 'x' para avançar e 'z' para retroceder";


document.addEventListener('keydown', (event) => {
    phrases(event.key);
});


function phrases(key){
    var texts = [
        "O NINHO DA CORUJA",
        "Estava escuro",
        "E ela não se lembrava de como chegou ali",
        "Mas não sentiu dor",
        "Nem estava triste",
        "Sabia que fez o que achava certo",
        "Apesar de não conhecer o futuro",
        "E nem o presente",
        "Se levantou e olhou a sua volta",
        "Parecia que estava procurando sua casa",
        "Um lugar aconchegante",
        "Cercada de quem amava",
        "Andou por alguns minutos",
        "No silêncio",
        "Remoendo suas lembranças",
        "Tentando lembrar do passado",
        "Folhas",
        "Galhos",
        "Luz",
        "Começou a se lembrar de algumas coisas",
        "Água",
        "Vento",
        "Calor",
        "Lembrou do seu sofrimento",
        "...",
        "Ovos",
        "E de repente lembrou",
        "E lágrimas desceram pelos seus olhos",
        "O medo de não poder ser mãe",
        "A frustração de não ser forte o suficiente",
        "Amor",
        "E lembrou da última coisa que sentiu",
        "Da última coisa que fez",
        "E seu corpo se aqueceu",
        "Seu coração acelerou",
        "E se sentiu bem",
        "Acreditava, não. Sabia",
        "Que tudo estava bem",
        "Que o amor reconstrói tudo",
        "Que seu filho estava bem",
        "Que a natureza estava em paz",
        "Que morreu feliz",
        "Todos fizeram o seu melhor",
        "Ninguém desistiu",
        "Todos lutaram para proteger quem amavam",
        "É isso que importa",
        "O amor reconstrói tudo",
        "Andou mais um tempo",
        "Sentou para apreciar o céu estrelado",
        "Não sentia cansaço",
        "E sentia que nunca mais se sentiria cansada",
        "O pior já passou",
        "As estrelas cintilam festejantes",
        "Só falta uma coisa...",
        "Ouviu então um som baixo",
        "PIOS",
        "Levantou batendo as asas",
        "Quase voando",
        "E lembrou que podia voar",
        "Voou o mais rápido que pode",
        "Não se sentia cansada",
        "Os pios ficavam mais altos",
        "O brilho claro das estrelas iluminou o chão",
        "Encontrou seu ninho",
        "Três pequenos vultos",
        "Piavam",
        "Não de fome, mas de alegria",
        "E todos começaram a pular e bater as asas alegres",
        "E os três perceberam que podiam voar",
        "Levantaram vôo os quatro",
        "Sabendo que logo estariam todos juntos novamente",
        "E sabendo que o amor reconstrói tudo.",
        "De: Eric Kurachi",
        "Para: Ana, o meu grande amor"
    ];

    if (key == 'x'){
        step += 1;
        pos3.innerHTML = texts[step];
    }
    
    if (key == 'z'){
        step -= 1;
        pos3.innerHTML = texts[step];
    }

}