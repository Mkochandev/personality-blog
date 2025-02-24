export default function About() {
  return (
    <div className="min-h-screen bg-transparent">
      <main className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-12 text-white glow-text text-center">Hakkımda</h1>
        
        <div className="gradient-border">
          <div className="p-8">
            <div className="space-y-8 text-gray-300">
              <p className="text-xl leading-relaxed">
                Merhaba! Ben Muhammed Koçhan. Web geliştirme ve teknoloji konularında 
                tutkulu bir yazılımcıyım. Gaziantep Üniversitesinde Back-End yazılım 
                geliştirme bölümü birinci sınıf öğrencisiyim.
              </p>
              
              <div>
                <h2 className="text-2xl font-bold mb-4 text-white">Deneyimlerim</h2>
                <p className="leading-relaxed">
                  
                </p>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold mb-4 text-white">İlgi Alanlarım</h2>
                <ul className="list-disc list-inside space-y-2">
                  <li>Web Geliştirme</li>
                  <li>Oyun Geliştirme</li>
                  <li>Açık Kaynak Projeler</li>
                  <li>Yeni Teknolojiler</li>
                </ul>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold mb-4 text-white">İletişim</h2>
                <p>
                  Benimle iletişime geçmek için:{' '}
                  <a 
                    href="mailto:email@example.com" 
                    className="text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    muhammedkochandev@gmail.com
                  </a>
                </p>
              </div>

              {/* Sosyal Medya Linkleri */}
              <div className="flex gap-6 pt-4">
                <a 
                  href="https://github.com/Mkochandev" 
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
                <a 
                  href="https://twitter.com/MuhammedKochn" 
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Twitter
                </a>
                <a 
                  href="https://www.linkedin.com/in/muhammed-ko%C3%A7han-bb95a734a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" 
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
} 