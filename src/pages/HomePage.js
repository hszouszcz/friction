import React from 'react';
import About from '../components/about/about';
import Guide from '../components/guide/guide';
import Rubber from '../components/Rubber/Rubber';
import Order from '../components/order/order';
import HeadTitle from '../components/HeadTItle';
const HomePage = (props) => {
  return (
    <div>
      <HeadTitle />
      <About />
      <Guide />
      <Rubber />
      <Order />
    </div>
  );
};

export default HomePage;
