import http from 'http'; // importando módulo nativo http.

import fs from 'fs/promises';
// Constante que monitora requisições e recebe dois parâmetros req (requisição) e res (resposta)

const monitorRequisicao = (req, res) => {

    // Configurando o cabeçalho da resposta para trabalhar com arquivos HTML e charset=utf8 
    res.writeHead(200, { "Content-Type" : "text/html;charset=utf8"});

    //Avaliando cada requisição (a partir do link)
    switch (req.url) {
        case '/':
            // Fs faz o carregamento e leitura do arquivo
            fs.readFile('paginas/index.html')
            // Dps de pronto, envia o conteudo como resposta

            .then(coteudo => res.end(conteudo));
        break;
    
        case '/sobre':
            fs.readFile('paginas/sobre.html').then
            (conteudo => res.end(conteudo));
            
            // Exibir sobre.html
        break;

        default:
            res.writeHead(404);
            fs.readFile('paginas/404.html')
                .then(conteudo > res.end(conteudo));
            // Exibir 404.html
        break;
    }
};

// Criando o servidor http e indicando a função de requisições
const servidor = http.createServer(monitorRequisicao);

// Iniciando a escuta do servidor local na porta 8080
// servidor.listen(8080); // Só esse trecho jaá seria o suficiente, mas é importante rodar a mensagem para ter certeza que tudo deu certo

servidor.listen(8080, () => {
    console.log("Servidor node rodando normalmente");
})
