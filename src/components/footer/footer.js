import React from 'react';
import './../../scss/footer.css';
const Footer = () => (
    <footer>
        <div className="row col-md-10 offset-md-1">
         <div className="col-md-4 col-lg-3 section logo">logo</div>
            <div className="col-md-4 col-lg-3  section">
            <div className="title">Adres</div>
            <div>Friction</div>
            <div>ul. Cieszyńska 9/137</div>
            <div>30-015 Kraków</div>
        </div>
        <div className="col-md-4 col-lg-3 section">
        <div className="title">Email i telefon</div>
            <div>+48 790 540 570</div>
            <div>+48 535 18 18 01</div>
            <div>friction@friction.pl</div>
        </div>
        <div className="col-md-4 col-lg-3 section">
            <div className="title">Godziny otwarcia</div>
            <div>pn. i sr. 8 - 18</div>
            <div>wt. czw. pt 8 - 16</div>
            <div>fb</div>
        </div></div>
    </footer>
);

export default Footer;