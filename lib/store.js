import { create } from 'zustand'

export const useStore = create(set => ({
  favourites: ["jkdjk","jsdjkjksd"],
  addFavourites: (data) => set(state => 
    ({ favourites: [...state.favourites,data] })),
}))