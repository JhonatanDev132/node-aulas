import { writeSync } from "fs";
import { http } from "http"; // importando o módulo nativo http,
// mesmo sendo um módulo nativo, ainda assim precisamos do package.js

// criando uma função que vai monitorar as requisições e respostas do servidor, recebe dois parâmetros requisição e respostas.
const monitorRequisicao = (req, res) => {
   // Configurando o cabeçalho da resposta para trabalhar com arquivos HTML e charset-utf-8
    res.writeHead(200, {"Content-Type" : "text/html; charset=utf8"});

    switch (req.url) {
        case '/':
            // o carregamento e leitura do index.html
            break;

        case '/sobre':
            // o carregamento e leitura do sobre.html
        break;
    
        default:
            // o carregamento e leitura do 404.html
            break;
    }
}