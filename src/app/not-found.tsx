import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex h-auto min-h-[656px] w-full flex-col items-center justify-center gap-5">
      <h1 className="text-2xl font-bold">404: Not Found</h1>
      <Link
        className="rounded-lg bg-green500 px-14 py-4 text-md transition-all ease-in-out hover:bg-green300 active:bg-green100"
        href="/"
      >
        Return Home
      </Link>
    </div>
  )
}
