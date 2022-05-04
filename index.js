let express = require("express");
let app = express();
let {usuario} = require("./models")

app.use(express.json());

app.use(express.urlencoded({
  extended: true
}))

app.get('/:id', async function(req,res){
let resultado = await usuario.findByPk(req.params.id);
  res.json(resultado);
})
app.get('/', async function(req,res){
let resultado = await usuario.findAll();
  res.json(resultado);
})
app.post('/', async function(req,res){
 let resultado = await usuario.create(req.body);
  res.json(resultado);
})
app.put('/:id', async function(req,res){
  
 let resultado = await usuario.update( 
   req.body, 
   {where: req.params} 
) 
   res.json(resultado) 
})
app.delete('/:id', async function(req,res){
 let resultado = await usuario.destroy({ where: req.params});
  res.json(resultado);
})
app.listen(3000, function(){
  console.log("O servidor está bruto de mais")
});






// http://luizpicolo.com.br/inserir?id=123 req.query.id
// http://luizpicolo.com.br/inserir/123    req.params.id
// http://luizpicolo.com.br/inserir        req.body.id