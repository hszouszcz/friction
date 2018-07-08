import React from 'react';
import '../../scss/docs.css';

const OrderRules = (props) => {
  return (
    <div className="order-rules docs col-md-6 offset-md-1">
      <div className="breadcrumbs">Poradnik - Obsługa zamówienia</div>
      <div className="title">Jak złożyć zamówienie</div>
      <div className="anchor-title">
        Krok pierwszy: Złożenie zamównienia
      </div>
      <div className="anchor-text">
        - dodaj do koszyka i opisz każdą wysyłaną do naprawy parę butów
        - wprowadź swoje dane oraz adres do wysyłki
        - wybierz sposób płatności i rodzaj przesyłki zwrotnej
        - potwierdź zamówienie
      </div>
      <div className="anchor-title">
        Krok drugi: Wysłanie butów
      </div>
      <div className="anchor-text">
        - poczekaj na e-mailowe potwierdzenie z numerem zamówienia
        - wyczyść i przygotuj buty do wysyłki
        - dołącz do paczki numer zamówienia
      </div>
      <div className="anchor-title">
        Krok trzeci: Płatność i realizacja
      </div>
      <div className="anchor-text">
        - poczekaj aż paczka dotrze do nas
        - po zweryfikowaniu zakresu naprawy przyjmujemy zlecenie do realizacji
        - wysyłamy e-maila z potwierdzeniem ostatecznej wyceny
        - dla płatnosci przelewem przesyłamy też prośbę o wykonanie zapłaty
        - platności pobraniowe oraz gotówkowe są regulowane przy odbiorze paczki
      </div>
      <div className="anchor-title">
        Krok czwarty: Paczka zwrotna
      </div>
      <div className="anchor-text">
        - po wykonaniu naprawy przygotowujemy paczkę zwrotną
        - zamawiamy kuriera lub przesyłkę pocztowa
        - po nadaniu paczki wysyłamy e-mailem potwierdzenie wysyłki
        Pozostałe szczegóły związane ze składaniem zamówień przedstawione są na podstronie Regulamin.

      </div>
      <div className="anchor-title">
        Ile zajmuje naprawa butów?
      </div>
      <div className="anchor-text">
        Większość napraw butów wspinaczkowych wykonujemy w czasie 5-7 dni roboczych od momentu otrzymania przesyłki.
        Część napraw gotowa jest wcześniej, dotyczy to butów, które zostały przysłane we właściwym stanie i nie wymagały
        żadnych dodatkowych zabiegów. Natomiast niektóre naprawy zajmują nieco więcej czasu, zazwyczaj spowodowane jest to
        większymi uszkodzeniami, które wymagają dodatkowych prac.

        Naprawy butów poejściowych i górskich zależą od zakresu uszkodzeń, typowa wymiana podeszwy i/lub rantów trwa 7-10 dni roboczych.
      </div>
    </div>
  );
};

export default OrderRules;
