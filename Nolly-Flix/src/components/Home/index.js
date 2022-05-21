import React from 'react';

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

  return (
    <Grid container className={classes.con}>
      {/* <Grid item xs={12}> */}
        <Cards imgSrc={img1} title='The Redemption' />
        <Cards imgSrc={img2} title='Africa’s Tech Roots' />
        <Cards imgSrc={img3} title=' The Invisible Man' />
        <Cards imgSrc={img4} title='The Complicated Project' />
        <Cards imgSrc={img5} title='Simply Javascript' />
        <Cards imgSrc={img6} title='The New Web' />
      {/* </Grid> */}
    </Grid>
  )
}

export default Home;