import React, { useState } from 'react';

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import Cards from '../Cards';

import img1 from '../../assets/img1.jpg';
import img2 from '../../assets/img2.jpg';
import img3 from '../../assets/img3.jpg';
import img4 from '../../assets/img4.jpg';
import img5 from '../../assets/img5.png';
import img6 from '../../assets/img6.jpg';

import { useStyles } from './style';

const Home = () => {
  const classes = useStyles();

  const [countOne, setCountOne] = useState(0);
  const [countTwo, setCountTwo] = useState(0);
  const [countThree, setCountThree] = useState(0);
  const [countFour, setCountFour] = useState(0);
  const [countFive, setCountFive] = useState(0);
  const [countSix, setCountSix] = useState(0);

  return (
    <Grid container className={classes.con}>
        <Cards imgSrc={img1} onClick={()=> {setCountOne(1 + countOne)}} count={countOne} title='The Redemption' />
        <Cards imgSrc={img2} onClick={()=> {setCountTwo(1 + countTwo)}} count={countTwo} title='Africa’s Tech Roots' />
        <Cards imgSrc={img3} onClick={()=> {setCountThree(1 + countThree)}} count={countThree} title=' The Invisible Man' />
        <Cards imgSrc={img4} onClick={()=> {setCountFour(1 + countFour)}} count={countFour} title='The Complicated Project' />
        <Cards imgSrc={img5} onClick={()=> {setCountFive(1 + countFive)}} count={countFive} title='Simply Javascript' />
        <Cards imgSrc={img6} onClick={()=> {setCountSix(1 + countSix)}} count={countSix} title='The New Web' />
    </Grid>
  )
}

export default Home;