
  # 🌸 Web Ulang Tahun Taman Bunga 🎂

  Website ulang tahun interaktif dengan tema taman bunga, animasi, musik, dan galeri foto polaroid.

  ## ✨ Fitur

  - 🎵 Background musik yang berlanjut di semua halaman
  - 🌸 Animasi bunga yang cantik
  - 🎂 Halaman kue interaktif (tiup lilin!)
  - 📸 Galeri foto polaroid dengan carousel otomatis
  - 🎨 Animasi falling petals dan sparkles
  - 📱 Responsive design (mobile & desktop)
  - 🔊 Kontrol musik (play/pause)

  ## 🚀 Deployment ke Vercel

  ### Persiapan Sebelum Deploy

  1. **Pastikan semua file sudah di commit**
     ```bash
     git add .
     git commit -m "Ready for deployment"
     git push
     ```

  2. **File yang sudah disiapkan untuk production:**
     - ✅ Foto sudah dipindahkan ke `/public/foto/`
     - ✅ Musik ada di `/public/music/Sempurna.mp3`
     - ✅ `flower.html` ada di `/public/`
     - ✅ CSS dependencies di `/public/css1/`
     - ✅ `vercel.json` untuk routing
     - ✅ Build configuration di `vite.config.ts`

  ### Langkah Deploy di Vercel

  1. **Login ke Vercel**
     - Buka [vercel.com](https://vercel.com)
     - Login dengan GitHub account

  2. **Import Project**
     - Klik "Add New..." → "Project"
     - Pilih repository GitHub Anda
     - Klik "Import"

  3. **Configure Project**
     ```
     Framework Preset: Vite
     Build Command: npm run build
     Output Directory: dist
     Install Command: npm install
     ```

  4. **Environment Variables** (opsional)
     - Tidak ada yang perlu diset untuk project ini

  5. **Deploy!**
     - Klik "Deploy"
     - Tunggu proses build selesai (~2-3 menit)

  ### Deploy Manual via CLI

  ```bash
  # Install Vercel CLI
  npm i -g vercel

  # Login
  vercel login

  # Deploy
  vercel

  # Deploy to production
  vercel --prod
  ```

  ## 🛠️ Development

  ### Install Dependencies
  ```bash
  npm install
  ```

  ### Run Development Server
  ```bash
  npm run dev
  ```
  Server akan berjalan di `http://localhost:3000`

  ### Build for Production
  ```bash
  npm run build
  ```

  ### Preview Production Build
  ```bash
  npm run preview
  ```

  ## 📁 Struktur Project

  ```
  ├── public/
  │   ├── foto/          # Foto untuk polaroid (5 gambar)
  │   ├── music/         # Background music (Sempurna.mp3)
  │   ├── css1/          # CSS untuk flower.html
  │   ├── flower.html    # Halaman bunga terpisah
  │   └── main.js        # Script untuk flower.html
  ├── src/
  │   ├── components/    # React components
  │   ├── styles/        # CSS files
  │   └── App.tsx        # Main app component
  ├── vercel.json        # Vercel configuration
  └── vite.config.ts     # Vite configuration
  ```

  ## 🔧 Troubleshooting

  ### Musik tidak muncul di production
  - ✅ **Sudah diperbaiki**: Musik ada di `/public/music/Sempurna.mp3`
  - Path di code: `/music/Sempurna.mp3` (sudah benar)

  ### Foto polaroid tidak muncul
  - ✅ **Sudah diperbaiki**: Foto dipindahkan ke `/public/foto/`
  - Path di code: `/foto/1.jpg` hingga `/foto/5.jpg` (sudah benar)

  ### Halaman flower.html 404
  - ✅ **Sudah diperbaiki**: `flower.html` ada di `/public/`
  - `vercel.json` sudah dikonfigurasi untuk routing
  - Akses via: `your-domain.vercel.app/flower.html`

  ### Musik restart saat pindah halaman
  - ✅ **Sudah diperbaiki**: Menggunakan localStorage untuk menyimpan posisi musik
  - Musik akan berlanjut dari posisi yang sama saat navigasi

  ## 🎵 Cara Kerja Musik

  1. Musik otomatis diputar saat website dibuka
  2. Posisi musik disimpan setiap 1 detik ke localStorage
  3. Saat pindah halaman, posisi dipulihkan dari localStorage
  4. Tombol kontrol musik tersedia di pojok kanan bawah
  5. Musik berlanjut di semua halaman:
     - Home → Cake Page → Flower Page
     - Flower Page → Back to Home

  ## 📱 Browser Support

  - ✅ Chrome/Edge (Recommended)
  - ✅ Firefox
  - ✅ Safari
  - ✅ Mobile browsers

  ## 🎨 Customization

  ### Ganti Musik
  1. Ganti file di `public/music/Sempurna.mp3`
  2. Atau update path di `src/App.tsx` dan `public/flower.html`

  ### Ganti Foto
  1. Ganti foto di `public/foto/` (1.jpg - 5.jpg)
  2. Ukuran rekomendasi: 1000x1000px (square)

  ### Ganti Warna Tema
  - Edit di `src/components/` untuk warna gradients
  - Warna utama: `#F5F5DC`, `#E8DCC4`, `#D4C5B0` (beige)
  - Warna aksen: `#8FA378`, `#B5C99A` (green)
  - Warna bunga: `#FFC0CB`, `#FFB6C1` (pink)

  ## 📄 License

  Personal use only.

  ## 💝 Credits

  Made with ❤️ for someone special's birthday! 🎂✨

  This is a code bundle for Web Ulang Tahun Taman Bunga. The original project is available at https://www.figma.com/design/9uAHXXevbMDJfnB9Psoo09/Web-Ulang-Tahun-Taman-Bunga.

  ## Running the code

  Run `npm i` to install the dependencies.

  Run `npm run dev` to start the development server.
  