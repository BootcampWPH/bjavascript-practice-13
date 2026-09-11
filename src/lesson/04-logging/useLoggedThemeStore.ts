import { create } from 'zustand';
import { logger, type LoggedThemeStore } from './logger';

export const useLoggedThemeStore = create<LoggedThemeStore>()(
  logger(
    (set) => ({
      theme: 'light',
      toggleTheme: () =>
        set((state) => ({ theme: state.theme === 'light' ? 'dark' : 'light' })),
    }),
    'Theme Store',
  ),
);
