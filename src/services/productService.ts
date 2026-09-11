import axios from 'axios';
import type { Product } from '../types/product';

export async function getProducts(signal?: AbortSignal): Promise<Product[]> {
  const response = await axios.get<Product[]>(
    'https://fakestoreapi.com/products',
    {
      signal,
      timeout: 10000,
    },
  );
  return response.data;
}
