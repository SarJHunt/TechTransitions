import Image from "next/image"

export default function Hero() {
  return (
    <div className="relative h-[60vh] min-h-[400px] w-full">
      <Image src="/Hero.png" alt="Tech Transitions Hero" fill className="object-cover" />
      <div className="absolute inset-0 flex items-center justify-center">
        <p className="text-2xl md:text-4xl text-white font-semibold text-center px-4 py-2 bg-black bg-opacity-50 rounded-lg shadow-lg">
          Bite-sized learning for busy lives
        </p>
      </div>
    </div>
  )
}

