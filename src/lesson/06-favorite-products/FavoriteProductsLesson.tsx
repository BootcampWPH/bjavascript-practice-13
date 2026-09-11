import { useFavoriteStore } from './useFavoriteStore';

const products = [
  {
    id: 1,
    title: 'Tas sehari-hari',
    category: 'Aksesori',
    image: '/images/favorite-products/backpack.png',
    imageAlt: 'Tas ransel berwarna navy dengan saku depan',
  },
  {
    id: 2,
    title: 'Kaos katun',
    category: 'Atasan',
    image: '/images/favorite-products/tshirt.png',
    imageAlt: 'Kaos raglan abu-abu dengan lengan hitam',
  },
  {
    id: 3,
    title: 'Jaket ringan',
    category: 'Outerwear',
    image: '/images/favorite-products/jacket.png',
    imageAlt: 'Jaket kasual cokelat dengan saku depan',
  },
];

function FavoriteSummary() {
  const favoriteIds = useFavoriteStore((state) => state.favoriteIds);
  const favoriteCount = useFavoriteStore((state) => state.favoriteIds.length);

  return (
    <div className="panel space-y-2" aria-live="polite">
      <h3>Ringkasan favorit</h3>
      <p>Jumlah favorit: {favoriteCount}</p>
      <p>
        ID di store: <code>{JSON.stringify(favoriteIds)}</code>
      </p>
      {favoriteCount === 0 ? (
        <p>Belum ada produk favorit. Pilih salah satu produk di bawah.</p>
      ) : (
        <p>
          Produk favorit:{' '}
          {products
            .filter((product) => favoriteIds.includes(product.id))
            .map((product) => product.title)
            .join(', ')}
        </p>
      )}
    </div>
  );
}

function FavoriteProductCard({
  product,
}: {
  product: (typeof products)[number];
}) {
  const isFavorite = useFavoriteStore((state) =>
    state.favoriteIds.includes(product.id),
  );
  const toggleFavorite = useFavoriteStore((state) => state.toggleFavorite);

  return (
    <article
      className={`group flex flex-col overflow-hidden rounded-2xl border bg-white transition-shadow hover:shadow-md ${isFavorite ? 'border-blue-500 ring-1 ring-blue-500' : 'border-slate-200'}`}
    >
      <div className="relative m-3 rounded-xl bg-slate-50 p-5">
        <div className="flex aspect-square items-center justify-center rounded-lg bg-white p-4">
          <img
            src={product.image}
            alt={product.imageAlt}
            width={320}
            height={320}
            loading="lazy"
            className="h-full w-full object-contain motion-safe:transition-transform motion-safe:duration-300 motion-safe:group-hover:scale-105"
          />
        </div>
        {isFavorite && (
          <span className="absolute right-3 top-3 rounded-full bg-blue-600 px-3 py-1 text-xs font-semibold text-white">
            ♥ Favorit
          </span>
        )}
      </div>
      <div className="flex grow flex-col gap-3 px-5 pb-5 pt-2">
        <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
          {product.category}
        </p>
        <h3>{product.title}</h3>
        <p className="text-xs text-slate-500">Product ID: {product.id}</p>
        <button
          className={`mt-auto flex w-full items-center justify-center gap-2 transition-colors ${isFavorite ? 'primary hover:bg-blue-700' : 'border-slate-300 bg-white hover:border-blue-400 hover:bg-blue-50 hover:text-blue-700'}`}
          aria-pressed={isFavorite}
          onClick={() => toggleFavorite(product.id)}
        >
          <span aria-hidden="true" className="text-lg leading-none">
            {isFavorite ? '♥' : '♡'}
          </span>
          {isFavorite ? 'Hapus dari favorit' : 'Tambah ke favorit'}
        </button>
      </div>
    </article>
  );
}

export default function FavoriteProductsLesson() {
  return (
    <section className="space-y-5">
      <h2>06 — Favorite product</h2>
      <p>
        Kelola pilihan produk dengan array favoriteIds di Zustand. Produk di
        sini adalah data contoh statis untuk latihan mengatur state.
      </p>
      <FavoriteSummary />
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {products.map((product) => (
          <FavoriteProductCard key={product.id} product={product} />
        ))}
      </div>
      <ol className="list-decimal space-y-2 pl-5">
        <li>Klik favorit: component memanggil toggleFavorite(product.id).</li>
        <li>
          includes memeriksa ID. Jika belum ada, spread menambahkan ID; jika
          sudah ada, filter menghapusnya. Keduanya menghasilkan array baru.
        </li>
        <li>
          Selector pada card membaca status produk, sedangkan ringkasan membaca
          ID dan jumlah favorit. Keduanya mengikuti perubahan store yang sama.
        </li>
      </ol>
      <p>
        Simpan ID saja. Jumlah favorit dihitung dari favoriteIds.length, bukan
        state terpisah. Jangan mengubah array store langsung dengan push atau
        splice.
      </p>
      <p className="note">
        Coba pilih dua produk, lalu hapus satu. Pindah lesson dan kembali:
        pilihan masih ada di memory. Full refresh mengosongkan favorit karena
        store ini belum memakai persist. Lesson 07 menggabungkannya dengan API,
        tema, filter, dan persist dalam store final yang terpisah.
      </p>
    </section>
  );
}
