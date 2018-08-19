import React from 'react';
import About from '../components/about/about';
import Guide from '../components/guide/guide';
import Rubber from '../components/Rubber/Rubber';
import Order from '../components/order/order';
import HeadTitle from '../components/header/HeadTItle';
import Banner from '../components/banner/banner';
const HomePage = (props) => {
  return (
    <div>
      <HeadTitle />
      <Banner />
      <About />
      <Guide />
      <Rubber />
      <Order />
    </div>
  );
};

export default HomePage;
