import { createSlice } from '@reduxjs/toolkit'


export const CartItem = createSlice({
  name: 'Product Cart',
  initialState : {
    CartArr: []
  },
  reducers: {
    addToCart: (state, action) => {
      const productItem = state.CartArr.findIndex((p =>p.id === action.payload.id))

      if(productItem === -1){
        state.CartArr.push({...action.payload, quantity: 1})
      }
      else{
        state.CartArr[productItem].quantity += 1
      }
    },
    removeCart: (state, action) => {
      const removeItem = action.payload.id;
      const newCart = state.CartArr.filter((item) =>item.id !== removeItem)
      return {...action, CartArr: newCart}
    },
    increaseQuantity: (state, action) => {
      const productItem = state.CartArr.find(p => p.id === action.payload.id)
      if (productItem) {
        productItem.quantity += 1
      }
    },
    decreaseQuantity: (state, action) => {
      const productItem = state.CartArr.find(p => p.id === action.payload.id)
      if (productItem && productItem.quantity > 1) {
        productItem.quantity -= 1
      }
  },
}
})

// Action creators are generated for each case reducer function
export const { addToCart, removeCart, increaseQuantity, decreaseQuantity } = CartItem.actions

export default CartItem.reducer