import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  quantity:0,
  totalPrice:0,
  totalQuantity:0
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {

    addcart(state, action) {
      
      const isItemExist = state.cart.findIndex(
        (products) => products.id === action.payload.id  //products comes from map func
      );
      if (isItemExist >=0) {
        state.cart[isItemExist].quantity +=1;
      } else {
        //ik ya solution quantity ko deal krny ka  
        action.payload.quantity=1
        state.cart.push(action.payload)
         // ya be ik solution ah quantity ko handle krna 


        // state.cart.push({...action.payload,quantity:1}) 

      }
    },
    // removeallproducts(state, action) {
    //     return [];
    //   },


    increment(state, action) {
        const item = state.cart.find((products)=> products.quantity === action.payload.quantity)
        item.quantity+=1
    },
    decrement(state, action) {
        const item = state.cart.find((products) => products.quantity === action.payload.quantity);
      if (item.quantity === 1) {
        item.quantity = 1
      } else {
        item.quantity-=1;
      }
    },

    removeproduct(state, action) {
      state.cart.splice(action.payload, 1);
    },
    getCartTotal: (state) => {
      let { totalQuantity, totalPrice } = state.cart.reduce(
        (cartTotal, cartItem) => {
          console.log("carttotal", cartTotal);
          console.log("cartitem", cartItem);
          const { price, quantity } = cartItem;
          console.log(price, quantity);
          const itemTotal = price * quantity;
          cartTotal.totalPrice += itemTotal;
          cartTotal.totalQuantity += quantity;
          return cartTotal;
        },
        {
          totalPrice: 0,
          totalQuantity: 0,
        }
      );
      state.totalPrice = parseInt(totalPrice.toFixed(2));
      state.totalQuantity = totalQuantity;
    },
    
  },
});

export default cartSlice.reducer;

export const { addcart, removeproduct, removeallproducts,increment,decrement,getCartTotal  } = cartSlice.actions;
