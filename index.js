let listaAlunos = [
    {
        nome: 'João',
        curso: 'Ciencia da Computação',
        turno: 'Noturno',
        mediaCorte: 7,
        materias: [
            {
                nome: 'Calculo I',
                avaliacoes: [6, 8, 10, 8]
            },
            {
                nome: 'Pensamento Computacional',
                avaliacoes: [6, 8, 6, 8]
            },
            {
                nome: 'Linguagem Orientada a Objetos',
                avaliacoes: [7, 8, 9, 10]
            },
            {
                nome: 'Arquitetura de Organização de Computadores',
                avaliacoes: [6, 8, 7, 8]
            }
        ]
    }
]

let notaMinAprovacao = 6

function calcularNota() {
    let aprovados = 0

    for (i = 0; i < listaAlunos.length; i++) {
        for (y = 0; y < listaAlunos[i].materias.length; y++) {
            let soma = 0
            for (x = 0; x < listaAlunos[i].materias[y].avaliacoes.length; x++) {
                soma += listaAlunos[i].materias[y].avaliacoes[x]
            }

            let media = soma / 4
            if (media >= 6) {
                aprovados++
            }
        }
        console.log(aprovados)

    }
}

// ATIVIDADE 2
function calculaMedia() {
    let materiasAprovadas = 0
    
    for (i = 0; i < listaAlunos[0].materias.length; i++) {
        const materia = listaAlunos[0].materias[i];
        const media = materia.avaliacoes.reduce((acc, nota) => acc + nota, 0) / materia.avaliacoes.length;
        if (media >= 6) {
            materiasAprovadas++
        }
    }
    return materiasAprovadas;
}

// ATIVIDADE 3
const onibus = {
    capacidade: 40,
    origem: 'Curitiba-PR',
    destino: 'Rio de Janeiro-RJ',
    paradas: [
        'São Paulo-SP',
        'Campinas-SP',
        'São José dos Campos-SP',
        'Volta Redonda-RJ'
    ],
    passageiros: [
        {
            nome: 'Luis da Silva',
            rg: '1234567890',
            bilhete: {
                origem: 'Curitiba-PR',
                destino: 'São José dos Campos-SP',
                poltrona: 15,
            }
        },
        {
            nome: 'João da Silva',
            rg: '1234567891',
            bilhete: {
                origem: 'São Paulo-SP',
                destino: 'Rio de Janeiro-RJ',
                poltrona: 16,
            }
        }
    ]
}

function paradaAtual(paradaAtual) {
    if (onibus.paradas.includes(paradaAtual)) {
        return paradaAtual
    }
}

function verificandoPassageiros(paradaOnibus) {
    let passageirosDescer = []
    
    for (i = 0; i < onibus.passageiros.length; i++) {
        const destinoPassageiro = onibus.passageiros[i].bilhete.destino;
        
        if (destinoPassageiro == paradaOnibus) {
            passageirosDescer.push(onibus.passageiros[i])
        } 
    }
    return passageirosDescer;
}

function vaiDescer() {
    return verificandoPassageiros(paradaAtual('São José dos Campos-SP'))
}



calcularNota();
console.log(`-------------------------`)
console.log(calculaMedia())
console.log(`-------------------------`)
console.log(vaiDescer())