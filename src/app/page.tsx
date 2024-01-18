import { getProducts } from '@/lib/stripe/get-products'

import Products from './products'

export const revalidate = 3600 // revalidate data after 1 hour

export default async function Home() {
  const products = await getProducts()

  return <Products products={products} />
}
