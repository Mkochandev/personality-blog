import Link from 'next/link'

export default function Header() {
  return (
    <header className="w-full py-6 px-4 bg-gray-900/80 backdrop-blur-sm sticky top-0 z-50 border-b border-gray-800">
      <nav className="max-w-6xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-blue-400 hover:text-blue-300 transition-colors glow-text">
          MK
        </Link>
        
        <ul className="flex gap-8 text-lg">
          <li>
            <Link href="/" className="text-gray-300 hover:text-blue-400 transition-colors">
              Ana Sayfa
            </Link>
          </li>
          <li>
            <Link href="/blog" className="text-gray-300 hover:text-blue-400 transition-colors">
              Blog
            </Link>
          </li>
          <li>
            <Link href="/about" className="text-gray-300 hover:text-blue-400 transition-colors">
              Hakkımda
            </Link>
          </li>
          <li>
            <Link href="/contact" className="text-gray-300 hover:text-blue-400 transition-colors">
              İletişim
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
} 