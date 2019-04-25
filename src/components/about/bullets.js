import React from 'react';
import Bullet from './bullet';
import strings from './../../assets/locales/index';


const Bullets = () => {
  return [
  <Bullet text={strings.aboutBullet1}/>,
    <Bullet text={strings.aboutBullet2}/>,
    <Bullet text={strings.aboutBullet3}/>
]}


export default Bullets;
