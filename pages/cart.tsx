import Link from 'next/link'
import React from 'react'




const Cart = (props: any) => {
    const { cartProducts = [] } = props.state
    const [total, setTotal] = React.useState(0)

    React.useEffect(() => {
        let sum = 0;
        cartProducts.forEach((element: any) => {
            sum += element.price * element.quantity
        });
        setTotal(sum)
    }, [cartProducts])

    if (cartProducts.length <= 0) {
        return <div style={{ display: 'flex', justifyContent: 'center', alignItems: "center", height: '100vh', flexDirection: 'column' }}>
            No Products Found! Add some tasty products!! 🌝

            <Link href={"/"} style={{ marginTop: '20px', color: '#AF4D98' }}> Go to Shop ✨</Link>
        </div>
    }

    return <div style={{ padding: '20px' }}>{
        cartProducts.map((pro: any) => {
            return (<div style={{ display: 'flex', flexDirection: 'column', padding: '20px' }}><h2> {pro.name}   </h2>
                <div>Quantity : {pro.quantity}</div>
                <div>Price : {pro.price}</div>
                <div>Total : {pro.quantity * pro.price}</div>
            </div>
            )
        })
    }

        <div style={{ padding: '20px' }}>

            <h2>Total</h2>
            <div>{total}</div>
        </div>

        <button style={{
            backgroundColor: "#EA4C89",
            borderRadius: "8px",
            color: "#FFFFFF",
            outline: "0",
            padding: "10px 16px",
            margin: '20px',
            cursor: 'pointer'
        }} onClick={() => {
            console.log(cartProducts)
        }}> Checkout</button>
    </div>

}

export default Cart