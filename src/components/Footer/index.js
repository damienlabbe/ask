// == Import npm
import React from 'react';

// == Import locaux
// import de la feuille de style associée
import FooterStyled from './FooterStyled';

// == Composant
// ici on a la fonction qui renvoi le formulaire de structure du footer
// composé des contact, mentions légales et copyright
const Footer = () => (
  <FooterStyled>
    <a>CONTACT</a>
    <a>MENTIONS LEGALES</a>
    <a>COPYRIGHT</a>
  </FooterStyled>
);

// == Export
export default Footer;
