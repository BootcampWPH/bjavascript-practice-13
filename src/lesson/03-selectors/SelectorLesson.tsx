import { usePreferenceStore } from './usePreferencesStore';

function ThemeSubscriber() {
  const theme = usePreferenceStore((state) => state.theme);
  if (import.meta.env.DEV) console.log('[Render] ThemeSubcriber', theme);

  return <div className="panel">Selector tema: {theme}</div>;
}

function SessionSubscriber() {
  const sessionCount = usePreferenceStore((state) => state.sessionCount);

  if (import.meta.env.DEV)
    console.log('[Render] SessionSubcriber', sessionCount);

  return <div className="panel">Selector Sesi:{sessionCount}</div>;
}

function WholeStoreSubscriber() {
  const store = usePreferenceStore();
  if (import.meta.env.DEV) console.log('[Render] WholeStoreSubscriber', store);

  return (
    <div className="panel">
      Seluruh store: {store.theme} / {store.sessionCount}
    </div>
  );
}

export default function SelectorsLesson() {
  const toggleTheme = usePreferenceStore((state) => state.toggleTheme);
  const incrementSession = usePreferenceStore(
    (state) => state.incrementSession,
  );
  return (
    <section className="space-y-5">
      <h2>03 - Pilih State Secukupnya</h2>
      <p>
        Buka console atau React DevTools, lalu bandingkan tiga subscription
        berikut.
      </p>

      <div className="flex flex-wrap gap-3">
        <button onClick={toggleTheme}>Ubah Tema</button>
        <button onClick={incrementSession}>Tambah Sesi</button>
      </div>

      <div className="grid gap-3 md:grid-cols-3">
        <ThemeSubscriber />
        <SessionSubscriber />
        <WholeStoreSubscriber />
      </div>
    </section>
  );
}
