import React from 'react'

export interface IProductContainerProps {
    products: { name: string, price: string, id: string }[]
    handleProductAdd: any
}

const styles = {
    productContainer: {
        display: "flex",
        marginTop: '120px',
        justifyContent: "center",
        padding: '50px'
    },
    products: {
        marginRight: "20px",
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
        width: '100vw',
        border: '1px solid #eee',
        alignItems: "center",
        padding: "40px",
        boxShadow: "4px -5px 30px -23px rgba(45,72,128,1);"
    },
    button: {
        marginTop: '20px',
        backgroundColor: "#EA4C89",
        borderRadius: "8px",
        color: "#FFFFFF",
        outline: "0",
        padding: "10px 16px",
        cursor: 'pointer'
    }

}


const ProductContainer: React.FC<IProductContainerProps> = ({ products, handleProductAdd }) => {

    return <div style={styles.productContainer} >
        {products.map((product) => {
            return <div style={styles.products} key={product.id}>
                <h2>{product.name}</h2>
                <div> ₹ {product.price}</div>
                <button onClick={() => handleProductAdd(product)} style={styles.button}> Add to Cart</button>
                <div> {(product as any).quantity > 0 ? `${(product as any).quantity} item(s) in cart` : null}</div>
            </div>
        })}
    </div>
}

export default ProductContainer