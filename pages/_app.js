import '../styles/globals.scss'
import Header from './components/header';
import Footer from './components/footer';
import React, { useState } from "react";
import { Provider } from 'react-redux';
import store from './redux/store';


function MyApp({ Component, pageProps }) {

  
  return (
       <Provider store={store}>
        <Header/>
        <Component {...pageProps} />
        <Footer/>
      </Provider>
    
  )
}

export default MyApp
