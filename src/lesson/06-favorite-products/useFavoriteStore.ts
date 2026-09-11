import { create } from 'zustand';

interface FavoriteStore {
  favoriteIds: number[];
  toggleFavorite: (productId: number) => void;
}

export const useFavoriteStore = create<FavoriteStore>()((set) => ({
  favoriteIds: [],

  toggleFavorite: (productId) =>
    set((state) => ({
      favoriteIds: state.favoriteIds.includes(productId)
        ? state.favoriteIds.filter((id) => id !== productId)
        : [...state.favoriteIds, productId],
    })),
}));
