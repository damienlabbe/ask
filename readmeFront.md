#Liste des tâches éffectuées#

##History##

#17/03/2020#

-initialization react model
-yarn
-structure de l'application:

La plupart des dossiers sont initial au react model.

Dossier principaux: config, public, src
    dossier de src: actions,assets, components, containers,middleware,reducers,store
        dossier de assets: fonts et styles
        dossier de components: app, footer, header, main, nav
            ici on a préféré décomposer au maximum pour que cela soit plus simple
            dossier de containers: main
                dossier de main: question
                    dossier de question: counter
            dossier Nav: login, search et sortbuttons

Code de counter et definition des contenus des différents dossiers
    Nous avons préféré reprendre un code existant pour le counter, ainsi nous pourrons l'adapter plus tard pour notre application
    Nous avons fait le appstyled et le headerstyled pour visualiser un peu mieu notre site
    Nous avons préparé les fichiers loginstyled, searchstyled, sortbuttonsstyled, questionstyled, mainstyled, footerstyled, counterstyled et le navstyled avec un import dans leur index.js du dossier parent.
    Nous avons commencé à mettre en place un peu de style

#18/03/2020#

- ajout semantic-ui
- modification du dossier Main en homePage
- création du composant SignIN dans src/components
- création de son index.js
- modification de AppStyled.js dans src/components/App
- modification de index.js dans src/components/App
- modification de HeaderStyled.js dans src/components/Header
- modification de index.js dans src/components/Header
- modification de HomePageStyled.js dans src/components/HomePage
- modification de CounterSTyled.js dans src/components/Question/Counter
- modification de index.js dans src/components/HomePage/Question/Counter
- modification de QuestionStyled.js.js dans src/components/HomePage/Question
- modification de index.js dans src/components/HomePage/Question
- modification de index.js dans src/components/Homepage
- modification de LoginStyled.js dans src/components/Nav/Login
- modification de NavStyled.js dans src/components/Nav
- modification du SearchStyled.js dans src/components/Nav/Search
- modification du index.js dans src/components/Nav/Search
- modification du SortButtonsStyled.js dans src/components/Nav/SortButton

#19/03/2020#

- ajout react-router-dom
- ajout prop-types
- modification de index.js dans src/components/App
- modification de HeaderStyled.js dans src/components/Header
- modification du index.js dans src/components/Nav/Login
- modification du SearchBarStyled.js dans src/components/Nav/Search
- changement de HomePage en QuestionsPage
- modification de QuestionStyled.js dans src/components/QuestionsPage/Question
- modification de index.js dans src/components/QuestionsPage/Question
- modification de QuestionsPageStyled.js dans src/components/QuestionsPage
- modification de index.js dans src/components/QuestionsPage
- modification de index.js dans src/components/SignIn
- modification de index.js dans src
- modification de index.js dans src/components/Footer
- modification de SignInStyled.js dans src/components/SignIn
- modification de AppStyled.js dans src/components/App
- modification du NavStyled.js dans src/components/Nav
- modification du index.js dans src/components/Nav/SortButtons
- modification de index.js dans src/components/Header
- changement de Question en Questions
- modification de QuestionStyled.js dans src/components/QuestionsPage/Questions
- modification de index.js dans src/components/QuestionsPage/Questions
- création dossier AnswerPage dans src/components
- création de son index.js
- changement de Questions en Question
- création de son index.js

#20/03/2020#

modification par @media

- modification de index.js dans src/components/App
- modification de HeaderStyled.js dans src/components/Header
- modification de index.js dans src/components/Header
- modification du LoginStyled.js dans src/components/Nav/Login
- modification du index.js dans src/components/Nav/Login
- modification du SearchBarStyled.js dans src/components/Nav/Search
- modification du index.js dans src/components/Nav/Search
- modification de CounterSTyled.js dans src/components/Question/Counter
- modification de QuestionStyled.js dans src/components/QuestionsPage/Question
- modification de index.js dans src/components/QuestionsPage/Question
- modification de SignInStyled.js dans src/components/SignIn
- modification de index.js dans src/components/SignIn

faire le login déroulant

- création du dossier actions dans src
- création de son index.js
changement de Login en Settings dans src/components/Nav
- création de LoginForm.js dans src/components/Nav/Settings
- création de index.js dans src/components/Nav/Settings
- modification de SettingStyled.js dans src/components/Nav/Settings
- modification du SortButtonsStyled.js dans src/components/Nav/SortButtons
- modification du index.js dans src/components/Nav/SortButtons
- modification du index.js dans src/components/Nav
création de containers dans src
création de Settings dans src/containers
création de son index.js
création de reducers dans src
création de index.js dans src/reducers
création de login.js dans src/reducers
- modification de index.html dans src/assets
- création d'un dossier Nav dans src/containers
- inclure dans dossier Nav de src/containers le dossier Settings se trouvant dans src/containers

#21/03/2020

résolution de bug counter et container et props

