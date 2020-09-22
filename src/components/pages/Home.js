import React from 'react';
import HeroSection from '../HeroSection';
import Middle from '../Middle'
import Midd from '../Midd'
import { homeObjOne,homeObjTwo,homeObjThree} from './Data';
import Pricing from '../Pricing'


function Home() {
  return (
    <>
      <HeroSection {...homeObjOne} />
      <Middle {...homeObjTwo}/>
      <Midd {...homeObjThree}/>
      <Pricing/>
    </>
  );
}

export default Home;