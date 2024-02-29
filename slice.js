import { configureStore, createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        addToCart: (state, action) => {
            state.push(action.payload)
        }
    }
})

console.log("on Create :",store.getState())

store.subscribe(()=>{
    console.log("STORE CHANGES:", store.getState())
})

const store = configureStore({
    reducer: {
        cart:cartSlice.reducer
    }
})
store.dispatch(cartSlice.actions.addToCart({id: 1, qty: 20}))


