import { createSlice } from "@reduxjs/toolkit";

export const favorizeSlice = createSlice({
  name: "favorize",
  initialState: { favorizedIds: [] },
  reducers: {
    toggleFavorize: (state, action) => {
      const idToToggle = action.payload;
      if (state.favorizedIds.includes(idToToggle)) {
        state.favorizedIds = state.favorizedIds.filter(
          (id) => id !== idToToggle
        );
      } else {
        state.favorizedIds.push(idToToggle);
      }
    },
  },
});

export const loadFavorizedIds = () => {
  try {
    const serializedIds = localStorage.getItem("favorizedIds");
    return serializedIds ? JSON.parse(serializedIds) : [];
  } catch (err) {
    return [];
  }
};

export const saveFavorizedIds = (favorizedIds) => {
  try {
    const serializedIds = JSON.stringify(favorizedIds);
    localStorage.setItem("favorizedIds", serializedIds);
  } catch (err) {
    // Handle errors
  }
};

export const { toggleFavorize } = favorizeSlice.actions;
export const selectFavorizedIds = (state) => state.favorize.favorizedIds;
export default favorizeSlice.reducer;
