import React from 'react';
import '../../scss/docs.css';
import {Link} from 'react-router-dom';

const Treks = (props) => {
  return (
    <div className="Treks docs col-md-6 offset-md-1">
      <div className="breadcrumbs">Poradnik - buty podejściowe i trekkingowe</div>
      <div className="title">Podeszwy do butów podejściowych i górskich</div>
      <div className="links">
        <Link smooth to="/treks">Lekkie buty podejściowe</Link>
        <Link smooth to="/treks">Buty podejściowe i trekkingowe - podeszwa gumowa</Link>
        <Link smooth to="/treks">Buty górskie i podejściowe z podeszwą amortyzowaną</Link>
      </div>

      <div className="anchor-title">
        Lekkie buty podejściowe
      </div>
      <div className="common-text">
        Do tej grupy zaliczają się niskie buty podejściowe i trekkingowe oraz wyższe buty trekkingowe o lekkiej
        konstrukcji. Buty o takiej budowie wyposażone są w stosunkowo cienką podeszwę, często z ochroną rantu na
        czubkach butów. W bardziej zaawansowanych i technicznych modelach przednia część podeszwy jest płaska (climbing
        zone) i umożliwia wykorzystanie takich butów również do wspinaczki np. w łatwym, podejściowym terenie górskim.

        Dostępne są dwie opcje wymiany podeszwy w butach podejściowych. Pierwszy wariant to naklejenie odpowiednio
        dobranej dedykowanej podeszwy Vibram. W zamówieniu należy jako rodzaj podeszwy wybrać opcję 'Podeszwa
        podejściowa Vibram'.

        Druga grupa podejściówek jest wyposażona w podeszwy z gumy typu dotty. Do tej puli zaliczyć można także wiele
        modeli sandałów oraz butów sportowych, biegowych, itp. Możliwa jest wymiana całości lub połowy podeszwy, do
        wyboru dostępne są dwa rodzaje gum dotty: 'Guma Vibram Boulder Idrogrip 4,5 mm' oraz 'Guma Stealth C4 Dotty 4,5
        mm'.
      </div>
      <div className="anchor-title">
        Buty podejściowe i trekkingowe - podeszwa gumowa
      </div>
      <div className="common-text anchor-text-padding">
        Buty górskie i trekkingowe są butami o masywniejszej i wyższej budowie. Zazwyczaj cholewka buta sięga nieco
        powyżej kostki i umożliwia stabilne objęcie i trzymanie stopy. Wyposażone są w warstwę amortyzującą z pianki PU
        lub EVA oraz w niezależną podeszwę gumową o zwiększonej grubości.

        Wymiana podeszwy gumowej w butach z tej grupy wymaga wybrania w formularzu zamówienia opcji 'Podeszwa
        trekkingowa Vibram'.
      </div>
      <div className="anchor-title">
        Buty górskie i trekkingowe z podeszwą amortyzowaną
      </div>
      <div className="common-text anchor-text-padding">
        Część butów górskich i trekkingowych wyposażona jest w dedykowane podeszwy amortyzowane. Podeszwy tego rodzaju
        łączą w jednym elemencie zarówno warstwę pochłaniającą wstrząsy jak również warstwę gumową zapewniającą dobrą
        przyczepność do podłoża.

        Obecnie nie wykonujemy już wymiany podeszw w butach o takiej konstrukcji. Użytkownikom tego obuwia polecamy
        usługi firmy I-Szewc.
      </div>
    </div>
  );
};

export default Treks;
