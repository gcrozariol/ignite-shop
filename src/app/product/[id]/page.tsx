import Image from 'next/image'
import { notFound } from 'next/navigation'

import { getProductById } from '@/lib/stripe/get-product-by-id'

export const revalidate = 60 * 60 * 1 // revalidate data after 1 hour

export default async function Page({ params }: { params: { id: string } }) {
  const product = await getProductById(params.id)

  if (!product) {
    return notFound()
  }

  return (
    <main className="mx-auto grid max-w-[1180px] grid-cols-2 gap-16">
      <div className="flex h-[656px] w-full max-w-[576px] items-center justify-center rounded-lg bg-gradient-to-b from-green100 to-purple300">
        <Image
          className="object-cover"
          src={product.imageUrl}
          alt=""
          width={520}
          height={480}
        />
      </div>
      <div className="flex flex-col">
        <h1 className="text-2xl font-bold text-gray300">{product.name}</h1>
        <span className="mb-4 block text-2xl text-green300">
          {product.price}
        </span>
        <p className="pt-4 text-md leading-relaxed text-gray300">
          {product.description}
        </p>

        <button className="mt-auto cursor-pointer rounded-lg border-0 bg-green500 p-5 font-bold text-white transition-all ease-in-out hover:bg-green300 active:bg-green100">
          Buy now
        </button>
      </div>
    </main>
  )
}
