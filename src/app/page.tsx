import { getProducts } from '@/lib/stripe/get-products'

import Products from './_components/products'

export const revalidate = 60 * 60 * 1 // revalidate data after 1 hour

export default async function Home() {
  const products = await getProducts()

  return <Products products={products} />
}
