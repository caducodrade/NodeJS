//index,show,store,update,destroy
const Modelo = require('../Model/Modelo')

module.exports = {
  //Index traz todos os registros pelo methodo Get
  async index(req,res){
    //Busca todos os registross
    let Modelos = await Modelo.find();
    return res.json(Modelos); 
  },

  //show traz um registro onde o id do registro é igual ao id assado na url
  async show(req, res){
    //Busca um registro no banco
    let Modelo = await Modelo.findOne({_id : req.params.id});
    return res.json(Modelo);
  },

  //Store usa o methodo POST para gravar
  async store(req, res){
    //passa os dados que veio do post para uma variavel
    const nome = req.body.nome;
    Modelo = await Modelo.create({nome});
    return res.json(Modelo);
  },
  
  //update pega o id, busca no banco esse registro, alreta ele no controlador e manda gravar
  async update(req, res){
    //recupero o registro
    let Modelo = await Modelo.findOne({_id : req.params.id});
    //edito os registros
    Modelo.nome = "Hericson Ramos Forti";
    //atualiza os dados no banco
    Modelo = await Modelo.update(Modelo);
    return res.json(Modelo);
  },

  //delete = apaga o registro de cordo com o id pasasado no parametro
  async destroy(req, res){
    let Modelo = await Modelo.deleteOne({_id : req.params.id});
    return res.json(Modelo);
  }
};