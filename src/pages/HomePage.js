import React from 'react';
import About from '../components/about/about';
import Guide from '../components/guide/guide';
import Rubber from '../components/Rubber/Rubber';
import Order from '../components/order/order';
const HomePage = (props) => {
  return (
    <div>
      <About />
      <Guide />
      <Rubber />
      <Order />
    </div>
  );
};

export default HomePage;
