import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import { useStyles } from './style';

const Cards = (props) => {
  const classes = useStyles();

  const { imgSrc, imgAlt, title, onClick } = props;
  return (
    <Grid container className={classes.cardCon} xs={12} md={4} lg={3}>
      <Grid item xs={12} className={classes.imgCon}>
        <img src={imgSrc} alt={imgAlt} className={classes.img} />
      </Grid>
      <Grid item xs={12}>
        <Grid item className={classes.textCon}>
          <Button onClick={onClick}> like </Button>
          <Typography className={classes.text}> {title} </Typography>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Cards;