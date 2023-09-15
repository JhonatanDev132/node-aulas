import express from "express";


// Armazenando o express em uma váriavel. Ao invés de chamar express().get, usaremos app.get
const app = express();

// Configurar a view engine com EJS
app.set('view engine', 'ejs');

// Configurando as portas de acesso

// Raiz
    app.get('/', (req, res) =>{
       // res.send('Olá bem-vindo ao servidor ExpressJs. Foi mais fácil do que parecia')
       const bandas = ['Post Malone', 'The Strokes', 'Bruno Mars', 'Eve']
       res.render('paginas/index', {bandas})
    });

    app.get('/sobre', (req, res) =>{
        // res.send('Olá bem-vindo ao servidor ExpressJs. Foi mais fácil do que parecia')
        res.render('paginas/sobre')
     });

     app.get('/contato', (req, res) =>{
        // res.send('Olá bem-vindo ao servidor ExpressJs. Foi mais fácil do que parecia')
        res.render('paginas/contato')
     });

// Iniciando o servidor e escolhendo a porta
app.listen(3000, () => {
    console.log('Servidor expressJs rodando normalmente.');
})