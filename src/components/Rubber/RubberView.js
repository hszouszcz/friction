import React from 'react';
import '../../scss/docs.css';
import { HashLink as Link } from 'react-router-hash-link';
import RubberType from './RubberType';
import RubberThickness from './RubberThickness';

const RubberView = (props) => {
  return (
    <div className="RubberView docs col-md-6 offset-md-2">
      <div className="breadcrumbs">Poradnik - Gumy wspinaczkowe</div>
      <div className="title">Czym różnią się dostępne rodzaje gum na podeszwę?</div>
      <div className="links">
        <Link smooth to="/rubbers#rubber-type">Wybór rodzaju gumy</Link>
        <Link smooth to="/rubbers#rubber-thickness">Wybór grubości gumy</Link>
        <Link smooth to="/rubbers#edges-thickness">Grubość rantów standardowa czy zwiększona?</Link>
      </div>
      <div className="common-text anchor-text-padding">
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
      <div className="anchor-title" id="rubber-type">
        Wybór rodzaju gumy
      </div>
      <div className="common-text anchor-text-padding">
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
      <div className="anchor-title" id="rubber-thickness">
        Wybór grubości gumy
      </div>
      <div className="common-text anchor-text-padding">
        Kolejną ważną kwestią związaną z podklejeniem obuwia wspinaczkowego jest dobór grubości podeszwy.
        Podstawowe kryteria wyboru grubości podeszwy przedstawiamy poniżej
      </div>
      <RubberThickness
        name="3.5mm"
        description='Cieńsza podeszwa pozwala na większą precyzję i lepsze czucie skały.
         Daje zarazem nieco bardziej miękkiego buta, co powoduje, że jest to opcja dla wspinaczy,
          którym bardziej zależy na dobrym czuciu stopni niż sztywności podeszwy. Grubość 3,5 mm jest też
           dobrym wyborem dla osób o małym rozmiarze stopy (35-36) lub o masie ciała.'
      />
      <RubberThickness
        name="4mm (standard)"
        description='Typowy rodzaj grubości, który stosowany jest w większości produkowanych butów w rozmiarach "średnich".
         Oferuje optymalny wybór między trwałością podeszwy a czuciem skały.'
      />
      <RubberThickness
        name="5mm"
        description="Cieńsza podeszwa pozwala na większą precyzję i lepsze czucie skały.
         Daje zarazem nieco bardziej miękkiego buta, co powoduje, że jest to opcja dla wspinaczy,
          którym bardziej zależy na dobrym czuciu stopni niż sztywności podeszwy. Grubość 3,5 mm jest też
           dobrym wyborem dla osób o małym rozmiarze stopy (35-36) lub o niskiej masie ciała."
      />
      <div className="anchor-title" id="edges-thickness">
        Grubość rantów standardowa czy zwiększona?
      </div>
      <div className="common-text anchor-text-padding">
        Grubość rantów, podobnie jak grubość podeszwy, ma istotny wpływ na czucie, precyzję oraz twardość butów
        wspinaczkowych.
      </div>
      <div className="rubber-type">
        <div className="row">
          <div className="col-3 rubber-name ">
            Standardowa
          </div>
          <div className="col-9">
            <div className="common-text anchor-text-padding">
              Grubość typowa dla danego modelu buta, możliwie jak najbardziej zbliżona
              do grubości stosowanej przez producenta.
              Daje dobre czucie i jest polecana do wspinaczki wymagającej jak najwięcej precyzji.

              <div style={{fontWeight: 600, color: 'black', paddingTop: 30}}>
                Jeśli lubisz buty o dobrym, optymalnym czuciu i/lub najpierw ścierasz podeszwę, a potem ranty, grubość
                Standardowa jest dla Ciebie.
              </div>

            </div>
          </div>
        </div>
        <div className="rubber-type" style={{borderBottom: 'none'}}>
          <div className="row">
            <div className="col-3 rubber-name ">
              Zwiększona
            </div>
            <div className="col-9">
              <div className="common-text anchor-text-padding">
                Ranty o zwiększonej grubości charakteryzują się znacznie słabszym czuciem skały.
                Polecane są wspinaczom, którzy preferują twardsze buty, oferujące większy komfort kosztem słabszego
                czucia).
                Niewskazane są natomiast dla bardzo małych rozmiarów stopy (34-35 EUR) gdzie mogą nadmiernie
                pozbawiać buty precyzji i czucia.

                <div style={{fontWeight: 600, color: 'black', paddingTop: 30}}>
                  Zwiększona grubość rantów jest dla Ciebie jeśli:
                  <ul>
                    <li>
                      najpierw wycierasz dziurę na rantach, a potem na podeszwie
                    </li>
                    <li>
                      poszukujesz bardziej trwałej opcji (np. na panel)
                    </li>
                    <li>
                      preferujesz jak najbardziej twarde i sztywne buty
                    </li>
                  </ul>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RubberView;