- modification du index.js dans src/components/Nav/SearchBar
- modification du index.js dans src/components/Nav/Settings
- modification de index.js dans src/components/Question/Counter
- modification de index.js dans src/components/Question
- modification de index.js dans src/components/QuestionsPage
- modification de counter.js dans src/reducers

css des boutons

- modification du NavStyled.js dans src/components/Nav
- modification du index.js dans src/components/Nav/SearchBar
- modification du SettingsStyled.js dans src/components/Nav/Settings
- modification du index.js dans src/components/Nav/Settings
- modification du SortButtonsStyled.js dans src/components/Nav/SortButtons
- modification du index.js dans src/components/Nav/SortButtons

sans navlink et premiere connexion au data

- modification du index.js dans src/components/Nav/Settings
création du dossier data dans src
création de question.js dans src/data

composant question avec données statique

- modification de index.js dans src/components/QuestionsPage/Question/Counter
- modification de index.js dans src/components/QuestionsPage/Question
- modification de index.js dans src/components/QuestionsPage
création de answer.js dans src/data
création de tags.js dans src/data
création de user.js dans src/data

form login

- modification du NavStyled.js dans src/components/Nav
- modification du SearchBarStyled.js dans src/components/Nav/SearchBar
création de LoginFormStyled.js dans src/components/Nav/Settings/LoginForm
création du index.js dans src/components/Nav/Settings/LoginForm
- modification de SettingsStyled.js dans src/components/Nav/Settings
- modification de index.js dans src/components/Nav/Settings
- modification de index.js dans src/components/QuestionsPage

loginform

- modification de index.js dans src/components/QuestionsPage/Question/Counter
- modification de index.js dans src/components/QuestionsPage/Question
- modification de index.js dans src/components/QuestionsPage

route profil

- modification du NavStyled.js dans src/components/Nav
- modification du LoginFormStyled.js dans src/components/Nav/Settings/LoginForm
- modification du SettingsStyled.js dans src/components/Nav/Settings
- modification du index.js dans src/components/Nav/Settings

commentaire et readmeFront

#22/03/2020#

commentaire et readme Front

route answerPage vers accueil

- modification du index.js de src/components/AnswerPage
- modification du AnswerPageStyled.js de src/components/AnswerPage
création de AddQuestion dans src/components/QuestionsPage
création de son index.js et de son AddQuestionStyled.js
création de AddQuestionForm dans src/components/QuestionsPage/AddQuestion
création de son index.js et de son AddQuestionFormStyled

##Css##

#17/03/2020#

styled-components
création de fichiers theme.js, style.css, reset.css

#18/03/2020#

semantic-ui
modification du css dans les fichier styled de App, HomePage, Counter, SortButton, Search, Question, Header, Nav
ajout de style

#19/03/2020#

modification du css dans HeaderStyled, SearchBarStyled, QuestionStyled, QuestionsPageStyled, SignInStyled, AppStyled, NavStyled
ajout de style

#20/03/2020#

modification du css dans HeaderStyled, LoginStyled, SearchBarStyled, CounterSTyled, QuestionStyled, SignInStyled, SettingStyled, SortButtonsStyled
ajout de style

#21/03/2020#

modification du css et des style NavStyled, SettingsStyled, SortButtonsStyled, LoginFormStyled, SearchBarStyled

#22/03/2020#

modificationdu css et des styles AnswerPageStyled, AddQuestionStyled, AddquestionFormStyled

##Techno##

#17/03/2020#

react
react-dom
styled-components


##Framework##

##Outil logiciel##

##Site internet##

GitHub, Stackoverflow


##Bugs##

#17/03/2020#

ERROR in multi (webpack)-dev-server/client?http://localhost:8080(webpack)/hot/dev-server.js ./src/styles/index.css ./src/index.js
Module not found: Error: Can't resolve '/UserS/vanessasenotier/desktop/pro/spé REACT/project-ask/src/styles/index.css' in
'Users/vanessasenotier/desktop/pro/spé REACT/project-ask'

#19/03/2020#

- problème de pull du code
- problème sur le composant question puis questions

#20/03/2020#

- problème pour faire la route du composant login et son composant déroulant


##Correction de bugs##

#17/03/2020#

nous avons constatez que la route de index.css était issue de src alors que dans notre projet elle vient du document assets contenue dans src
IL A DONC FALLU MODIFIER LE FICHIER DE CONFIG webpack.common.js au niveau de la logne 9 pour modifier l'entrée paths.src + '/styles/index.scss',
par paths.assets + '/styles/index.css',

#19/03/2020#

- lecture de la fiche récap de github
- analyse de la structure afin de comprendre la logique du code et donc afin de choisir si on nomme question ou questions

#21/03/2020#

bugs du 20/03/2020
résolu par nicolas et vanessa
il manquais des parametre to="" pour spécifier le chemin des navlink dans un des composant
et il y avait un composant qui importais pas son container donc bug de proptypes
