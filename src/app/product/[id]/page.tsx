import Image from 'next/image'

export default function Page({ params }: { params: { id: string } }) {
  return (
    <main className="mx-auto grid max-w-[1180px] grid-cols-2 gap-16">
      <div className="flex h-[656px] w-full max-w-[576px] items-center justify-center rounded-lg bg-gradient-to-b from-green100 to-purple300">
        {/* <Image className="object-cover" src="" alt="" /> */}
      </div>
      <div className="flex flex-col">
        <h1 className="text-2xl font-bold text-gray300">Camiseta X</h1>
        <span className="mb-4 block text-2xl text-green300">$ 79.90</span>
        <p className="pt-4 text-md leading-relaxed text-gray300">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium
          illum dicta sapiente, necessitatibus itaque repudiandae minus in.
          Illum voluptas facere molestias aut mollitia. Alias aliquam, deleniti
          odio vel debitis at?
        </p>

        <button className="mt-auto cursor-pointer rounded-lg border-0 bg-green500 p-5 font-bold text-white transition-all ease-in-out hover:bg-green300 active:bg-green100">
          Buy now
        </button>
      </div>
    </main>
  )
}
