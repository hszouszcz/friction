import React from 'react';
import '../../scss/docs.css';
import {Link} from 'react-router-dom';
import RubberType from './RubberType';

const RubberView = (props) => {
  return (
    <div className="RubberView docs col-md-10 offset-md-1">
      <div className="breadcrumbs">Poradnik - Gumy wspinaczkowe</div>
      <div className="title">Czym różnią się dostępne rodzaje gum na podeszwę?</div>
      <div className="links">
        <Link smooth to="/rubber-view">Wybór rodzaju gumy</Link>
        <Link smooth to="/rubber-view">Wybór grubości gumy</Link>
        <Link smooth to="/rubber-view">Grubość rantów standardowa czy zwiększona?</Link>
      </div>

      <div className="anchor-text">
        Gumy stosowane na podeszwy obuwia wspinaczkowego ewoluowały od prawie 30 lat. Tak długi okres pracy różnych
        ośrodków badawczo-wdrożeniowych przyczynił się do obecnej bardzo szerokiej oferty. W Polsce od wielu lat
        największą renomą i popularnością cieszyły się gumy produkowane przez firmę Stealth, którymi były fabrycznie
        podklejane buty 5.10. Od kilku lat równym uznaniem wspinacze zaczęli darzyć najnowsze produkty firmy Vibram.
        Prezentowane zestawienie powstało w oparciu o kilka czynników. W pierwszej kolejności bazuje na naszym
        doświadczeniu i zawiera nasze wieloletnie obserwacje wsparte konsultacjami ze wspinaczami o różnym poziomie
        zaawansowania i uprawiających różne dyscypliny wspinaczkowe. Uwględniliśmy też dane katalogowe producentów gum
        oraz butów wspinaczkowych.

        Analizując prezentowane zestawienie warto uwzględnić:
        <ul>
          <li>Gumy stosowane na podeszwy obuwia wspinaczkowego ewoluowały od prawie 30 lat. Tak długi okres pracy
            różnych ośrodków badawczo-wdrożeniowych przyczynił się do obecnej bardzo szerokiej oferty. W Polsce od wielu
            lat największą renomą i popularnością cieszyły się gumy produkowane przez firmę Stealth, którymi były
            fabrycznie podklejane buty 5.10. Od kilku lat równym uznaniem wspinacze zaczęli darzyć najnowsze produkty
            firmy Vibram.
            Prezentowane zestawienie powstało w oparciu o kilka czynników. W pierwszej kolejności bazuje na naszym
            doświadczeniu i zawiera nasze wieloletnie obserwacje wsparte konsultacjami ze wspinaczami o różnym poziomie
            zaawansowania i uprawiających różne dyscypliny wspinaczkowe. Uwględniliśmy też dane katalogowe producentów
            gum oraz butów wspinaczkowych.

            Analizując prezentowane zestawienie warto uwzględnić:
          </li>
          <li>Własne preferencje - wśród wspinaczy występują zwolennicy gum tarciowych, krawądkowych, czy też
            określonych producentów.
          </li>
          <li>Miejsce aktywności wspinaczkowej, gdzie będziemy wykorzystywać podklejone obuwie - nie każdy rodzaj gumy
            wszędzie sprawdzi się tak samo dobrze.
          </li>
          <li>Ważną obserwacją, sygnalizowaną przez wielu wspinaczy, jest pogorszenie się kontaktu gumy ze skałą w
            niższych temperaturach. W takich warunkach często wskazywano wyższą skuteczność gum tarciowych nad
            krawądkowymi.
          </li>
        </ul>


      </div>
      <div className="anchor-title">
        Wybór rodzaju gumy
      </div>
      <div className="anchor-text">
        Gumy tarciowe - grupa gum o wysokim współczynniku tarcia, charakteryzujących się bardzo dobrą zdolnością do
        kontaktu ze skałą. Najczęściej są to gumy miękkie, dobrze wypełniające fakturę skały (mikronierówności) i
        zapewniające maksymalną powierzchnię kontaktu podeszwy ze stopniem.

        Gumy krawądkowe - gumy charakteryzujące się małą podatnością na odkształcenia związane ze wspinaniem po
        mikrorzeźbie (mikrokrawądki, ząbki, kryształki, itp.), przy jednoczesnym zapewnieniu dobrego tarcia.
      </div>
      <RubberType
        name="Vibram XS Grip2"
        description="Rewelacyjna, miękka guma tarciowa, jedna z najlepszych gum firmy Vibram. W opinii wielu wspinaczy oferuje najlepszą skuteczność wspinania w precyzyjnym tarciowym terenie. Szczególnie polecana do dużych przewieszeń i boulderingu."
        thickness={50}
        friction={20}
        edge={60}
      />
      <RubberType
        name="Vibram XS Grip2"
        description="Rewelacyjna, miękka guma tarciowa, jedna z najlepszych gum firmy Vibram. W opinii wielu wspinaczy oferuje najlepszą skuteczność wspinania w precyzyjnym tarciowym terenie. Szczególnie polecana do dużych przewieszeń i boulderingu."
        thickness={50}
        friction={20}
        edge={60}
      />
      <div className="anchor-title">
        Grubość rantów standardowa czy zwiększona?
      </div>
      <div className="anchor-text">
        Grubość rantów, podobnie jak grubość podeszwy, ma istotny wpływ na czucie, precyzję oraz twardość butów
        wspinaczkowych.
      </div>

    </div>
  );
};

export default RubberView;
