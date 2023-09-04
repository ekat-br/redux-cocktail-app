import { createSlice } from "@reduxjs/toolkit";

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState: { favoritesIds: [] },
  reducers: {
    toggledFavorite: (state, action) => {
      const idToToggle = action.payload;
      if (state.favoritesIds.includes(idToToggle)) {
        state.favoritesIds = state.favoritesIds.filter(
          (id) => id !== idToToggle
        );
      } else {
        state.favoritesIds.push(idToToggle);
      }
      localStorage.setItem("favorites", JSON.stringify(state.favoritesIds));
    }
  }
});



export const { toggledFavorite } = favoritesSlice.actions;
export const selectFavoritesIds = (state) => state.favorites.favoritesIds;
export default favoritesSlice.reducer;
