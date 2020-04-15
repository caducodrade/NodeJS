//Vendor 
const express = require('express');
const multer = require('multer');

//Solicitação do nossos arquivos do MVC e config
const UploadConfig       = require('./config/upload');
const UserController     = require('./Controller/User');
const ModeloController   = require('./Controller/Modelo');
const EnderecoController = require('./Controller/Endereco');
const MarcaController    = require('./Controller/Marca');

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

routes.get('/users',          UserController.index);
routes.get('/users/:id',      UserController.show);
routes.post('/users', upload.single('thumb'), UserController.store);
routes.put('/users/:id',      UserController.update);
routes.delete('/users/:id',   UserController.destroy);

routes.get('/modelo',         ModeloController.index);
routes.get('/modelo/:id',     ModeloController.show);
routes.post('/modelo',        ModeloController.store);
routes.put('/modelo/:id',     ModeloController.update);
routes.delete('/modelo/:id',  ModeloController.destroy);

routes.get('/marca',          MarcaController.index);
routes.get('/marca/:id',      MarcaController.show);
routes.post('/marca',         MarcaController.store);
routes.put('/marca/:id',      MarcaController.update);
routes.delete('/marca/:id',   MarcaController.destroy);

routes.get('/endereco',       EnderecoController.index);
routes.get('/endereco/:id',   EnderecoController.show);
routes.post('/endereco',      EnderecoController.store);
routes.put('/endereco/:id',   EnderecoController.update);
routes.delete('/endereco/:id',EnderecoController.destroy);

routes.get('/veiculo',        VeiculoController.index);
routes.get('/veiculo/:id',    VeiculoController.show);
routes.post('/veiculo',       VeiculoController.store);
routes.put('/veiculo/:id',    VeiculoController.update);
routes.delete('/veiculo/:id', VeiculoController.destroy);

module.exports = routes;