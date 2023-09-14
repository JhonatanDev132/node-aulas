let url = 'https://jsonplaceholder.typicode.com/posts/10'
import fetch from "node-fetch";

// 1) Conectando com o endpoint da API (URL)
fetch(url)
// 2) Retornando a resposta como JSON
    .then(resposta => resposta.json())
// 3) exibindo no console os dados optidos na API
    .then(dados => console.log(dados.title));