import type { StateCreator } from 'zustand';

export interface LoggedThemeStore {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

export function logger(
  creator: StateCreator<LoggedThemeStore>,
  name: string,
): StateCreator<LoggedThemeStore> {
  return (set, get, api) => {
    type MergeUpdate =
      | LoggedThemeStore
      | Partial<LoggedThemeStore>
      | ((
          state: LoggedThemeStore,
        ) => LoggedThemeStore | Partial<LoggedThemeStore>);
    type ReplaceUpdagte =
      LoggedThemeStore | ((state: LoggedThemeStore) => LoggedThemeStore);

    const loggedSet: typeof set = (
      ...args:
        | [update: MergeUpdate, replace?: false]
        | [update: ReplaceUpdagte, replace?: true]
    ) => {
      const previous = get().theme;
      if (args[1] === true) set(args[0], true);
      else set(args[0], args[1]);
      if (import.meta.env.DEV) {
        console.log(`[${name}]\nPrevious: ${previous}\nNext: ${get().theme}`);
      }
    };

    return creator(loggedSet, get, api);
  };
}
