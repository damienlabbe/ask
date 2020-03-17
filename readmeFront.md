--history--
17/03/2020
initialization react model
yarn
structure de l'application:
dossier principaux: config, public, src
dossier de src: actions,assets, components, containers,middleware,reducers,store
    dossier de assets: fonts et styles
    dossier de components: app, footer, header, main, nav
    dossier de containers: main
        dossier de main: question
            dossier de question: counter

code de counter et definition des contenus des différents dossiers

--css--
styled-components
création de fichiers theme.js, style.css, reset.css

--techno--
react
react-dom
styled-components

--framework--

--outil logiciel--

--site internet--

--bugs--

ERROR in multi (webpack)-dev-server/client?http://localhost:8080(webpack)/hot/dev-server.js ./src/styles/index.css ./src/index.js
Module not found: Error: Can't resolve '/UserS/vanessasenotier/desktop/pro/spé REACT/project-ask/src/styles/index.css' in
'Users/vanessasenotier/desktop/pro/spé REACT/project-ask'

--correction de bugs--
nous avons constatez que la route de index.css était issue de src alors que dans notre projet elle vient du document assets contenue dans src
IL A DONC FALLU MODIFIER LE FICHIER DE CONFIG webpack.common.js au niveau de la logne 9 pour modifier l'entrée paths.src + '/styles/index.scss',
par paths.assets + '/styles/index.css',
