import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addProduct: (state, action) => {
      const id = action.payload;
      const index = state.findIndex((item) => item.id === id)

      if (index === -1) {
        state.push({ id, qty: 1 })
      } else {
        state[index].qty += 1
      }

      localStorage.setItem('@Cart', JSON.stringify(state))
    },

    decreaseProduct: (state, action) => {
      const id = action.payload;
      const index = state.findIndex((item) => item.id === id)

      if (index > -1 && state[index].qty > 1) {
        state[index].qty -= 1    
      } 

      localStorage.setItem('@Cart', JSON.stringify(state))
    },

    removeProduct: (state, action) => {
      const id = action.payload;

      const filtered = state.filter(item => item.id !== id)

      localStorage.setItem('@Cart', JSON.stringify(filtered))

      return filtered
    },

    fillState: () => {
      const json = JSON.parse(localStorage.getItem('@Cart'))
      if (json) {
        return json
      }
    }
  }
})

export const { addProduct, decreaseProduct, removeProduct, fillState } = slice.actions;

export default slice.reducer
