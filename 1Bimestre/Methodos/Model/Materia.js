const mongoose = require('mongoose');
const MateriaSchema =  new mongoose.Schema({
    materia : String,
    notas : String,
});

module.exports = mongoose.model('Materia', MateriaSchema);