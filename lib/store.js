import { create } from 'zustand'

const useStore = create(set => ({
  favourites: 0,
  increasePopulation: () => set(state => ({ bears: state.bears + 1 })),
}))