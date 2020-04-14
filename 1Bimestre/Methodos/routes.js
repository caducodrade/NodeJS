//Vendor 
const express = require('express');
const multer = require('multer')

//Solicitação do nossos arquivos do MVC e config
const UploadConfig       = require('./config/upload');
const UserController     = require('./Controller/User');
const ModeloController   = require('./Controller/Modelo');
const EnderecoController = require('./Controller/Endereco');

const routes = express.Router();
const upload = multer(UploadConfig);

//Index =Listagem 
//Show = Visualizar os dados gravados
//Store = Gravar
//Destroy = Delete
//este exemplo é o mesmo da segundo exemplo só que simpificado
//app.get('/', (req, res) => res.send('Hello World!'));

//este exemplo completo de uma reuqisição simples
routes.get('/',function(req, res){
    res.send("Hello word");
});

//Get => Buscar info -- Select para listagem de infos
//req.query = acessar a query ou params (filtros)
//localhost:3000/?idade=37&sexo=M
routes.get('/users', UserController.index);

//este exemplo de get onde traz um usuario com base no id passado
routes.get('/users/:id', UserController.show);

//Methodo POST // Create -- Gravação
//Formulario de login e senha  por exemplo
// vai enviar o login e a senha no corpo da requisição
routes.post('/users', upload.single('thumb'), UserController.store);

//Mehodo PUT é usado para fazer o update para atualizar os dados do banco de dados
// localhost:3000/users/5
routes.put('/users/:id', UserController.update);

//Methodo Delete - Serve para deletar um registro
routes.delete('/users/:id',UserController.destroy);



routes.get('/modelo',       ModeloController.index);
routes.get('/modelo/:id',   ModeloController.show);
routes.post('/modelo',      ModeloController.store);
routes.put('/modelo/:id',   ModeloController.update);
routes.delete('/modelo/:id',ModeloController.destroy);


routes.get('/endereco',       EnderecoController.index);
routes.get('/endereco/:id',   EnderecoController.show);
routes.post('/endereco',      EnderecoController.store);
routes.put('/endereco/:id',   EnderecoController.update);
routes.delete('/endereco/:id',EnderecoController.destroy);


module.exports = routes;