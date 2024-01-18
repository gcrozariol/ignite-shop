'use client'

import 'keen-slider/keen-slider.min.css'

import { useKeenSlider } from 'keen-slider/react'
import Image from 'next/image'

interface Product {
  id: string
  name: string
  imageUrl: string
  price: number
}

export default function Products({ products }: { products: Product[] }) {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    },
  })

  return (
    <main
      className="max-w-carrossel keen-slider ml-auto flex w-full overflow-hidden"
      ref={sliderRef}
    >
      {products.map((product) => {
        return <Product key={product.id} product={product} />
      })}
    </main>
  )
}

function Product({ product }: { product: Product }) {
  return (
    <a className="keen-slider__slide relative flex transform cursor-pointer items-center justify-center rounded-[8px] bg-gradient-to-b from-green100 to-purple300 py-24 *:hover:translate-y-0 *:hover:opacity-100">
      <Image
        className="object-cover"
        src={product.imageUrl}
        width={520}
        height={480}
        priority
        alt=""
      />
      <footer className="absolute bottom-1 left-1 right-1 flex -translate-y-[-110%] transform items-center justify-between rounded-[6px] bg-black bg-opacity-60 p-8 opacity-0 transition-all ease-in-out">
        <strong className="text-lg">{product.name}</strong>
        <span className="text-xl font-bold text-green300">{product.price}</span>
      </footer>
    </a>
  )
}