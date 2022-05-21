import { makeStyles } from '@mui/styles';

// eslint-disable-next-line import/prefer-default-export
export const useStyles = makeStyles({
  cardCon: {
      margin: '1rem',
      '@media(max-width: 501px)': {
       margin: '0.5rem'
    }
  },
  img: {
      width: '300px',
      height: '200px',
      borderRadius: '20px'
  },
  textCon: {
    display: 'flex'
  },
  text: {
    alignSelf: 'center'
  }
});
