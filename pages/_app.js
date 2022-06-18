import React from 'react';
import PropTypes from 'prop-types';
import '../styles/index.scss';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

MyApp.propTypes = {
  Component: PropTypes.element,
  pageProps: PropTypes.any
};

export default MyApp;
