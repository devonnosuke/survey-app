[Project]
Name=Kuis Survey Anime
Version=1.0.0
Description=Kuis Survey Anime adalah aplikasi web interaktif yang menampilkan pertanyaan survei seputar dunia anime. Aplikasi ini menampilkan satu soal survey dengan 10 jawaban yang masing-masing memiliki jumlah partisipan yang memberikan jawaban serupa. Data survey disimpan di localStorage untuk mendukung penggunaan berkelanjutan.

[Features]
Feature1=Menampilkan satu pertanyaan survei dengan 10 jawaban.
Feature2=Menampilkan jumlah partisipan untuk setiap jawaban.
Feature3=Navigasi antar pertanyaan survei.
Feature4=Data survei disimpan di browser menggunakan localStorage.
Feature5=Desain modular dengan struktur file yang mudah dikembangkan.

[Technologies]
Technology1=HTML
Technology2=CSS
Technology3=JavaScript
Technology4=localStorage

[Structure]
index.html=Halaman utama aplikasi
css/styles.css=File gaya aplikasi
js/app.js=Inisialisasi aplikasi
js/surveyData.js=Data soal dan jawaban survei
js/surveyManager.js=Logika survei
js/uiManager.js=Rendering tampilan
js/utils.js=Fungsi utilitas (localStorage)
assets/images=Gambar pendukung (opsional)

[Setup]
Step1=Clone Repository: git clone https://github.com/devonnosuke/survey-app.git
Step2=Navigasi ke Direktori: cd survey-app
Step3=Buka di Browser: Gunakan Live Server di VS Code atau buka file index.html di browser Anda.

[Usage]
Usage1=Aplikasi akan menampilkan pertanyaan survei pertama secara otomatis.
Usage2=Setiap jawaban akan menampilkan jumlah partisipan yang memilihnya.
Usage3=Klik tombol Lanjut untuk berpindah ke soal survei berikutnya.
Usage4=Setelah semua soal selesai, akan muncul pesan terima kasih.

[Versioning]
System=Semantic Versioning (SemVer)
1.0.0=Fitur dasar kuis survey, Navigasi antar pertanyaan, Penyimpanan data survei di localStorage, Desain modular untuk pengembangan lebih lanjut.

[FutureDevelopment]
Development1=Tambahkan fitur untuk mengirim data survei ke backend (opsional).
Development2=Buat halaman ringkasan untuk menampilkan hasil survei keseluruhan.
Development3=Tambahkan lebih banyak pertanyaan survei.
Development4=Integrasikan dengan grafik untuk visualisasi data survei.

[License]
Type=MIT License
