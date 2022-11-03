import '../styles/globals.css'
import type { AppProps } from 'next/app'
import React, { useReducer } from 'react';
import ProductReducer from '../reducers/productReducer';
import { v4 } from 'uuid'



export default function App({ Component, pageProps }: AppProps) {


  const [state, dispatch] = useReducer(
    ProductReducer,
    {
      cartProducts: [],
    }
  );

  const productsRef = React.useRef([
    { name: "Black forest", price: '200', id: v4() },
    { name: "Desert Cake", price: '200', id: v4() },
    { name: "Tirimasu", price: '400', id: v4() },
    { name: "CheeseCake", price: '800', id: v4() },
  ])



  return <Component {...pageProps} dispatch={dispatch} state={state} productsRef={productsRef} ></Component>
}
