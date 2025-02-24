import BlogPost from '../components/BlogPost'
import PopularPosts from '../components/PopularPosts'
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa'

export default function Home() {
  return (
    <div className="min-h-screen bg-transparent">
      <main className="max-w-6xl mx-auto px-4 py-24">
        {/* Hero Section */}
        <section className="mb-24 text-center">
          <h1 className="text-6xl font-bold mb-6 text-white glow-text">
            Muhammed Koçhan
          </h1>
          <p className="text-2xl text-blue-200 max-w-2xl mx-auto mb-8">
            Back-End Developer
          </p>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-12">
            Web geliştirme, teknoloji ve yazılım konularında içerikler üretiyorum.
            Deneyimlerimi ve öğrendiklerimi burada paylaşıyorum.
          </p>
          
          {/* Sosyal Medya Linkleri */}
          <div className="flex justify-center gap-6">
            <a href="https://github.com/Mkochandev" className="text-gray-400 hover:text-blue-400 transition-colors">
              <FaGithub size={24} />
            </a>
            <a href="https://twitter.com/MuhammedKochn" className="text-gray-400 hover:text-blue-400 transition-colors">
              <FaTwitter size={24} />
            </a>
            <a href="https://www.linkedin.com/in/muhammed-ko%C3%A7han-bb95a734a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" className="text-gray-400 hover:text-blue-400 transition-colors">
              <FaLinkedin size={24} />
            </a>
          </div>
        </section>

        {/* Content Section */}
        <div className="flex gap-12">
          {/* Main Content */}
          <div className="flex-grow">
            <h2 className="text-3xl font-bold mb-8 text-white">Son Yazılarım</h2>
            <div className="grid gap-8">
              <BlogPost
                title="İlk Blog Yazım"
                date="15 Mart 2024"
                excerpt="Bu benim ilk blog yazım. Burada yazının kısa bir özeti yer alacak..."
                slug="ilk-blog-yazim"
              />
              <BlogPost
                title="İkinci Yazı"
                date="16 Mart 2024"
                excerpt="İkinci blog yazımın özeti burada yer alacak..."
                slug="ikinci-yazi"
              />
            </div>
          </div>

          {/* Sidebar */}
          <div className="w-80 shrink-0">
            <PopularPosts />
          </div>
        </div>
      </main>
    </div>
  )
} 