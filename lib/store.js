import { create } from 'zustand'

export const useStore = create(set => ({
  favourites: [],
  addFavourites: (data) => set(state => 
    ({ favourites: [...state.favourites,data] })),
}))