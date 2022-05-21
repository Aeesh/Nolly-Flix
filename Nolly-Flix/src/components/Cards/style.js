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
    alignSelf: 'center',
    color: 'olive',
    fontSize: '1.2rem !important'
  },
  price: {
    textAlign: 'center'
  },
  count: {
    color: 'green',
    padding: '0.5rem',
    alignSelf: 'center'
  },
  likeBtn: {
    width: '2rem',
    height: '2rem'
  }
});
