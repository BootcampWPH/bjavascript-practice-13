import { usePersistedThemeStore } from './usePersistedThemeStore';

export default function PersistLesson() {
  const theme = usePersistedThemeStore((state) => state.theme);
  const toggleTheme = usePersistedThemeStore((state) => state.toggleTheme);
  const resetPreferences = usePersistedThemeStore(
    (state) => state.resetPreferences,
  );

  return (
    <section className="space-y-5">
      <h2>05 Preferensi setelah refresh</h2>

      <div
        className={`rounded-xl border p-6 ${theme === 'dark' ? 'bg-slate-900 text-white' : 'bg-white'}`}
      >
        <p>Tema tersimpan: {theme}</p>
      </div>

      <div className="flex flex-wrap gap-3">
        <button onClick={toggleTheme}>Ubah Tema</button>
        <button onClick={resetPreferences}>Reset preferensi tema</button>
      </div>
    </section>
  );
}
