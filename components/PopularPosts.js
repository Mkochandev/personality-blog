import Link from 'next/link'

export default function PopularPosts() {
  return (
    <div className="gradient-border">
      <div className="p-6">
        <h3 className="text-xl font-bold mb-6 text-white">Çok Okunanlar</h3>
        <div className="space-y-6">
          {popularPosts.map((post, index) => (
            <Link 
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="flex gap-4 items-start group"
            >
              <span className="text-xl font-bold text-blue-400 opacity-50 group-hover:opacity-100 transition-opacity">
                0{index + 1}
              </span>
              <div>
                <h4 className="font-medium text-gray-300 group-hover:text-blue-400 transition-colors line-clamp-2">
                  {post.title}
                </h4>
                <p className="text-sm text-gray-500 mt-1">{post.date}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

const popularPosts = [
  {
    title: "Next.js ile Blog Nasıl Yapılır?",
    date: "10 Mart 2024",
    slug: "nextjs-ile-blog-nasil-yapilir"
  },
  {
    title: "React Hooks Rehberi",
    date: "5 Mart 2024",
    slug: "react-hooks-rehberi"
  },
  {
    title: "Tailwind CSS İpuçları",
    date: "1 Mart 2024",
    slug: "tailwind-css-ipuclari"
  },
  {
    title: "JavaScript Best Practices",
    date: "25 Şubat 2024",
    slug: "javascript-best-practices"
  },
] 