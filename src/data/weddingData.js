// src/data/weddingData.js

const weddingData = {
  couple: {
    bride: "Sarah",
    groom: "Bagus",
    nicknames: "Sarah & Bagus",
    // Gambar utama untuk Hero Section
    photoUrl: "assets/images/couple-hero.jpeg"
  },
  dates: {
    akad: "Sabtu, 14 September 2024",
    resepsi: "Minggu, 15 September 2024"
  },
  events: [
    {
      type: "Akad Nikah",
      date: "Sabtu, 14 September 2024",
      time: "09.00 WIB",
      location: "Masjid Agung Surabaya",
      address: "Jl. Mesjid Al-Akbar Timur No.9, Pagesangan, Jambangan, Surabaya",
      googleMapsLink: "https://maps.app.goo.gl/contoh-link-akad" // <-- GANTI DENGAN LINK GOOGLE MAPS ASLI
    },
    {
      type: "Resepsi",
      date: "Minggu, 15 September 2024",
      time: "19.00 - Selesai WIB",
      location: "Grand Empire Palace Convention Hall",
      address: "Jl. Blauran No.57-75, Genteng, Surabaya",
      googleMapsLink: "https://maps.app.goo.gl/contoh-link-resepsi" // <-- GANTI DENGAN LINK GOOGLE MAPS ASLI
    }
  ],
  ourStory: [
    {
      year: "2018",
      title: "Awal Pertemuan",
      description: "Kami pertama kali bertemu di acara kampus, sebuah seminar yang tidak pernah kami duga akan menjadi awal dari perjalanan ini.",
      imageUrl: "assets/images/story-1.jpeg"
    },
    {
      year: "2020",
      title: "Berkencan",
      description: "Dua tahun kemudian, kami memberanikan diri untuk memulai babak baru. Setiap hari adalah petualangan baru bersama.",
      imageUrl: "assets/images/story-2.jpeg"
    },
    {
      year: "2023",
      title: "Lamaran",
      description: "Di bawah bintang-bintang, dia melamar dan saya menjawab ya! Momen yang akan selalu kami kenang seumur hidup.",
      imageUrl: "assets/images/story-3.jpeg"
    }
  ],
  // Pastikan gambar-gambar ini ada di public/assets/images/
  galleryImages: [
    "assets/images/gallery-1.jpeg",
    "assets/images/gallery-2.jpeg",
    "assets/images/gallery-3.jpeg",
    "assets/images/gallery-4.jpeg",
    "assets/images/gallery-5.jpeg",
    "assets/images/gallery-6.jpeg",
    // Tambahkan lebih banyak gambar jika diperlukan
  ],
  giftInfo: {
    message: "Doa restu Anda adalah kado terindah bagi kami. Namun, jika Anda berkenan memberikan tanda kasih, Anda dapat mengirimkannya melalui:",
    bankDetails: [
      {
        bankName: "Bank BCA",
        accountName: "Sarah Permata",
        accountNumber: "1234567890"
      },
      {
        bankName: "Bank Mandiri",
        accountName: "Bagus Setiawan",
        accountNumber: "0987654321"
      }
    ],
    altGiftMessage: "Atau bisa juga dikirimkan melalui platform digital berikut:",
    digitalPayments: [
      { name: "Dana", number: "0812-XXXX-XXXX" },
      { name: "OVO", number: "0813-XXXX-XXXX" }
    ],
    // Contoh untuk menambahkan link jika ada
    linkDigital: "https://link.dana.id/sarahbagus" // Opsional: Link langsung ke QRIS/pembayaran digital
  },
  healthProtocol: {
    title: "Protokol Kesehatan",
    message: "Demi kenyamanan dan keamanan bersama, mohon tetap mengikuti protokol kesehatan yang berlaku selama acara. Terima kasih atas pengertian Anda."
  },
  contact: {
    phone: "+62 812-3456-7890", // Nomor kontak untuk pertanyaan
    instagram: "https://instagram.com/sarahdanbagus_wedding" // Opsional
  }
};

export default weddingData;