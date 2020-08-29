import { createStyles, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => createStyles({
  '@global': {
    '*': {
      boxSizing: 'border-box',
      margin: 0,
      padding: 0,
    },
    html: {
      '-webkit-font-smoothing': 'antialiased',
      '-moz-osx-font-smoothing': 'grayscale',
      height: '100%',
      width: '100%'
    },
    body: {
      backgroundColor: '#f4f6f8',
      height: '100%',
      width: '100%'
    },
    a: {
      textDecoration: 'none'
    },
    hr: {
      margin: '20px 0',
      border: '0',
      height: '1px',
      'background-image': 'linear-gradient(to right, rgba(220, 220, 220, 0.4) 0%, '
        + ' rgba(220, 220, 220, 0.8) 20%, #ddd 50%, rgba(220, 220, 220, 0.8) 80%, '
        + ' rgba(220, 220, 220, 0.4) 100%)'
    },
    '#root': {
      height: '100%',
      width: '100%'
    }
    /*
    hr {
      margin: 20px 0;
      border: 0;
      height: 1px;
      background-image: linear-gradient(to right, rgba(220, 220, 220, 0.4) 0%,
      rgba(220, 220, 220, 0.8) 2%, #ddd 50%, rgba(220, 220, 220, 0.8) 98%,
      rgba(220, 220, 220, 0.4) 100%);

      &.light, &[light] {
        margin: 10px 0;
      }
    }
    */
  }
}));

const GlobalStyles = () => {
  useStyles();

  return null;
};

export default GlobalStyles;
