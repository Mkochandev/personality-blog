import BlogPost from '../../components/BlogPost'

export default function Blog() {
  return (
    <div className="min-h-screen bg-transparent">
      <main className="max-w-6xl mx-auto px-4 py-12">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4 text-white glow-text">Blog Yazılarım</h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Web geliştirme, teknoloji ve yazılım hakkında deneyimlerimi paylaştığım yazılar
          </p>
        </div>
        
        {/* Blog Posts Grid */}
        <div className="grid gap-8 max-w-4xl mx-auto">
          <BlogPost
            title="Next.js ile Blog Nasıl Yapılır?"
            date="15 Mart 2024"
            excerpt="Modern bir blog sitesi oluşturmak için Next.js ve Tailwind CSS kullanımını detaylı olarak inceliyoruz..."
            slug="nextjs-ile-blog-nasil-yapilir"
          />
          <BlogPost
            title="React Hooks Rehberi"
            date="10 Mart 2024"
            excerpt="React Hooks'un temel kullanımından ileri seviye örneklere kadar kapsamlı bir rehber..."
            slug="react-hooks-rehberi"
          />
          <BlogPost
            title="Tailwind CSS İpuçları"
            date="5 Mart 2024"
            excerpt="Tailwind CSS ile daha etkili ve hızlı stil yazmanın yolları, en iyi pratikler ve püf noktaları..."
            slug="tailwind-css-ipuclari"
          />
          <BlogPost
            title="JavaScript Best Practices"
            date="1 Mart 2024"
            excerpt="Modern JavaScript geliştirmede dikkat edilmesi gereken önemli noktalar ve kod kalitesini artıran yaklaşımlar..."
            slug="javascript-best-practices"
          />
        </div>

        {/* Pagination veya Load More butonu eklenebilir */}
        <div className="flex justify-center mt-12">
          <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            Daha Fazla Yükle
          </button>
        </div>
      </main>
    </div>
  )
} 