const Materia = require('../Model/Materia')

module.exports = {
    async index(req,res){
        //busca todos os registros
        let materia = await Materia.find() ;
      return res.json(materia);
    },

    async show(req, res){
        let materia = await Materia.findOne({_id : req.params_id});
      return res.json(materia);
    },

    async store(req, res){
        const materia = req.body.materia;
        const nota = req.body.nota;
        let materias = await Materia.findOne({materia});

        if(!materias){
            materias = await Materia.create({materia,nota});
        }
        return res.json(materias);
    },

    //update pega o id, busca no banco esse registro, alerta ele no controlador e manda gravar
    async update(req, res){
        //recuperando o registro
        let materia = await Materia.findOne({_id : req.params.id});
        //edito os registro
        materia = await Materia.updateOne(materia);
        return res.json(materia);
    },

    async destroy(req, res){
        let materia = await Materia.DestroyOne({_id : req.params_id});
        return res.json(materia);
    }
  };