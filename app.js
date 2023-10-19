const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));

const produtoos = [
  {id:1, nome:"bola de futebol", preco: "350", descricao: "descricao", imagem:""},
  {id:2, nome:"bola de futebol", preco: "350", descricao: "descricao", imagem:""},
  {id:3, nome:"bola de futebol", preco: "350", descricao: "descricao", imagem:""},
  {id:4, nome:"bola de futebol", preco: "350", descricao: "descricao", imagem:""},
  {id:5, nome:"bola de futebol", preco: "350", descricao: "descricao", imagem:""},
  {id:6, nome:"bola de futebol", preco: "350", descricao: "descricao", imagem:""},
  {id:7, nome:"bola de futebol", preco: "350", descricao: "descricao", imagem:""},
  {id:8, nome:"bola de futebol", preco: "350", descricao: "descricao", imagem:""},
  {id:9, nome:"bola de futebol", preco: "350", descricao: "descricao", imagem:""},
  {id:10, nome:"bola de futebol", preco: "350", descricao: "descricao", imagem:""}
  

]

app.get('/', (req, res) => {
  res.render('index', { message: 'Olá, Mundo!' });
});



app.get('/produto', (req, res) => {
  res.render('produto', { message: 'Olá, Mundo!' });
});


app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});