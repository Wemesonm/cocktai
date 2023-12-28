
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  beverages: null,
};

export const beverageSlice = createSlice({
  name: "beverages",
  initialState,
  reducers: {
    addToBeverage: (state, action) => {
      state.beverages = [...state, action.payload];
    },
    deleteFromBeverages: (state) => {
      let newBeverage = [...state.beverages];
      let beverageIndex = state.beverages.findIndex(
        (beverage) => beverage.id == action.payload.id
      );
      if(beverage>=0) {
        newBeverage.splice(beverageIndex, 1);
      } else{
        console.log("can't remove the beverage that is not added to beverages")
      }
    },
    get: (state) => {},
    update: (state) => {},
  },
});

export const { addToBeverage, deleteFromBeverages } = beverageSlice.actions;

export const selectBeverage = (state) => state.beverage.beverage;

export default beverageSlice.reducer;
