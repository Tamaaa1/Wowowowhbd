# 🚀 Checklist Deployment Vercel

## ✅ Persiapan (Sudah Selesai)

- [x] **Foto dipindahkan ke public**
  - Lokasi: `/public/foto/` (1.jpg - 5.jpg)
  - Path di code: `/foto/1.jpg` ✅
  
- [x] **Musik ada di public**
  - Lokasi: `/public/music/Sempurna.mp3`
  - Path di code: `/music/Sempurna.mp3` ✅
  
- [x] **flower.html ada di public**
  - Lokasi: `/public/flower.html`
  - Dependencies: `/public/css1/` & `/public/main.js` ✅
  
- [x] **vercel.json sudah dibuat**
  - Routing untuk `/flower.html` ✅
  - Cache headers ✅
  
- [x] **vite.config.ts sudah diupdate**
  - `publicDir: "public"` ✅
  - `copyPublicDir: true` ✅
  
- [x] **Path components sudah diupdate**
  - `PolaroidCard.tsx` menggunakan `/foto/` ✅
  - `App.tsx` menggunakan `/music/` ✅
  - `flower.html` menggunakan path relatif ✅

## 📋 Langkah Deploy ke Vercel

### 1️⃣ Test Build Lokal
```bash
npm run build
```
**Pastikan tidak ada error!**

### 2️⃣ Preview Build Lokal
```bash
npm run preview
```
**Test semua fitur:**
- [ ] Musik autoplay berfungsi
- [ ] Foto polaroid muncul
- [ ] Navigasi ke cake page
- [ ] Klik tombol "Coba Klik Ini Saa" → flower.html muncul
- [ ] Musik tidak restart saat pindah halaman
- [ ] Tombol back di flower.html berfungsi

### 3️⃣ Push ke GitHub
```bash
git add .
git commit -m "✨ Ready for Vercel deployment with all fixes"
git push origin main
```

### 4️⃣ Deploy ke Vercel

**Opsi A: Via Website**
1. Login ke [vercel.com](https://vercel.com)
2. Klik "Add New..." → "Project"
3. Import repository GitHub
4. Setting:
   ```
   Framework Preset: Vite
   Build Command: npm run build
   Output Directory: dist
   Install Command: npm install
   Node Version: 18.x (atau terbaru)
   ```
5. Klik "Deploy"

**Opsi B: Via CLI**
```bash
# Install Vercel CLI (jika belum)
npm i -g vercel

# Login
vercel login

# Deploy
vercel --prod
```

### 5️⃣ Verifikasi Deployment

Setelah deploy selesai, test URL production:

**Test Checklist:**
- [ ] `https://your-domain.vercel.app/` → Home page muncul
- [ ] Musik otomatis play (atau play setelah interaksi)
- [ ] Foto polaroid muncul dengan benar
- [ ] Klik tombol kue → Cake page
- [ ] Tiup lilin → Polaroid muncul
- [ ] Klik "Coba Klik Ini Saa" → `https://your-domain.vercel.app/flower.html`
- [ ] Flower page muncul (BUKAN 404!)
- [ ] Musik tetap berlanjut (tidak restart)
- [ ] Tombol back di flower page → kembali ke home
- [ ] Musik tetap berlanjut saat back
- [ ] Tombol kontrol musik berfungsi (play/pause)

## 🐛 Troubleshooting

### Masalah: Musik tidak muncul
**Solusi:**
- Cek browser console untuk error
- Pastikan file `/music/Sempurna.mp3` ada di build output
- Cek Network tab di DevTools

### Masalah: Foto tidak muncul
**Solusi:**
- Cek path: harus `/foto/1.jpg` bukan `/src/styles/foto/1.jpg`
- Pastikan folder `/foto/` ada di dist setelah build
- Cek file size (max 5MB per file untuk free tier)

### Masalah: flower.html 404
**Solusi:**
- Pastikan `vercel.json` sudah di-commit
- Pastikan `flower.html` ada di `/public/`
- Re-deploy: `vercel --prod --force`
- Coba akses: `your-domain.vercel.app/flower.html` (dengan .html)

### Masalah: CSS flower.html tidak load
**Solusi:**
- Pastikan folder `/public/css1/` sudah ada
- Cek path di `flower.html`: `<link rel="stylesheet" href="css1/main.css" />`
- Build ulang: `npm run build`

### Masalah: Musik restart saat navigasi
**Solusi:**
- Sudah diperbaiki dengan localStorage
- Jika masih terjadi, cek browser console untuk error
- Clear browser cache dan test lagi

## 📊 Monitoring

Setelah deploy, monitor:
- [ ] Build logs di Vercel dashboard
- [ ] Analytics di Vercel (visitor, page views)
- [ ] Error logs jika ada
- [ ] Performance metrics

## 🔄 Update Setelah Deploy

Jika ada perubahan:
```bash
# Edit file yang diperlukan
git add .
git commit -m "Update: [deskripsi perubahan]"
git push

# Vercel akan auto-deploy (jika sudah setup)
# Atau manual: vercel --prod
```

## 📝 Notes Penting

1. **Musik Size**: File musik (4.3MB) masih dalam batas Vercel free tier
2. **Foto Size**: Total ~250KB untuk 5 foto, sangat aman
3. **Build Time**: ~4-5 detik, sangat cepat
4. **Total Size**: ~285KB untuk JS bundle (sudah di-minify)
5. **Browser Support**: Semua modern browsers (Chrome, Firefox, Safari, Edge)

## 🎉 Setelah Deploy Sukses

1. Share URL ke orang yang ulang tahun! 🎂
2. Test di berbagai device (mobile, tablet, desktop)
3. Test di berbagai browser
4. Nikmati website ulang tahun yang keren! ✨

---

**Last Updated:** 2024
**Status:** ✅ Ready for Production
**Deployment Platform:** Vercel
**Framework:** Vite + React + TypeScript