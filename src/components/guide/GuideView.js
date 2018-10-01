import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import '../../scss/docs.css';
const GuideView = (props) => {
  return (
    <div className="guide-view docs col-md-6 offset-md-1">
      <div className="breadcrumbs">Poradnik - Naprawa butów wspinaczkowych</div>
      <div className="title">Dlaczego warto naprawić buty wspinaczkowe?</div>
      <div className="links">
        <Link smooth to="/guide#last" >Wygoda</Link>
        <Link smooth to="/guide">Koszt</Link>
        <Link smooth to="/guide">Na czym polega naprawa butów</Link>
        <Link smooth to="/guide">Kiedy konieczna jest naprawa</Link>
        <Link smooth to="/guide">Jaką grubośc podeszwy wybrać</Link>
        <Link smooth to="/guide">Co to są ranty?</Link>
        <Link smooth to="/guide">Kiedy ranty ulegają uszkodzeniu</Link>
        <Link smooth to="/guide">Jak mogę ustalić czy wymiana rantyów jest konieczna?</Link>
        <Link smooth to="/guide">Jak wykonujemy ranty?</Link>
        <Link smooth to="/guide#edge-replacement">Czy mogę naprawić tylko ranty bez wymieniany podeszw?</Link>
        <Link smooth to="/guide#not-least">Ile razy można podjklejać buty?</Link>
        <Link smooth to="/guide#last">Jak najlepiej dbać o buty?</Link>
      </div>
      <div className="anchor-title">
        Wygoda
      </div>
      <div className="common-text anchor-text-padding">
        Rozbicie i dopasowanie się do stopy nowych butów zajmuje zazwyczaj całkiem sporo czasu. Dopiero po tym procesie
        buty uzyskują najlepszą precyzję oraz czucie. Jednak z czasem guma na podeszwie ulega wytarciu i buty, mimo że
        idealnie dopasowane, nie pracują już tak dobrze. Wymiana zużytej podeszwy w takich butach pozwala nie tylko
        zachować ich dopasowanie, ale przywraca też pierwotne parametry i precyzję.
      </div>
      <div className="anchor-title">
        Koszt
      </div>
      <div className="common-text anchor-text-padding">
        Naprawa butów wspinaczkowych jest opcją znacznie tańszą niż zakup nowej pary. Dotyczy to zwłaszcza butów z
        górnej półki.
      </div>
      <div className="anchor-title">
        Na czym polega naprawa butów?
      </div>
      <div className="common-text anchor-text-padding">
        Naprawa butów wspinaczkowych najczęściej dotyczy uszkodzeń i zużycia gumy na podeszwie oraz na przedniej części
        buta. Najprostszym przypadkiem jest wymiana samych podeszw, tzn. usunięcie starej gumy i zastąpienie jej nową
        warstwą naklejaną na gorąco z użyciem najnowszych materiałów i technologii. Proces ten przywraca oryginalne
        właściwości buta. W sytuacji kiedy but uległ większemu zużyciu na czubku konieczna może się okazać również
        wymiana rantów. Po takiej pełnej naprawie buty otrzymują zarówno nowe ranty jak i podeszwę.
      </div>
      <div className="anchor-title">
        Jaką grubość gumy wybrać na podeszwę?
      </div>
      <div className="common-text anchor-text-padding">
        1. Cieńsza guma (4 mm) sprawia, że but będzie miał lepsze czucie i będzie bardziej precyzyjny. Równocześnie
        cieńsza podeszwa ulega szybszemu zużyciu i daje bardziej 'miękkiego' buta.
        2. Zalety grubszej gumy (5 mm) to większa sztywność buta po podklejeniu oraz większa trwałość przy nieco
        słabszym czuciu.
        Wybór grubości podeszwy jest więc kompromisem pomiędzy precyzją (cieńsza guma) a trwałością (grubsza guma).
        Więcej szczegółowych informacji dotyczących doboru gumy na podeszwę można znaleść w dziale Gumy wspinaczkowe.
      </div>
      <div className="anchor-title">
        Co to są ranty?
      </div>
      <div className="common-text anchor-text-padding">
        Rant to cienki pasek gumy, który otacza przód i boki buta i zawija się pod podeszwę. Ranty w sporym stopniu
        decydują o kształcie czubka buta oraz są bazą, do której jest przyklejona podeszwa.
      </div>
      <div className="anchor-title">
        Kiedy ranty ulegają uszkodzeniu?
      </div>
      <div className="common-text anchor-text-padding">
        Podczas wspinania zawsze występuje mniejszy lub większy kontakt rantów ze skałą. Powoduje to, że z czasem ranty
        ulegają stopniowemu wytarciu. Szybkość zużycia rantów w dużym stopniu zależy od stylu wspinania i rodzaju
        formacji (np. haczenie palców stopy i wspinanie w rysach bardzo mocno obciążają ranty).
        Bardzo szybkie zużycie rantów występuje również wtedy, gdy dopuścimy do nadmiernego zużycia podeszwy na czubku
        buta. Wspinając się dalej w takich butach zamiast podeszwy zaczynamy obciążać gumę rantów. W ekstremalnych
        przypadkach, po przetarciu rantu, może również dojść do uszkodzenia szwów oraz wewnętrznej konstrukcji buta.

        Im mniej uszkodzeń, tym mniejsza ingerencja i lepszy efekt naprawy!
      </div>
      <div className="anchor-title">
        Jak mogę ustalić czy wymiana rantów jest konieczna?
      </div>
      <div className="common-text anchor-text-padding">
        1. Jeśli guma na rantach w okolicy czubka buta jest przetarta, ma widoczne nacięcia, przekłucia lub wyraźnie
        wyczuwalny pod palcem spadek grubości, wówczas wymiana rantów jest konieczna.
        2. Nawet jeśli ranty nie mają wyraźnych przetarć miejscowych, ich stan ogólny może być na tyle zły (co widać
        najlepiej po usunięciu starej podeszwy), że wymiana ich będzie niezbędna. W przeciwnym przypadku uszkodzenie
        rantu mogłoby nastąpić niedługo po wymianie podeszwy na nową pozbawiając świeżo podklejone buty swojej funkcji.
        W razie wątpliwości najlepiej zdać się na naszą ocenę i wybrać opcję 'Według uznania'.
      </div>
      <div className="anchor-title">
        Jak wykonujemy ranty?
      </div>
      <div className="common-text anchor-text-padding">
        Każdy but posiada swój charakterystyczny profil i geometrię, które powodują, że będąc idealnym dla jednej stopy
        zupełnie nie leży na innej. O kształcie buta decydują ranty oraz cholewka (materiał wewnętrzny, szycie).
        Wymianę rantów przeprowadzamy bardzo starannie. Nie stosujemy uniwersalnego wzoru, każdy model traktujemy
        indywidualnie, dopasowując ranty zgodnie z kształtem fabrycznym. W ten sposób staramy się, aby buty zachowały
        jak najwięcej ze swojej pierwotnej geometrii.
      </div>
      <div className="anchor-title">
        Czy mogę naprawić tylko ranty butów bez wymiany podeszwy?
      </div>
      <div className="common-text anchor-text-padding" id="edge-replacement">
        Wymiana samych rantów nie jest możliwa. Wynika to z konstrukcji buta wspinaczkowego, bowiem podeszwa jest
        przyklejona do rantów i jej zeszlifowanie jest konieczne do wymiany rantów.
      </div>
      <div className="anchor-title" id="not-least">
        Ile razy można podklejać buty?
      </div>
      <div className="common-text anchor-text-padding" id="last">
        Zazwyczaj, w przypadku butów w dobrym stanie, nieuszkodzonych i niezużytych nadmiernie, pierwsze dwa podklejenia
        dają bardzo dobre rezultaty.
        Przy kolejnych podklejeniach, lub przy większych uszkodzeniach, trzeba liczyć się ze stopniową utratą
        pierwotnych cech buta i pogorszeniem precyzji. Wynika to z utraty fasonu buta, będącej skutkiem naturalnego
        zużycia oraz wszelkich operacji wykonywanych na bucie podczas napraw. Dodatkowo, w przypadku butów wykonanych ze
        skóry naturalnej, następuje naturalne 'rozbicie się' buta z czasem i powiększenie jego rozmiaru o 1/4 do 1/2
        numeru.
      </div>
    </div>
  );
};

GuideView.propTypes = {};
GuideView.defaultProps = {};

export default GuideView;


