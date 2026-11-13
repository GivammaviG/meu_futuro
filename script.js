const textosFuturo = {
    '3anos': {
        faculdade: {
            gamedesign: "Você estará mergulhando na arquitetura de mundos virtuais, aplicando matemática e lógica para dar vida a regras de jogos enquanto desenha mapas e escreve histórias envolventes.",
            humanas: "Você estará explorando as profundezas do pensamento humano, da história e da geografia, conectando civilizações antigas com novas ideias filosóficas.",
            exatas: "Você estará afiando seu raciocínio lógico e matemático, descobrindo padrões ocultos que servem tanto para resolver problemas complexos quanto para estruturar sistemas de jogos.",
            artes: "Você estará dando forma visual e literária às suas ideias, transformando conceitos filosóficos em traços artísticos e narrativas cativantes."
        },
        projeto: {
            rpg: "Nas noites livres, seus amigos estarão reunidos em torno de um universo de RPG criado por você — com geografia detalhada, política histórica e enigmas matemáticos.",
            livro: "Seu caderno e computador estarão cheios de rascunhos, mapas desenhados à mão e diálogos profundos de uma história que mistura filosofia e aventura.",
            enigma: "Você estará criando desafios visuais e quebra-cabeças lógicos que encantam quem tenta decifrar as camadas escondidas da sua arte."
        }
    },
    '10anos': {
        carreira: {
            narrative: "Você será referência na criação de universos (Worldbuilding), unindo geografia fictícia, história coerente e sistemas lógicos para jogos ou livros.",
            pesquisa: "Você estará publicando obras que conectam filosofia, história e arte, traduzindo ideias complexas de um jeito criativo e acessível.",
            indie: "À frente de projetos autorais, você usará a lógica da programação e a sensibilidade da escrita para criar jogos independentes com alma filosófica.",
            educador: "Você terá criado uma forma única de ensinar, usando mapas ilustrados, narrativas de RPG e desafios lógicos para despertar a curiosidade das pessoas."
        },
        lugar: {
            biblioteca: "Seu espaço de trabalho será um santuário criativo: estantes repletas de livros de história, cadernos de esboços, mapas na parede e conjuntos de dados poliédricos sobre a mesa.",
            viagem: "Com um caderno de anotações e desenho na mochila, você estará explorando paisagens e culturas reais para alimentar a geografia e a história das suas criações.",
            natureza: "Cercado(a) por plantas e luz natural, você terá encontrado o equilíbrio perfeito entre a concentração da lógica e a fluidez da escrita."
        }
    },
    '15anos': {
        obra: {
            universo: "Seu grande legado será um universo interativo completo — onde cada região tem sua própria geografia, cada povo tem sua filosofia e cada mecânica obedece a uma lógica brilhante.",
            saga: "Sua saga literária e artística será admirada pela profundidade histórica e pelos dilemas filosóficos que fazem os leitores refletirem por anos.",
            sistema: "Você terá desenvolvido uma obra que prova que arte e matemática não são opostas, mas duas raízes da mesma árvore."
        },
        sentimento: {
            orgulho: "Ao olhar para o caminho percorrido, você verá que nunca precisou podar nenhuma das suas vocações: a escrita, a lógica, a arte e o RPG cresceram juntos.",
            paz: "Você sentirá a serenidade de quem plantou ideias com paciência e hoje vê outras pessoas encontrando abrigo, diversão e inspiração nos mundos que você criou."
        }
    }
};

function revelarFuturo(periodo) {
    let textoFinal = "";
    let container = document.getElementById(`res-${periodo}`);

    if (periodo === '3anos') {
        const faculdade = document.getElementById('q3-faculdade').value;
        const projeto = document.getElementById('q3-projeto').value;

        if (faculdade) textoFinal += textosFuturo['3anos'].faculdade[faculdade] + " ";
        if (projeto) textoFinal += textosFuturo['3anos'].projeto[projeto];

        atualizarCaixa(container, textoFinal, "🌱", "Selecione as opções acima para germinar sua visão de 3 anos...");
    } 
    else if (periodo === '10anos') {
        const carreira = document.getElementById('q10-carreira').value;
        const lugar = document.getElementById('q10-lugar').value;

        if (carreira) textoFinal += textosFuturo['10anos'].carreira[carreira] + " ";
        if (lugar) textoFinal += textosFuturo['10anos'].lugar[lugar];

        atualizarCaixa(container, textoFinal, "🌿", "Selecione as opções acima para ver seus galhos crescerem em 10 anos...");
    } 
    else if (periodo === '15anos') {
        const obra = document.getElementById('q15-obra').value;
        const sentimento = document.getElementById('q15-sentimento').value;

        if (obra) textoFinal += textosFuturo['15anos'].obra[obra] + " ";
        if (sentimento) textoFinal += textosFuturo['15anos'].sentimento[sentimento];

        atualizarCaixa(container, textoFinal, "🌳", "Selecione as opções acima para colher os frutos de 15 anos...");
    }
}

function atualizarCaixa(elemento, texto, icone, textoPadrao) {
    // Reinicia a animação
    elemento.classList.remove('revealed');
    void elemento.offsetWidth; // Força o reflow do CSS para reativar a animação

    if (texto.trim() !== "") {
        elemento.classList.add('revealed');
        elemento.innerHTML = `
            <span class="leaf-icon">${icone}</span>
            <p>${texto}</p>
        `;
    } else {
        elemento.innerHTML = `
            <span class="leaf-icon">${icone}</span>
            <p>${textoPadrao}</p>
        `;
    }
}