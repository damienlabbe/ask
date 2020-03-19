const dotenv = require('dotenv');
dotenv.config();
// Création du port de connection soit définie dans ".env" soit sur le port 3000.
const PORT = process.env.PORT || 3000;
// Importation du node module express.
const express = require('express');
const router = require('./app/router');
const app = express();

// Réglage et gestion des sessions

const session = require('express-session');
app.use(session({
  saveUninitialized: true,
  resave: true,
  secret: "chez ask on fait des blagues pas drôles"
}))

// rends disponible les données envoyées par l'utilisateur, via req.body
app.use(express.urlencoded({
    extended: true
  }));

// Le routage
app.use(router);

// Lancement du serveur.
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});