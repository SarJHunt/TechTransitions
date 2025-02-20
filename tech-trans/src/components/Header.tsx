import Link from "next/link"

export default function Header() {
  return (
    <header className="bg-primary text-white py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Tech Transitions</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:underline">
                About
              </Link>
            </li>
            <li>
              <Link href="/articles" className="hover:underline">
                Articles
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

