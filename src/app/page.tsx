'use client'

import 'keen-slider/keen-slider.min.css'

import { useKeenSlider } from 'keen-slider/react'
import Image from 'next/image'

import tshirt1 from '../assets/tshirts/1.png'
import tshirt2 from '../assets/tshirts/2.png'
import tshirt3 from '../assets/tshirts/3.png'

export default function Home() {
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
      <a className="keen-slider__slide relative flex transform cursor-pointer items-center justify-center rounded-[8px] bg-gradient-to-b from-green100 to-purple300 py-24 *:hover:translate-y-0 *:hover:opacity-100">
        <Image className="object-cover" src={tshirt1} width={520} alt="" />
        <footer className="absolute bottom-1 left-1 right-1 flex -translate-y-[-110%] transform items-center justify-between rounded-[6px] bg-black bg-opacity-60 p-8 opacity-0 transition-all ease-in-out">
          <strong className="text-lg">T-shirt X</strong>
          <span className="text-xl font-bold text-green300">$ 79.90</span>
        </footer>
      </a>

      <a className="keen-slider__slide relative flex transform cursor-pointer items-center justify-center rounded-[8px] bg-gradient-to-b from-green100 to-purple300 py-24 *:hover:translate-y-0 *:hover:opacity-100">
        <Image className="object-cover" src={tshirt2} width={520} alt="" />
        <footer className="absolute bottom-1 left-1 right-1 flex -translate-y-[-110%] transform items-center justify-between rounded-[6px] bg-black bg-opacity-60 p-8 opacity-0 transition-all ease-in-out">
          <strong className="text-lg">T-shirt X</strong>
          <span className="text-xl font-bold text-green300">$ 79.90</span>
        </footer>
      </a>

      <a className="keen-slider__slide relative flex transform cursor-pointer items-center justify-center rounded-[8px] bg-gradient-to-b from-green100 to-purple300 py-24 *:hover:translate-y-0 *:hover:opacity-100">
        <Image className="object-cover" src={tshirt3} width={520} alt="" />
        <footer className="absolute bottom-1 left-1 right-1 flex -translate-y-[-110%] transform items-center justify-between rounded-[6px] bg-black bg-opacity-60 p-8 opacity-0 transition-all ease-in-out">
          <strong className="text-lg">T-shirt X</strong>
          <span className="text-xl font-bold text-green300">$ 79.90</span>
        </footer>
      </a>

      <a className="keen-slider__slide relative flex transform cursor-pointer items-center justify-center rounded-[8px] bg-gradient-to-b from-green100 to-purple300 py-24 *:hover:translate-y-0 *:hover:opacity-100">
        <Image className="object-cover" src={tshirt3} width={520} alt="" />
        <footer className="absolute bottom-1 left-1 right-1 flex -translate-y-[-110%] transform items-center justify-between rounded-[6px] bg-black bg-opacity-60 p-8 opacity-0 transition-all ease-in-out">
          <strong className="text-lg">T-shirt X</strong>
          <span className="text-xl font-bold text-green300">$ 79.90</span>
        </footer>
      </a>
    </main>
  )
}
