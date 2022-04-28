let express = require("express");
let app = express();
let {usuario} = require("./models")
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}))
app.get('/', function(req,res){
let resultado = usuario.findAll();
  res.json(resultado);
})
app.post('/', function(req,res){
 let resultado = usuario.create();
  res.json(resultado);
})
app.listen(3000, function(){
  console.log("O servidor está bruto de mais")
});






// http://luizpicolo.com.br/inserir?id=123 req.query.id
// http://luizpicolo.com.br/inserir/123    req.params.id
// http://luizpicolo.com.br/inserir        req.body.id