---
title: 'Next.js ile Blog Nasıl Yapılır?'
date: '2024-03-15'
excerpt: 'Modern bir blog sitesi oluşturmak için Next.js ve Tailwind CSS kullanımını detaylı olarak inceliyoruz...'
---

# Next.js ile Blog Nasıl Yapılır?

Next.js, React tabanlı web uygulamaları geliştirmek için mükemmel bir framework'tür. Bu yazıda, Next.js kullanarak nasıl modern bir blog sitesi oluşturabileceğinizi adım adım anlatacağım.

## Neden Next.js?

Next.js'in sunduğu bazı önemli avantajlar:

- **Sayfa Bazlı Routing**: Dosya sistemi tabanlı routing yapısı
- **SSG ve SSR**: Statik site üretimi ve sunucu taraflı rendering
- **API Routes**: Backend API'ları kolayca oluşturma
- **Image Optimization**: Otomatik görsel optimizasyonu

## Kurulum ve Yapılandırma

1. Yeni bir Next.js projesi oluşturun:

```bash
npx create-next-app@latest my-blog
```


2. Tailwind CSS ekleyin:

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```     



3. Gerekli paketleri yükleyin:

```bash
npm install @tailwindcss/typography gray-matter remark remark-html
```


## Blog Yazılarını Markdown ile Yazmak

Markdown kullanmanın avantajları:
- Kolay yazım ve düzenleme
- Zengin metin formatı
- Kod bloklarında syntax highlighting
- Meta veri desteği

## Sonuç

Next.js ve Markdown kombinasyonu, blog yazarları için ideal bir çözüm sunuyor...