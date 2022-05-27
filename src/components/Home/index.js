import React, { useState } from 'react';

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import Cards from '../Cards';
import movies from '../../data';

import { useStyles } from './style';

const Home = () => {
  const classes = useStyles();

  const [sortedMovies, setSortedMovies] = useState(movies);

  const handleLikes = (index) => {
    let updateMovies = [...sortedMovies];

    updateMovies[index].likes += 1;

    // sorts movies in order of highest likes
    updateMovies.sort((a, b) => (a.likes < b.likes) ? 1 : -1);
    setSortedMovies(updateMovies);

  }

  return (
    <Grid container className={classes.con}>
        {sortedMovies.map((x, y) => (
            <Cards
                key={y}
                imgSrc={x.thumbnail}
                onClick={()=> {handleLikes(y);}}
                count={x.likes}
                title={x.title} />
        ))}
    </Grid>
  )
}

export default Home;