import { useLoggedThemeStore } from './useLoggedThemeStore';

export default function LoggingSession() {
  const theme = useLoggedThemeStore((state) => state.theme);
  const toggleTheme = useLoggedThemeStore((state) => state.toggleTheme);

  return (
    <section>
      <h2>Middleware logging</h2>
      <p>Middleware membungkus state creator</p>

      <div className="panel space-y-3">
        <p>Tema Aktif: {theme}</p>
        <button onClick={toggleTheme}>Ubah tema dengan log</button>
      </div>
    </section>
  );
}
