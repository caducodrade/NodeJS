const Marcas = require('../Model/Marca')

module.exports = {
    async index(req,res){
        //busca todos os registros
        let Marcas = await Marcas.find();
      return res.json(Marcas);
    },

    async show(req, res){
        let marca = await Marcas.findOne({_id : req.params_id});
      return res.json(marca);
    },

    async store(req, res){
        const nome = req.body.nome;
        const thumb = req.file.filename;
        let marca = await Marcas.findOne({nome});

        if(!marca){
            marca = await Marcas.create({nome,thumb});
        }
        return res.json(marca);
    },

    //update pega o id, busca no banco esse registro, alerta ele no controlador e manda gravar
    async update(req, res){
        //recuperando o registro
        let marca = await Marcas.findOne({_id : req.params.id});
        //edito os registro
        marca = await Marcas.updateOne(marca);
        return res.json(marca);
    },

    async destroy(req, res){
        let marca = await Marcas.DestroyOne({_id : req.params_id});
        return res.json(marca);
    }
  };