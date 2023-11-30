const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req,res) => {
  res.render("index", {produtos});
});

const produtos = [
  {id: 1, nome:"Bola copa 2022", preco:"45,00", descricao:"dnwqd", imagem:"https://th.bing.com/th/id/OIP.pcqKdounN--RAZKGf4iv7wHaHa?rs=1&pid=ImgDetMain"},
  {id: 2, nome:"Bola copa 2018", preco:"45,00", descricao:"dnwqd", imagem:"https://th.bing.com/th/id/R.8a37e23c6d3808bd1b60a6bbd86f753f?rik=6DDVvgWC8%2bhCIQ&pid=ImgRaw&r=0"},
  {id: 3, nome:"Bola copa 2014", preco:"45,00", descricao:"dnwqd", imagem:"https://th.bing.com/th/id/OIP.vSAoFicJ1QF55vpclkrZVwHaHa?w=480&h=480&rs=1&pid=ImgDetMain"},
  {id: 4, nome:"Bola copa 2010", preco:"45,00", descricao:"dnwqd", imagem:"https://th.bing.com/th/id/R.ac7ca38dc56df318afe52d418dd78fb3?rik=wvSEVOW7r5NCHw&riu=http%3a%2f%2fmedia4.s-nbcnews.com%2fj%2fstreams%2f2013%2fdecember%2f131205%2f2d9855215-jabulani.nbcnews-ux-2880-1000.jpg&ehk=yaIJC2bRuIzRQxixjOW%2ffm%2fShpVSHYXcvhgwe5W7c0k%3d&risl=&pid=ImgRaw&r=0"},
  {id: 5, nome:"Bola copa 2006", preco:"45,00", descricao:"dnwqd", imagem:"https://th.bing.com/th/id/OIP.nHlV60YBfLvbSgM1TsPNsAHaHa?rs=1&pid=ImgDetMain"},
  {id: 6, nome:"Bola copa 2002", preco:"45,00", descricao:"dnwqd", imagem:"https://th.bing.com/th/id/R.5fb1fb3ab29454cb4832d01dcb3bbbdc?rik=xIbQ1Wr7XHfXTw&pid=ImgRaw&r=0"},
  {id: 7, nome:"Bola copa 1998", preco:"45,00", descricao:"dnwqd", imagem:"https://th.bing.com/th/id/R.7137b1ca82179a34dba13ef06be37411?rik=SxpYNR9BQHp1ZQ&riu=http%3a%2f%2fwww.obaoba.com.br%2fsystem%2fpictures%2f2013%2f12%2f274095%2fcropped%2ftricolore98certo.jpg&ehk=02z70N%2f73lWAvRRCmwSI%2fiACkzLr%2fE8mnG4jDC5EHuw%3d&risl=&pid=ImgRaw&r=0"},
  {id: 8, nome:"Bola copa 1994", preco:"45,00", descricao:"dnwqd", imagem:"https://th.bing.com/th/id/OIP.gKNtu0APbTjyO64VbrE0CAAAAA?rs=1&pid=ImgDetMain"},
  {id: 9, nome:"Bola copa 1990", preco:"45,00", descricao:"dnwqd", imagem:"https://th.bing.com/th/id/R.3d0f140502bd102a295d6aa43fdc08b8?rik=Je5zWWJBtWt2cQ&riu=http%3a%2f%2fwww.quadrodemedalhas.com%2fimages%2fcopa-do-mundo%2fbola-copa-1990-italia.jpg&ehk=duYcp5f2JpbPDjx%2fC5AlSmu1HDYuvgd%2boLYRywc%2bLx4%3d&risl=&pid=ImgRaw&r=0"},
  {id: 10,nome:"Bola copa 1986", preco:"45,00", descricao:"dnwqd", imagem:"https://th.bing.com/th/id/OIP.n7PAqI3yVnEfO9V3OSPUSgHaGL?rs=1&pid=ImgDetMain"},

]


function buscarProdutoPorID(id){
  const produto = produtos.find(produto => produto.id == id)
  return produto || null
}
console.log(buscarProdutoPorID)



app.get('/', (req, res) => {
  res.render('index', { produtos });
});



app.get('/produtos/:id', (req, res) => {
  const produto = buscarProdutoPorID(req.params.id)
  res.render('produto', { produtos });
});


app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});

