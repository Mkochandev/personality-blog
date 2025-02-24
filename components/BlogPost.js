export default function BlogPost({ title, date, excerpt, slug }) {
  return (
    <div className="gradient-border">
      <div className="p-6">
        <article className="text-gray-300">
          <h2 className="text-2xl font-bold mb-2">
            <a href={`/blog/${slug}`} className="text-white hover:text-blue-400 transition-colors">
              {title}
            </a>
          </h2>
          <div className="text-blue-400 text-sm mb-4">{date}</div>
          <p className="text-gray-400 mb-4">{excerpt}</p>
          <a 
            href={`/blog/${slug}`} 
            className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium"
          >
            Devamını Oku 
            <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </article>
      </div>
    </div>
  )
} 