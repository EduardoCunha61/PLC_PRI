var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CulinariaSchema = new Schema(
    {
        titulo: {type: String, required: true},
        data: {type: String, required: true},
        descricao: {type: String, required: true}
    }
  )
  var ActividadeSchema = new Schema (
    {
      culinaria: [CulinariaSchema]    
      }
  )

  
module.exports = mongoose.model('Atividade', ActividadeSchema);