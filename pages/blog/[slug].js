import { getAllPostIds, getPostData } from '../../lib/posts'

export default function BlogPost({ postData }) {
  return (
    <div className="min-h-screen bg-transparent">
      <main className="max-w-4xl mx-auto px-4 py-12">
        <article className="gradient-border">
          <div className="p-8">
            <h1 className="text-4xl font-bold mb-4 text-white glow-text">
              {postData.title}
            </h1>
            <div className="text-blue-400 mb-8">{postData.date}</div>
            <div 
              className="prose prose-invert prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: postData.contentHtml }} 
            />
          </div>
        </article>
      </main>
    </div>
  )
}

export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.slug)
  return {
    props: {
      postData
    }
  }
} 