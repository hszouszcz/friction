import React from 'react';
import '../../scss/about.css';
import Bullets from './bullets';
import AboutContent from './aboutContent';
import Button from '../shared/Button';
import banner from '../../assets/img/main.png'
import mobileBanner from '../../assets/img/banner-mobile.png'
const About = () => (
  <div className="about">
    <img src={banner} className="screen-img"/>
    <img src={mobileBanner} alt="" className="mobile-img"/>
    <div className="col-md-10 offset-md-1">
      <div className="row bullets">
        <Bullets/>
      </div>
      <AboutContent
        title={'O nas'}
        firstColumn={
          `
            Friction.pl powstało z końcem 2010 roku jako firma specjalizująca się w naprawie i podklejaniu obuwia wspinaczkowego.
Jesteśmy grupą wspinających się przyjaciół. Za nami wiele sezonów wspinaczkowych w różnych formacjach i
rodzajach skały na kilku kontynentach. W tym czasie udało nam się zużyć 'kilka' par butów wspinaczkowych
począwszy od legendarnych korkerów poprzez nie mniej legendarne Ninja i Lasery aż do współczesnych topowych modeli. `
        }
        secondColumn={
          `Doświadczenie pozwala nam na dobre rozumienie różnych aspektów użycia i konstrukcji
             buta wspinaczkowego. Dzięki temu jesteśmy w stanie sprostać nawet najwyższym oczekiwaniom.
             Niezależnie od poziomu na jakim się wspinasz, buty wspinaczkowe odgrywają kluczową rolę. Precyzja
             i dobre czucie skały pozwalają skupić się na drodze i cieszyć się wspinaniem. Dlatego też naszym
             priorytetem jest zapewnienie najwyższej jakości wykonywanych napraw.`
        }
      />

    </div>
  </div>
);


export default About;