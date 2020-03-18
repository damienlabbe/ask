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

##Css##

#17/03/2020#

styled-components
création de fichiers theme.js, style.css, reset.css

#18/03/2020#

##Techno##

#17/03/2020#

react
react-dom
styled-components

##Framework##

##Outil logiciel##

##Site internet##

##Bugs##

#17/03/2020#

ERROR in multi (webpack)-dev-server/client?http://localhost:8080(webpack)/hot/dev-server.js ./src/styles/index.css ./src/index.js
Module not found: Error: Can't resolve '/UserS/vanessasenotier/desktop/pro/spé REACT/project-ask/src/styles/index.css' in
'Users/vanessasenotier/desktop/pro/spé REACT/project-ask'

##Correction de bugs##

#17/03/2020#

nous avons constatez que la route de index.css était issue de src alors que dans notre projet elle vient du document assets contenue dans src
IL A DONC FALLU MODIFIER LE FICHIER DE CONFIG webpack.common.js au niveau de la logne 9 pour modifier l'entrée paths.src + '/styles/index.scss',
par paths.assets + '/styles/index.css',
