import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export const useStore = create(
  persist(
    (set) => ({
      favourites: [],
      addFavourites: (data) =>
        set((state) => ({ favourites: [...state.favourites, data] })),
      removeFromFavourites: (data) =>
        set((state) => ({
          favourites: [...state.favourites].filter((fav) => fav !== data),
        })),
    }),
    {
      name: "favourites",
    }
  )
);
