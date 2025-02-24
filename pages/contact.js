export default function Contact() {
  return (
    <div className="min-h-screen bg-transparent">
      <main className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-12 text-white glow-text text-center">İletişim</h1>
        
        {/* İletişim Bilgileri */}
        <div className="gradient-border mb-12">
          <div className="p-8">
            <div className="space-y-6 text-gray-300">
              <div>
                <h2 className="text-2xl font-bold mb-4 text-white">İletişim Bilgilerim</h2>
                <div className="space-y-3">
                  <p className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <a href="muhammedkochandev@gmail.com" className="text-blue-400 hover:text-blue-300 transition-colors">
                      muhammedkochandev@gmail.com
                    </a>
                  </p>
                  <p className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
                    </svg>
                    <a href="https://github.com/Mkochandev" className="text-blue-400 hover:text-blue-300 transition-colors">
                      github.com/Mkochandev
                    </a>
                  </p>
                  <p className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                    </svg>
                    <a href="https://www.linkedin.com/in/muhammed-ko%C3%A7han-bb95a734a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" className="text-blue-400 hover:text-blue-300 transition-colors">
                      linkedin.com/in/MuhammedKoçhan
                    </a>
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-white">Konum</h2>
                <p>Gaziantep, Türkiye</p>
              </div>
            </div>
          </div>
        </div>

        {/* İletişim Formu */}
        <div className="gradient-border">
          <div className="p-8">
            <h2 className="text-2xl font-bold mb-6 text-white">Bana Mesaj Gönderin</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-300 font-medium mb-2">
                  Ad Soyad
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-300"
                  placeholder="Adınız Soyadınız"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-gray-300 font-medium mb-2">
                  E-posta
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-300"
                  placeholder="ornek@email.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-gray-300 font-medium mb-2">
                  Mesaj
                </label>
                <textarea
                  id="message"
                  rows="5"
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-300"
                  placeholder="Mesajınız..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                Gönder
              </button>
            </form>
          </div>
        </div>
      </main>
    </div>
  )
} 