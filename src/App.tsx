import { useState } from 'react';
import LessonNavigation from './lesson/LessonNavigation';
import { AxiosProductsLesson } from './lesson/01-axios-products/AxiosProductsLesson';
import BasicStoreLesson from './lesson/02-basic-store/BasicStoreLesson';
import SelectorsLesson from './lesson/03-selectors/SelectorLesson';
import LoggingLesson from './lesson/04-logging/LoggingLesson';
import PersistLesson from './lesson/05-persist/PersistLesson';
import FavoriteProductsLesson from './lesson/06-favorite-products/FavoriteProductsLesson';
export default function App() {
  const [activeLesson, setActiveLesson] = useState(0);
  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-8">
      <header className="mb-8 space-y-3">
        <p className="text-sm font-bold tracking-widest text-blue-700">
          REACT PRACTICE / MEET 21
        </p>
        <h1 className="text-3xl font-bold sm:text-4xl">
          Zustand <span className="text-slate-500">(Client State)</span>
        </h1>
        <p>Henry Rivardo — Software Engineer</p>
        <p className="max-w-3xl text-slate-600">
          Data produk dari API → User memilih favorit → Zustand menyimpan
          pilihan → Beberapa component menerima perubahan → Persist
          mempertahankan pilihan setelah refresh
        </p>
      </header>
      <div className="grid items-start gap-8 lg:grid-cols-[220px_1fr]">
        <aside className="space-y-5">
          <LessonNavigation
            activeLesson={activeLesson}
            onSelect={setActiveLesson}
          />
          <p className="text-sm text-slate-500">
            6 lesson · langkah demi langkah
            <br />
            Praktik lengkap: 100 menit
          </p>
        </aside>
        <main className="min-w-0">
          {activeLesson === 0 && <AxiosProductsLesson />}
          {activeLesson === 1 && <BasicStoreLesson />}
          {activeLesson === 2 && <SelectorsLesson />}
          {activeLesson === 3 && <LoggingLesson />}
          {activeLesson === 4 && <PersistLesson />}
          {activeLesson === 5 && <FavoriteProductsLesson />}
          <section className="panel space-y-3">
            <h2>Lesson {String(activeLesson + 1).padStart(2, '0')}</h2>
            <p className="text-slate-600">
              Area live coding. Component lesson akan dibuat bersama mentee.
            </p>
          </section>
          <footer className="mt-8 grid gap-3 border-t border-slate-200 pt-6 text-sm sm:grid-cols-3">
            <p>
              <strong>Server state</strong>
              <br />
              Produk dari API; disimpan lokal pada halaman.
            </p>
            <p>
              <strong>Client state</strong>
              <br />
              Tema dan favorit dibagikan lewat Zustand.
            </p>
            <p>
              <strong>Local state</strong>
              <br />
              Navigasi dan filter hanya dibutuhkan halaman.
            </p>
          </footer>
        </main>
      </div>
    </div>
  );
}
