import Link from "next/link"

export default function Navbar() {
  return (
    <nav className="w-full bg-white shadow-md px-8 py-4 flex gap-6">
      <Link href="/" className="font-bold text-primary-500">
        Home
      </Link>
      <Link href="/about" className="text-neutral-600 hover:text-primary-500">
        About
      </Link>
      <Link href="/contact" className="text-neutral-600 hover:text-primary-500">
        Contact
      </Link>
    </nav>
  )
}