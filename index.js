let express = require("express");
let app = express();
let {usuario, empresa} = require("./models")

app.use(express.json());

app.use(express.urlencoded({
  extended: true
}))
app.get("/usuarios/:id/empresa",async function(req,res){
  let resultado = await usuario.findByPk(req.params.id, {include:'empresa'});
  res.json(resultado.empresa);

})
app.get('/usuarios/:id', async function(req,res){
let resultado = await usuario.findByPk(req.params.id);
  res.json(resultado);
})

app.get('/usuarios', async function(req,res){
let resultado = await usuario.findAll();
  res.json(resultado);
})
app.post('/usuarios', async function(req,res){
 let resultado = await usuario.create(req.body);
  res.json(resultado);
})
app.put('/usuarios/:id', async function(req,res){
  
 let resultado = await usuario.update( 
   req.body, 
   {where: req.params} 
) 
   res.json(resultado) 
})
app.delete('/usuarios/:id', async function(req,res){
 let resultado = await usuario.destroy({ where: req.params});
  res.json(resultado);
})

app.get('/empresas/:id', async function(req,res){
let resultado = await empresa.findByPk(req.params.id);
  res.json(resultado);
})
app.get('/empresas/:id/usuarios', async function(req,res){
let resultado = await empresa.findByPk(req.params.id, {
  include: 'usuarios'
});
  res.json(resultado.usuarios);
})
app.get('/empresas', async function(req,res){
let resultado = await empresa.findAll();
  res.json(resultado);
})
app.post('/empresas', async function(req,res){
 let resultado = await empresa.create(req.body);
  res.json(resultado);
})
app.put('/empresas/:id', async function(req,res){
  
 let resultado = await empresa.update( 
   req.body, 
   {where: req.params} 
) 
   res.json(resultado) 
})
app.delete('/empresas/:id', async function(req,res){
 let resultado = await empresa.destroy({ where: req.params});
  res.json(resultado);
})
app.listen(3000, function(){
  console.log("O servidor está bruto de mais")
});






// http://luizpicolo.com.br/inserir?id=123 req.query.id
// http://luizpicolo.com.br/inserir/123    req.params.id
// http://luizpicolo.com.br/inserir        req.body.id