var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');

var CulinariaSchema = new Schema(
    {
        titulo: {type: String, required: true},
        data: {type: String, required: true},
        descricao: {type: String, required: true}
    }
  )

  var LocalVisitadoSchema = new Schema(
    {
        local: {type: String, required: true},
        data: {type: String, required: true},
        descricao: {type: String, required: true}
    }
  )

  var EventoCientificoSchema = new Schema(
    {
        titulo: {type: String, required: true},
        data: {type: String, required: true},
        local: {type: String, required: true},
        descricao: {type: String, required: true}
    }
  )
  var DesportoSchema = new Schema(
    {
        titulo: {type: String, required: true},
        data: {type: String, required: true},
        desporto: {type: String, required: true},
        duracao: {type: String, required: true},
        descricao: {type: String, required: true}
    }
  )
  var IdeiaSchema = new Schema(
    {
        titulo: {type: String, required: true},
        data: {type: String, required: true},
        palavrachave:[{type:String}],
        descricao: {type: String, required: true}
    }
  )
  var FormacaoSchema = new Schema(
    {
        titulo: {type: String, required: true},
        data: {type: String, required: true},
        creditação:{type:String, required: true},
        descricao: {type: String, required: true}
    }
  )
  var CasamentoSchema = new Schema(
    {
        titulo: {type: String, required: true},
        data: {type: String, required: true},
        local: {type: String, required: true},
        nubentes:{noivo:String, noiva:String},
        descricao: {type: String, required: true}
    }
  )
  var ActividadeSchema = new Schema (
    {
      culinaria: [CulinariaSchema],
      casamento:[CasamentoSchema],
      formacao: [FormacaoSchema],
      ideia:[IdeiaSchema], 
      evento: [EventoCientificoSchema],
      localvisitado: [LocalVisitadoSchema],  
      desporto:[DesportoSchema]   
      }
  )

var UserSchema = new Schema(
  {
  username: String,
  password: String,
  name: String,
  atividades: ActividadeSchema
  }
);




UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', UserSchema, 'users');