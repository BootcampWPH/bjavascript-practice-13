import { create } from 'zustand';

interface PreferenceStore {
  theme: 'light' | 'dark';
  sessionCount: number;
  toggleTheme: () => void;
  incrementSession: () => void;
}

export const usePreferenceStore = create<PreferenceStore>()((set) => ({
  theme: 'light',
  sessionCount: 0,
  toggleTheme: () =>
    set((state) => ({ theme: state.theme === 'light' ? 'dark' : 'light' })),
  incrementSession: () =>
    set((state) => ({ sessionCount: state.sessionCount + 1 })),
}));
