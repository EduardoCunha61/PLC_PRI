var express = require('express');
var router = express.Router();
var auth = require("../controllers/AuthController.js");
var User = require("../models/User");
// restrict index for logged in user only
router.get('/', auth.home);

// route to register page
router.get('/registo', auth.register);

// route for register action
router.post('/registo', auth.doRegister);

// route to login page
router.get('/login', auth.login);

// route for login action
router.post('/login', auth.doLogin);

// route for logout action
router.get('/logout', auth.logout);

router.get('/perfil', (req,res)=>{
  if (req.isAuthenticated()){

          res.render('perfil', {user: req.user});
  }
  else 
      res.redirect('/')
})



router.post('/:user_id/ReceitasCulinarias/novaReceita', (req, res, next)=>{
      var nova = {titulo: req.body.titulo, data: new Date(Date.now()).toLocaleString(), descricao: req.body.descricao}
      console.log('Acrescentei uma nota.'+nova.titulo)
      console.log('Acrescentei uma nota.')
	    User.update({_id: req.params.user_id}, 
		  {$push: {"atividades.culinaria": nova}}, (err, result)=>{
		  if(!err) console.log('Acrescentei uma nota.')
		  else console.log('Erro ' + err)
	    })
      res.redirect('/perfil')
})


router.post('/:user_id/Evento/novoEvento', (req, res, next)=>{
    var nova = {titulo: req.body.titulo, data: new Date(Date.now()).toLocaleString(), local: req.body.local, descricao: req.body.descricao}
     console.log('Acrescentei uma nota.'+nova.titulo)
    console.log('Acrescentei uma nota.')
    User.update({_id: req.params.user_id}, 
      {$push: {"atividades.evento": nova}}, (err, result)=>{
    if(!err) console.log('Acrescentei uma nota.')
    else console.log('Erro ' + err)
    })
  res.redirect('/perfil')
})

router.post('/:user_id/LocalVisitado/novoLocalVisitado', (req, res, next)=>{
  var nova = {titulo: req.body.titulo,data: new Date(Date.now()).toLocaleString() ,local: req.body.local, descricao: req.body.descricao}
  console.log('Acrescentei uma nota.'+nova.titulo)
  console.log('Acrescentei uma nota.')
  User.update({_id: req.params.user_id}, 
  {$push: {"atividades.localvisitado": nova}}, (err, result)=>{
  if(!err) console.log('Acrescentei uma nota.')
  else console.log('Erro ' + err)
  })
  res.redirect('/perfil')
})


router.post('/:user_id/RegDesportivo/novoRegDesportivo', (req, res, next)=>{
  var nova = {titulo: req.body.titulo, data: Date.now.toString(), descricao: req.body.descricao}
  console.log('Acrescentei uma nota.'+nova.titulo)
  console.log('Acrescentei uma nota.')
  User.update({_id: req.params.user_id}, 
  {$push: {"atividades.desporto": nova}}, (err, result)=>{
  if(!err) console.log('Acrescentei uma nota.')
  else console.log('Erro ' + err)
  })
  res.redirect('/perfil')
})

router.get('/:user_id/ReceitasCulinarias', (req, res, next)=>{
  if(req.isAuthenticated()){
    User
      .findOne({_id: req.params.user_id})
      .exec((err, doc)=>{
          if(!err){
              var culinari = doc.atividades.culinaria;
              res.render('receitas', {culi: culinari, user: req.user})
              console.log('Ole')
          }
        
          else res.render('error', {error: err})
        })
      }else{
        res.redirect('/')
      }
})

router.get('/:user_id/Evento', (req, res, next)=>{
  if(req.isAuthenticated()){
    User
      .findOne({_id: req.params.user_id})
      .exec((err, doc)=>{
          if(!err){
              var culinari = doc.atividades.evento;
              res.render('evento', {culi: culinari, user: req.user})
              console.log('Ole')
          }
        
          else res.render('error', {error: err})
        })
      }else{
        res.redirect('/')
      }
})
router.get('/:user_id/RegistoDesportivo', (req, res, next)=>{
  if(req.isAuthenticated()){
    User
      .findOne({_id: req.params.user_id})
      .exec((err, doc)=>{
          if(!err){
              var culinari = doc.atividades.desporto;
              res.render('desporto', {culi: culinari, user: req.user})
              console.log('Ole')
          }
        
          else res.render('error', {error: err})
        })
      }else{
        res.redirect('/')
      }
})
router.get('/:user_id/LocalVisitado', (req, res, next)=>{
  if(req.isAuthenticated()){
    User
      .findOne({_id: req.params.user_id})
      .exec((err, doc)=>{
          if(!err){
              var culinari = doc.atividades.localvisitado;
              res.render('localvisitado', {culi: culinari, user: req.user})
              console.log('Ole')
          }
        
          else res.render('error', {error: err})
        })
      }else{
        res.redirect('/')
      }
})

router.get('/:user_id/AlbumFotografico', (req, res, next)=>{
  if(req.isAuthenticated()){
    User
      .findOne({_id: req.params.user_id})
      .exec((err, doc)=>{
          if(!err){
              var culinari = doc.atividades.fotografico;
              res.render('album', {culi: culinari, user: req.user})
              console.log('Ole')
          }
        
          else res.render('error', {error: err})
        })
      }else{
        res.redirect('/')
      }
})
router.get('/:user_id/Ideias', (req, res, next)=>{
  if(req.isAuthenticated()){
    User
      .findOne({_id: req.params.user_id})
      .exec((err, doc)=>{
          if(!err){
              var culinari = doc.atividades.localvisitado;
              res.render('localvisitado', {culi: culinari, user: req.user})
              console.log('Ole')
          }
        
          else res.render('error', {error: err})
        })
      }else{
        res.redirect('/')
      }
})
router.get('/:user_id/ReceitasCulinarias/novaReceita', (req, res, next)=>{
	if(req.isAuthenticated()){
    res.render('novaReceita',{user:req.user})
  }
  else res.redirect('/')
})

module.exports = router;

router.get('/:user_id/Evento/novoEvento', (req, res, next)=>{
	if(req.isAuthenticated()){
    res.render('novoEvento',{user:req.user})
  }
  else res.redirect('/')
})

router.get('/:user_id/LocalVisitado/novoLocalvisitado', (req, res, next)=>{
	if(req.isAuthenticated()){
    res.render('novoLocalVisitado',{user:req.user})
  }
  else res.redirect('/')
})


module.exports = router;