import { randomUUID } from 'crypto';
import React, { useReducer } from 'react';
import { Header } from '../components/HeaderContainer/Header'
import ProductContainer from '../components/ProductContainer/Producs';
import ProductReducer from '../reducers/productReducer';
import Link from 'next/link';


export default function Home(props: any) {

  const { dispatch, productsRef } = props
  const [isOneShowing, setIsOneShowing] = React.useState(false)


  const handleProductAdd = (product: any) => {
    dispatch({ type: "Add", product })
    setIsOneShowing(true)
  }


  React.useEffect(() => {
    if (isOneShowing) {
      setTimeout(() => setIsOneShowing(false), 600)
    }
  }, [isOneShowing])


  return (
    <div >
      <Header />
      <ProductContainer handleProductAdd={handleProductAdd} products={productsRef.current} />

      <div style={{ display: "flex", justifyContent: "center", flexDirection: 'column', alignItems: "center", fontSize: '25px' }}>
        <Link href="/cart"> {"Cart 🛒 →"}</Link>
        <div style={{ background: "#FFD9CE", fontSize: '15px', width: '20px', justifyContent: "center", alignItems: "center", height: '20px', border: '1px solid #FFD9CE', padding: '20px', borderRadius: '50%', marginLeft: '20px', display: isOneShowing ? "flex" : "none", transition: "1s ease-in" }}>  +1 </div>
      </div>
    </div>)

}
