function ProductReducer(state: any, action: any) {
    switch (action.type) {
        case "Add":
            const newState = { ...state }
            const productFoundIndex = newState.cartProducts.findIndex((item: any) => {
                return item.id === action.product.id
            })

            if (productFoundIndex !== -1) {
                newState.cartProducts[productFoundIndex].quantity += 1
                return newState
            }

            return {
                ...state,
                cartProducts: (state.cartProducts).concat({ ...action.product, quantity: 1 })
            }
        case "Remove":
            return {
                ...state,
                cartProducts: state.cartProducts.filter((item: any) => item.id !== action.product.id)
            }
        default:
            throw new Error();
    }
}

export default ProductReducer