# ResponsiModul1

## REST API Pencatatan Peminjaman Buku

API ini dibangun dengan arsitektur MVC (Model-View-Controller) menggunakan Express.js dan Supabase.

## Base URL
[Tulis Link Vercel kamu setelah deploy nanti]

## Struktur Folder
- `src/config/`: Konfigurasi klien Supabase
- `src/controllers/`: Logika respon HTTP (CRUD)
- `src/models/`: Interaksi langsung ke database Supabase
- `src/routes/`: Definisi endpoint API

## Struktur Data
Tabel `loans` dengan kolom: `id` (uuid), `book_title` (text), `member_name` (text), `borrow_date` (date), `status` (text).

## Contoh Endpoint
- GET `/loans` (Semua data)
- GET `/loans?status=Terlambat` (Filter data)
- POST `/loans` (Kirim JSON `book_title`, `member_name`, `borrow_date`, `status`)
