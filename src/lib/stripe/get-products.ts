import { cache } from 'react'
import Stripe from 'stripe'

import { stripe } from './stripe'

export const getProducts = cache(async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price'],
  })

  const products = response.data.map((product) => {
    const priceObj = product.default_price as Stripe.Price
    const priceInCents = priceObj.unit_amount as number

    const price = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(priceInCents / 100)

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price,
    }
  })

  return products
})
