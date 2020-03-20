//Router
const express = require('express');

// importer les controllers
const questionController = require('./controllers/questionController');
const tagController = require('./controllers/tagController');
const userController = require('./controllers/userController');
// importer les middlewares

const router = express.Router();
// rends disponible les données envoyées par l'utilisateur, via req.body
router.use(express.urlencoded({
    extended: true
  }));

//Front page route
router.get('/', questionController.getQuestions);

//question route
  //création question
router.post('/question', questionController.createQuestion);

router.get('/question/:id', questionController.getQuestionById);
router.patch('/question/:id', questionController.editQuestion);
router.delete('/question/:id', questionController.deleteQuestion);
router.get('/question/tag/:id', questionController.getQuestionByTag);


// Trier questions frontpage
//router.get('/questions/best', questionController.getBestQuestions);
//router.get('/questions/new', questionController.getNewQuestions);

//Tags route
router.get('/tags', tagController.getAllTags);
 
// User route
router.get('/user/:id', userController.getUserById);
// route login pour les test du formulaire de connection
router.get('/login', userController.loginPage);
router.get('/disconnect', userController.disconnect);
router.post('/login', userController.loginAction);


//page Inscription
router.post('/inscription', userController.signUpAction);

//Ma page Profil
router.get('/monprofil', userController.myProfilPage);
//Supprimer un compte
router.delete('/user/:id', userController.deleteUser);
// Editer son profil
router.patch('/user/:id', userController.editUser);

module.exports = router;