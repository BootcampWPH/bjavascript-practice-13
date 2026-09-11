import { useEffect, useState } from 'react';
import { type Product } from '../../types/product';
import { getProducts } from '../../services/productService';
import axios from 'axios';

export function AxiosProductsLesson() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [requestCount, setRequestCount] = useState(0);

  useEffect(() => {
    const controller = new AbortController();

    async function loadProducts() {
      setLoading(true);
      setError(null);

      try {
        const data = await getProducts(controller.signal);

        if (!controller.signal.aborted) setProducts(data);
      } catch (requestError) {
        if (controller.signal.aborted || axios.isCancel(requestError)) return;

        setError('Produk gagal');
      } finally {
        if (!controller.signal.aborted) setLoading(false);
      }
    }
    void loadProducts();

    return () => controller.abort();
  }, [requestCount]);

  return (
    <section>
      <h2>Produk dari server</h2>
      <p>Axios mengirim request dari server</p>

      {loading && (
        <p role="status" className="py-8">
          Memuat produk
        </p>
      )}

      {error && (
        <div
          role="alert"
          className="space-y-3 rounded-lg border border-red-300 p-4"
        >
          <p>{error}</p>
          <button onClick={() => setRequestCount((count) => count + 1)}>
            Coba Lagi
          </button>
        </div>
      )}

      {!loading &&
        !error &&
        (products.length === 0 ? (
          <p>Belum ada produk</p>
        ) : (
          <>
            <p role="status">{products.length} Produk berhasil dimuat</p>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {products.map((products) => (
                <article className="panel space-y-3" key={products.id}>
                  <img
                    className="h-40 w-full object-contain"
                    src={products.image}
                    alt={products.title}
                  />
                  <p className="text-sm text-slate-500">{products.category}</p>
                  <h3>{products.title}</h3>
                  <p>
                    {new Intl.NumberFormat('en-us', {
                      style: 'currency',
                      currency: 'USD',
                    }).format(products.price)}
                  </p>
                </article>
              ))}
            </div>
          </>
        ))}
    </section>
  );
}
