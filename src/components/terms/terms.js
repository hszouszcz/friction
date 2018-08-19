import React from 'react';
import '../../scss/docs.css';
import {Link} from 'react-router-dom';

const Terms = (props) => {
  return (
    <div className="terms docs col-md-6 offset-md-1">
      <div className="breadcrumbs">Najważniejsze informacje dotyczące zamówień</div>
      <div className="title">Regulamin zamówień</div>
      <div className="links">
        <Link smooth to="/terms#last">Składanie zamówień</Link>
        <Link smooth to="/terms">Ceny</Link>
        <Link smooth to="/terms">Przygotowanie butów do naprawy</Link>
        <Link smooth to="/terms"> Realizacja zamówień</Link>
        <Link smooth to="/terms">Czas reazlizacji naprawy</Link>
        <Link smooth to="/terms">Tryb ekspresowy</Link>
        <Link smooth to="/terms">Faktury VAT</Link>
        <Link smooth to="/terms">Dostawa</Link>
        <Link smooth to="/terms">Formy płatnośći</Link>
        <Link smooth to="/terms">Nieodebranie zamówienia w terminie</Link>
        <Link smooth to="/terms">Gwarancja</Link>
      </div>

      <div className="common-text anchor-text-padding">
        Właścicielem portalu friction.pl jest firma Friction s.c. z siedzibą pod adresem ul. Szuwarowa 6/113, 30-384
        Kraków, posługująca się numerem NIP 676-242-62-03. Niniejszy regulamin określa zasady i warunki świadczenia
        usług naprawy obuwia wspinaczkowego i trekkingowego przez firmę Friction.
      </div>

      <div className="anchor-title">
        Składanie zamówień
      </div>
      <div className="common-text anchor-text-padding">
        Zamówienia składa się drogą elektroniczną poprzez wypełnienie internetowego formularza Zamówienia. Poszczególne
        pary butów powinny być dodane jako osobne pozycje w koszyku. Po wprowadzeniu danych kontaktowych, na podany w
        zamówieniu adres e-mail wysyłane jest potwierdzenie zamówienia. Numer zamówienia otrzymany w potwierdzeniu
        należy załączyć do przesyłanej do nas (we własnym zakresie) paczki. Paczki prosimy adresować używając danych z
        podstrony Kontakt Prosimy też wstrzymać się z wykonywaniem przelewu do momentu odebrania przez nas przesyłki.
        W razie jakichkolwiek problemów z przesyłką najszybszym sposobem ich wyjaśnienia jest kontakt telefoniczny,
        dlatego prosimy o podanie numeru telefonu w formularzu zamówienia.
      </div>
      <div className="anchor-title">
        Ceny
      </div>
      <div className="common-text anchor-text-padding">
        Podane ceny usług są cenami brutto, tj. zawierają podatek VAT.
      </div>
      <div className="anchor-title">
        Przygotowanie butów wspinaczkowych do naprawy
      </div>
      <div className="common-text anchor-text-padding">
        - Wysyłane do naprawy buty powinny być czyste.
        - Po wyczyszczeniu buty należy dokładnie wysuszyć, unikając intensywnych źródeł ciepła.
        - Bezwzględnie nie należy prać butów ze skóry naturalnej TUŻ PRZED wysłaniem do naprawy.
        - Skórzane buty po wypraniu należy założyć na 1-2 treningi aby mogły odzyskać dopasowanie do stopy.
        - Prosimy też nie wyciągać sznurówek.

        Pranie butów oraz szybkie suszenie butów wspinaczkowych powoduje kurczenie się skóry, w skutek czego buty mogą
        nieco się odkształcać. Jest to naturalny proces, buty po praniu przez pewien okres są nieco ciaśniejsze i muszą
        ponownie dopasować się do stopy. Natomiast, jeśli tuż po praniu dokonamy wymiany rantów i podeszwy buty mogą z
        tego powodu stać się ciaśniejsze i utracić nieco fason.
      </div>
      <div className="anchor-title">
        Realizacja zamówień
      </div>
      <div className="common-text anchor-text-padding">
        W momencie odebrania przesyłki sprawdzamy, czy zamówione usługi zgadzają się ze stanem faktycznym. Jeśli
        konieczna jest korekta (np. dodatkowa wymiana rantów) dokonujemy aktualizacji wyceny zamówienia.
        Odebranie paczki potwierdzamy emailem, przesyłając ewentualną zmianę wyceny. Dla zamówień z płatnością przelewem
        bankowym prosimy w tym momencie o wykonanie przelewu z podaniem numeru zamówienia. Potwierdzone zamówienie
        przechodzi do realizacji. Po ukończeniu naprawy przygotowujemy i wysyłamy paczkę zwrotną. Wysyłamy również
        emaila informującego o nadaniu przesyłki.
      </div>
      <div className="anchor-title">
        Czas realizacji naprawy
      </div>
      <div className="common-text anchor-text-padding">
        W przypadku większości zamówień czas realizacji waha się w granicach 5-10 dni roboczych dla butów wspinaczkowych
        i 7-14 dni roboczych dla butów trekkingowych. Maksymalny czas realizacji zamówienia to 14 dni roboczych. W
        szczególnych przypadkach (np. duże zamówienia grupowe, zdarzenia losowe) termin realizacji może ulec
        nieznacznemu wydłużeniu.
        W uzasadnionych przypadkach rezerwujemy sobie prawo do odmowy realizacji zamówienia. Dotyczy to skrajnych
        przypadków uszkodzeń konstrukcji buta, które uniemożliwiają ich naprawę.
      </div>
      <div className="anchor-title">
        Tryb ekspresowy
      </div>
      <div className="common-text anchor-text-padding">
        Naprawy w trybie ekspresowym wykonywnae są w czasie do 4 dni roboczych. Tryb ekspresowy wiąże się z dopłatą 30%
        i wymaga uprzedniego potwierdzenia telefonicznego.
      </div>
      <div className="anchor-title">
        Faktury VAT
      </div>
      <div className="common-text anchor-text-padding">
        Na życzenie klienta wystawiamy fakturę VAT. W celu otrzymania faktury należy zaznaczyć odpowiednią opcję w
        trakcie składania zamówienia oraz podać dane do faktury.
      </div>
      <div className="anchor-title">
        Dostawa
      </div>
      <div className="common-text anchor-text-padding">
        Kosztami przesyłki zwrotnej obciążany jest zamawiający. Dla przesyłek krajowych dostępne są następujące sposoby
        dostawy: przesyłka kurierska, przesyłka pocztowa, odbiór osobisty w Krakowie w oddziale przy ul. Romanowicza
        4/543.
        Termin otrzymania przesyłki po wykonaniu naprawy = czas realizacji naprawy + przewidywany czas dostawy. Czas
        dostawy: przesyłka kurierska: 1 dzień roboczy, paczka pocztowa: 1-2 dni robocze. Koszt przesyłki zagranicznej
        według taryfy wybranego dostawcy.

        Dla zamówień 6 par lub więcej krajową przesyłkę zwrotną wysyłamy na nasz koszt.

        W momencie odbierania przesyłki prosimy o dokładne sprawdzenie paczki i upewnienie się, że dotarła ona w
        nienaruszonym stanie. Dochodzenie ewentualnych roszczeń wobec firmy transportowej za szkody wynikłe ze zniszeń,
        lub uszkodzeń przesyłki bądź towarów są często niemożliwe, lub bardzo trudne po odebraniu niesprawdzonej
        przesyłki.

        Obowiązkiem odbiorcy jest sprawdzenie stanu odbieranej paczki.
      </div>
      <div className="anchor-title">
        Formy płatności
      </div>
      <div className="common-text anchor-text-padding">
        Akceptowane formy płatności to: przelew na konto bankowe (przesyłki niepobraniowe), płatność w momencie odbioru
        paczki (przesyłka pobraniowa) oraz gotówka (odbiór osobisty). Dla przelewów bankowych (dane do przelewu w
        zakładce Kontakt) prosimy o podanie numeru zamówienia w tytule przelewu. Pozwola to na przyspieszenie obsługi
        płatności i wysyłki.
      </div>
      <div className="anchor-title">
        Nieodebranie zamówienia w terminie
      </div>
      <div className="common-text anchor-text-padding">
        Zamawiający naprawę akceptuje, że w przypadku nieodebrania naprawionego obuwia w wyznaczonym terminie firma
        Friction s.c. będąca wykonawcą naprawy nie jest zobowiązana do przechowywania danego zamówienia.
        Zamawiający poprzez nieodebranie wyrobu w terminie do trzech miesięcy od dokonania naprawy wyraża zgodę na
        utylizacje zamówienia przez Friction s.c.
        Nieodebranie naprawionego obuwia nie zwalnia Zamawiającego od obowiązku uiszczenia opłaty w kwocie ceny naprawy.
      </div>
      <div className="anchor-title">
        Gwarancja
      </div>
      <div className="common-text anchor-text-padding">
        Do każdej przesyłki dołączany jest paragon lub faktura VAT, będące podstawą gwarancji. Gwarancja obejmuje
        wykonane usługi w ramach naprawy obuwia wspinaczkowego i trekkingowego w zakresie wymiany podeszwy oraz rantów.
        Nie objęte gwarancją pozostają natomiast wszelkie uszkodzenia lub zużycia (rantów, podeszwy) powstałe w wyniku
        normalnego użytkowania obuwia lub też będące wynikiem uszkodzeń mechanicznych lub innych powstałych z winy
        klienta.
      </div>
      <div className="common-text anchor-text-padding">Kraków, 2014-01-18, ostatnia aktualizacja 2017-04-04</div>
    </div>
  );
};

export default Terms;
