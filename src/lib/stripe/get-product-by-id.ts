import { cache } from 'react'
import Stripe from 'stripe'

import { stripe } from './stripe'

export const getProductById = cache(async (id: string) => {
  try {
    const product = await stripe.products.retrieve(id, {
      expand: ['default_price'],
    })

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
      description: product.description,
    }
  } catch {
    return null
  }
})
