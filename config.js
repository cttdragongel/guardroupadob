// config do pix
const pix = {
    chave : "c7d3658b-407c-4b5a-9393-d95ff16f2fd3",
    descricao: "SEGURO",
    instituicao: "MERCADO LIVRE",
    cidade: "SAO PAULO"
}

// config do produto
const produto = {
    imagem: "https://m.media-amazon.com/images/I/71V94SSN-0L._AC_SX679_.jpg",
    nome: "PAGUE 1 LEVE 2 Guarda Roupa Dobrável Kontuz Home Organizador Portátil Armário Grande",
    preco: {
        original: "359,45",
        desconto: "89,90"
    },
    avaliacoes: [
        {
            data: "10 set. 2024",
            texto: "Chegou super rapido, e é bem espaçoso"
        },
        {
            data: "11 set. 2024",
            texto: "Chegou super rápido, pensei que era mentira."
        },
        {
            data: "08 set. 2024",
            texto: "Gostei demais, já vou revender aqui na cidade"
        },
        {
            data: "01 jan. 2024",
            texto: "Curti demais, espaçoso, e resistente"
        }
    ]
}

// configuracoes globais da pagina
const global = {
    anuncio: {
        imagem: "https://i.ibb.co/1XQZGF9/advertising.png"
    }
}

// apenas calculos
let desconto = parseInt(((parseFloat(produto.preco.original.replace(",", ".")) - parseFloat(produto.preco.desconto.replace(",", "."))) / parseFloat(produto.preco.original.replace(",", "."))) * 100);
let parcela = (Math.round(parseFloat(produto.preco.desconto.replace(",", ".")) / 12 * 100) / 100).toFixed(2).replace(".", ",");