import { useThemeStore } from './useThemeStore';

function ThemeToggle() {
  const toggleTheme = useThemeStore((state) => state.toggleTheme);

  return (
    <button onClick={toggleTheme} className="primary">
      Ubah tema
    </button>
  );
}

function ThemePreview() {
  const theme = useThemeStore((state) => state.theme);
  return (
    <div
      className={`rounded-xl border p-8 ${theme === 'dark' ? 'bg-slate-900 text-white' : 'bg-white text-black'}`}
    >
      <h3>Theme Preview</h3>
      <p>Tema aktif: {theme}</p>
    </div>
  );
}

export default function BasicStoreLesson() {
  return (
    <section>
      <h2>02 - Store Lesson</h2>
      <p>Store berisi state dan action</p>

      <ThemeToggle />
      <ThemePreview />
    </section>
  );
}
