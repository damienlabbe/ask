const sequelize = require('sequelize');
// On importe notre BDD grace à la connection.
const DBConnection = require('../dbConnection');

// On importe User pour s'en servir dans les relations
const User = require('./user');

// Création de la classe Answer ansi que quelques setter et getter (pour tester)
class Answer extends sequelize.Model {};

// Ici un initialise notre classe avec les données de la BDD
Answer.init(
    {
        content: sequelize.STRING,
        score: sequelize.INTEGER,
        userId:{
            type: sequelize.INTEGER,
            field: "user_id"
        },
        questionId: {
            type: sequelize.INTEGER,
            field:"question_id",
        },
        answerId: {
            type: sequelize.INTEGER,
            primaryKey: true,
            field:"answer_id",
        }
    },
    {
        sequelize: DBConnection,
        tableName: "answer",
        createdAt: "created_at",
        updatedAt: "updated_at"
    },
);

//Relations
// Une réponse appartient à un utilisateur
Answer.belongsTo(User, {
    foreignKey: 'user_id',
    as: 'author'
});

// Un utilisateur à plusieurs réponses
User.hasMany(Answer, {
    foreignKey: 'answer_id',
    as: "answers"
});

module.exports = Answer;