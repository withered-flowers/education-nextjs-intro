# [WIP] Education NextJS Introduction

## Table of Content

- [Disclaimer](#disclaimer)
- [Demo](#demo)
  - [Step 1 - Inisialisasi Proyek](#step-1---inisialisasi-proyek)
  - [Step 2 - Analisa File / Folder](#step-2---analisa-file--folder)
  - [Step 3 - Jalankan Proyek](#step-3---jalankan-proyek)
  - [Step 4 - Membuat Routing /about](#step-4---membuat-routing-about)
  - [Step 5 - Menambahkan "anchor" pada /about](#step-5---menambahkan-anchor-pada-about)
  - [Step 6 - Membuat Routing /dashboard](#step-6---membuat-routing-dashboard)
  - [Step 7 - Membuat Component DashboardSidebar](#step-7---membuat-component-dashboardsidebar)

## Disclaimer

Untuk demo pada pembelajaran ini akan menggunakan:

- `NextJS app router`
- `tailwindcss`

Jadi untuk yang mencari `pages router`, mohon maaf, gunakan pembelajaran yang lainnya yah !

## Demo

### Step 1 - Inisialisasi Proyek

1. `npm create next-app@latest`
1. `What is your project named? <write_the_project_name>`
1. `Would you like to use TypeScript? Yes`
1. `Would you like to use ESLint? Yes`
1. `Would you like to use Tailwind CSS? Yes`
1. `Would you like to use `src/` directory? Yes`
1. `Would you like to use App Router? (recommended) Yes`
1. `Would you like to customize the default import alias (@/*)? No`

### Step 2 - Analisa File / Folder

Apa sajakah file / folder yang penting?

Folder:

- `public/` -> tempat di mana kita meletakkan image yang tidak akan diproses
- `src/` -> tempat di mana kita meletakkan kode JS / TS / JSX / TSX yang dimiliki
- `src/app` -> tempat di mana kita meletakkan file routing yang digunakan oleh NextJS

File:

- `next.config.js` -> file konfigurasi NextJS
- `src/app/layout.tsx` -> file layout utama yang digunakan oleh NextJS
- `src/app/page.tsx` -> file routing yang digunakan oleh NextJS (akan mengarah ke `http://localhost:3000/`)

### Step 3 - Jalankan Proyek

1. `npm run dev`
1. Buka browser dan ketikkan `http://localhost:3000/`
1. Lihat halaman yang dibentuk oleh NextJS. Halaman ini adalah gabungan dari Layout (`src/layout.tsx`) dan Page (`src/page.tsx`)
1. Perhatikan pada `src/layout.tsx` berisi kode JSX yang akan digunakan oleh NextJS untuk membentuk halaman utama dan berisi tag `html` serta `metadata` yang akan digunakan untuk membuat SEO.
1. Perhatikan pada `src/page.tsx` berisi kode JSX yang membentuk `tampilan` pada routing `/`

### Step 4 - Membuat Routing /about

Pada langkah ini mari kita mencoba untuk membuat sebuah routing baru dengan nama `/about` (`http://localhost:3000/about`)

1. Membuat sebuah folder baru pada `src/app` dengan nama `about` (`src/app/about`)
1. Membuat sebuah file baru pada folder tersebut dengan nama `page.tsx` (`src/app/about/page.tsx`)
1. Membuat component baru yang berisikan kode seperti di bawah ini:

   ```tsx
   // Nama dari "Component" untuk page.tsx tidak perlu sama.
   const AboutPage = () => {
     return (
       <section className="w-full min-h-screen flex flex-col items-center justify-center">
         <h1 className="text-3xl font-semibold">About Page</h1>
       </section>
     );
   };

   export default AboutPage;
   ```

1. Buka kembali browser dan ketikkan `http://localhost:3000/about` dan voila, kita sudah berhasil membuat sebuah routing baru ! Cukup mudah bukan?

### Step 5 - Menambahkan "anchor" pada /about

Pada langkah ini kita akan membuat sebuah anchor yang akan mengarah ke `/` dari halaman `/about`. Pada NextJS, untuk membuat "anchor", kita akan menggunakan component bawaan yang sudah disediakan oleh NextJS, dengan nama `Link`

1. Buka kembali file `src/app/about.tsx`
1. Modifikasi kode menjadi seperti berikut:

   ```tsx
   // ?? Step 5 - Menambahkan "anchor" pada /about (1)
   // Import Link
   import Link from "next/link";

   // Nama dari "Component" untuk page.tsx tidak perlu sama.
   const AboutPage = () => {
     return (
       <section className="w-full min-h-screen flex flex-col items-center justify-center">
         <h1 className="text-3xl font-semibold">About Page</h1>
         {/* ?? Step 5 - Menambahkan "anchor" pada /about (2) */}
         {/* Gunakan link di manapun diinginkan seperti layaknya tag <a> */}
         {/* Untuk props apa saja yang dimiliki link, bisa dibaca pada ref berikut */}
         {/* https://nextjs.org/docs/app/api-reference/components/link */}
         <Link
           href="/"
           className="underline text-blue-400 hover:text-blue-600 underline-offset-4 transition-colors duration-300"
         >
           Back to Home
         </Link>
       </section>
     );
   };

   export default AboutPage;
   ```

1. Jalankan pada browser dan lihat kembali halaman `http://localhost:3000/about`, selamat, kita sudah berhasil menambahkan Link pada halaman yang dibuat !

### Step 6 - Membuat Routing /dashboard

Pada langkah ini kita akan membuat sebuah layout untuk Dashboard dan membuat sebuah routing baru dengan nama `/dashboard`.

1. Membuat sebuah folder baru pada `src/app` dengan nama `dashboard` (`src/app/dashboard`)
1. Membuat sebuah file baru pada folder tersebut dengan nama `layout.tsx` (`src/app/dashboard/layout.tsx`)
1. Membuat sebuah file baru pada folder tersebut dengan nama `page.tsx` (`src/app/dashboard/page.tsx`)
1. Memodifikasi file `src/app/dashboard/layout.tsx` menjadi seperti berikut:

   ```tsx
   // ?? Step 6 - Membuat Routing /dashboard (1)
   // layout ini akan meng-extend layout default dari NextJS (pages/app.tsx)
   // Digunakan untuk menampilkan sidebar dan content
   import Link from "next/link";

   const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
     return (
       // Whole Screen
       <section className="w-full h-screen flex">
         {/* Left Side */}
         <aside className="w-64 h-full bg-gray-100 dark:bg-zinc-800/30 p-4">
           <h2 className="text-2xl font-semibold mb-4">Navigation</h2>
           {/* Sidebar */}
           <ul>
             <li>
               <Link
                 className="underline text-blue-400 hover:text-blue-600 underline-offset-4 transition-colors duration-300"
                 href="/"
               >
                 Home
               </Link>
             </li>
             <li>
               <Link
                 className="underline text-blue-400 hover:text-blue-600 underline-offset-4 transition-colors duration-300"
                 href="/about"
               >
                 About
               </Link>
             </li>
             <li>
               <Link
                 className="underline text-blue-400 hover:text-blue-600 underline-offset-4 transition-colors duration-300"
                 href="/dashboard"
               >
                 Dashboard
               </Link>
             </li>
           </ul>
         </aside>

         {/* Right Side */}
         <main className="w-full h-full bg-white dark:bg-zinc-900/30 p-4">
           {/* Content */}
           {children}
         </main>
       </section>
     );
   };

   export default DashboardLayout;
   ```

1. Memodifikasi file `src/app/dashboard/page.tsx` menjadi seperti berikut:

   ```tsx
   // ??  Step 6 - Membuat Routing /dashboard (2)
   const DashboardPage = () => {
     return (
       <section>
         <h2 className="text-2xl font-semibold">Dashboard Page</h2>
       </section>
     );
   };

   export default DashboardPage;
   ```

1. Buka pada browser dan ketikkan `http://localhost:3000/dashboard`, selamat, kita sudah berhasil membuat sebuah routing baru dengan nama `/dashboard` !

### Step 7 - Membuat Component DashboardSidebar

Pada langkah ini kita akan memodifikasi kode pada layout Dashboard (`src/app/dashboard/layout.tsx`) untuk memisahkan kode `Sidebar` menjadi sebuah component tersendiri.

1. Membuat sebuah folder baru pada `src/` dengan nama `components` (`src/components`)
1. Membuat sebuah file baru pada folder tersebut dengan nama `DashboardSidebar.tsx` (`src/components/DashboardSidebar.tsx`) dan memodifikasinya menjadi sebagai berikut:

   ```tsx
   // ?? Step 7 - Membuat Component DashboardSidebar (1)
   import Link from "next/link";

   const DashboardSidebar = () => {
     return (
       <aside className="w-64 h-full bg-gray-100 dark:bg-zinc-800/30 p-4">
         <h2 className="text-2xl font-semibold mb-4">Navigation</h2>
         {/* Sidebar */}
         <ul>
           <li>
             <Link
               className="underline text-blue-400 hover:text-blue-600 underline-offset-4 transition-colors duration-300"
               href="/"
             >
               Home
             </Link>
           </li>
           <li>
             <Link
               className="underline text-blue-400 hover:text-blue-600 underline-offset-4 transition-colors duration-300"
               href="/about"
             >
               About
             </Link>
           </li>
           <li>
             <Link
               className="underline text-blue-400 hover:text-blue-600 underline-offset-4 transition-colors duration-300"
               href="/dashboard"
             >
               Dashboard
             </Link>
           </li>
         </ul>
       </aside>
     );
   };

   export default DashboardSidebar;
   ```

1. Memodifikasi file layout dashboard (`/src/app/dashboard/layout.tsx`) menjadi sebagai berikut:

   ```tsx
   // ?? Step 7 - Membuat Component DashboardSidebar (2)
   // Import Component DashboardSidebar
   // Delete component Link
   import DashboardSidebar from "@/components/DashboardSidebar";

   const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
     return (
       // Whole Screen
       <section className="w-full h-screen flex">
         {/* Left Side */}
         {/* Step 7 - Membuat Component DashboardSidebar (3) */}
         {/* Mengganti aside yang ada dengan component DashboardSidebar */}
         <DashboardSidebar />

         {/* Right Side */}
         <main className="w-full h-full bg-white dark:bg-zinc-900/30 p-4">
           {/* Content */}
           {children}
         </main>
       </section>
     );
   };

   export default DashboardLayout;
   ```

1. Buka pada browser dan ketikkan `http://localhost:3000/dashboard`, apabila berhasil, tampilan akan sama seperti sebelumnya, hanya saja kode yang digunakan sudah lebih rapih dan terstruktur.

### Step 8 - Membuat Routing /dashboard/jokes

Pada langkah ini kita akan membuat sebuah routing baru dengan nama `/dashboard/jokes` (`http://localhost:3000/dashboard/jokes`) yang akan menerima data dari backend yang sudah dimiliki dengan json-server (`http://localhost:3001/jokes`)

1. Membuat sebuah folder baru pada `src/app/dashboard` dengan nama `jokes` (`src/app/dashboard/jokes`)
1. Membuat sebuah file baru pada folder tersebut dengan nama `page.tsx` (`src/app/dashboard/jokes/page.tsx`) dan menambahkan kode sebagai berikut:

   ```tsx
   const DashboardJokePage = () => {
     return (
       <section>
         <h2 className="text-2xl font-semibold">Dashboard Page - Jokes</h2>
         {/* TODO: Akan menambahkan data di sini nanti */}
       </section>
     );
   };

   export default DashboardJokePage;
   ```

1. Memodifikasi file DashboardSidebar.tsx (`/src/components/DashboardSidebar.tsx`) menjadi sebagai berikut:

   ```tsx
   // ?? Step 7 - Membuat Component DashboardSidebar (1)
   import Link from "next/link";

   const DashboardSidebar = () => {
     return (
       <aside className="w-64 h-full bg-gray-100 dark:bg-zinc-800/30 p-4">
         <h2 className="text-2xl font-semibold mb-4">Navigation</h2>
         {/* Sidebar */}
         <ul>
           <li>
             <Link
               className="underline text-blue-400 hover:text-blue-600 underline-offset-4 transition-colors duration-300"
               href="/"
             >
               Home
             </Link>
           </li>
           <li>
             <Link
               className="underline text-blue-400 hover:text-blue-600 underline-offset-4 transition-colors duration-300"
               href="/about"
             >
               About
             </Link>
           </li>
           <li>
             <Link
               className="underline text-blue-400 hover:text-blue-600 underline-offset-4 transition-colors duration-300"
               href="/dashboard"
             >
               Dashboard
             </Link>
           </li>
           {/* Step 8 - Membuat Routing /dashboard/jokes (2) */}
           {/* Menambahkan link untuk menuju Dashboard Jokes */}
           <li className="ml-4">
             <Link
               className="underline text-blue-400 hover:text-blue-600 underline-offset-4 transition-colors duration-300"
               href="/dashboard/jokes"
             >
               Dashboard - Jokes
             </Link>
           </li>
         </ul>
       </aside>
     );
   };

   export default DashboardSidebar;
   ```

### Step 9 - Mempopulasikan data pada /dashboard/jokes

Pada langkah ini kita akan mencoba untuk mempopulasikan data dari API backend (`http://localhost:3001/jokes`) ke dalam halaman `/dashboard/jokes` (`http://localhost:3000/dashboard/jokes`).

Hasil dari populasi datanya akan masuk dalam bentuk sebuah table.

Dalam cara React yang konvensional, cara yang akan kita gunakan adalah:

- Menggunakan sebuah useEffect, dimana di dalamnya akan melakukan fetch data
- Menggunakan sebuah state, untuk menyimpan data yang sudah di-fetch
- Menggunakan state tersebut ke dalam sebuah table

Bagaimanakah caranya dengan NextJS `app router` ini?

- Dalam NextJS ini, Component yang digunakan **BOLEH DINYATAKAN** dalam bentuk sebuah **async component**
- Sehingga kita bisa membuat sebuah fungsi yang bersifat **async** untuk melakukan fetch data, kemudian tinggal **duduk manis** (`await`) di dalam Component yang akan digunakan

1. Install package yang dibutuhkan pada folder `server` (`sources/a-start/server`)
1. Menjalankan server yang ada pada folder `server` dengan perintah `npm run watch`
1. Memodifikasi file `src/app/dashboard/jokes/page.tsx`

   ```tsx
   // ?? Step 9 - Mempopulasikan data pada /dashboard/jokes (0)
   // Membuat definition type untuk data yang akan di-parse
   type Joke = {
     id: number;
     setup: string;
     delivery: string;
   };

   // ?? Step 9 - Mempopulasikan data pada /dashboard/jokes (1)
   // Membuat sebuah fungsi yang bersifat async untuk mengambil data dari API
   const fetchJokes = async () => {
     const response = await fetch("http://localhost:3001/jokes");
     const responseJson: Joke[] = await response.json();

     // Kembalian dari fungsi ini adalah data yang sudah di-parse
     return responseJson;
   };

   // ?? Step 8 - Membuat Routing /dashboard/jokes (1)
   // ?? Step 9 - Mempopulasikan data pada /dashboard/jokes (2)
   // Karena kita akan menunggu data dari fetchJokes
   // maka component di bawah ini HARUS bersifat async
   const DashboardJokePage = async () => {
     // ?? Step 9 - Mempopulasikan data pada /dashboard/jokes (3)
     // Gunakan fungsi fetchJokes untuk mengambil data
     // Karena component sudah bersifat async
     // maka di sini kita bisa meng-await fetchJokes
     const jokes = await fetchJokes();

     return (
       <section>
         <h2 className="text-2xl font-semibold">Dashboard Page - Jokes</h2>
         {/* ?? Step 9 - Mempopulasikan data pada /dashboard/jokes (4) */}
         {/* Gunakan jokes layaknya data yang biasa digunakan via "state" (READ-ONLY) */}
         <table className="mt-4">
           <thead>
             <tr>
               <th className="p-4">No</th>
               <th className="p-4">Setup</th>
               <th className="p-4">Delivery</th>
             </tr>
           </thead>
           <tbody>
             {jokes.map((todo, idx) => (
               <tr key={todo.id}>
                 <td>{idx + 1}</td>
                 <td>{todo.setup}</td>
                 <td>{todo.delivery}</td>
               </tr>
             ))}
           </tbody>
         </table>
       </section>
     );
   };

   export default DashboardJokePage;
   ```

1. Jalankan pada browser dan lihat hasilnya, voila ! Data sudah akan terpopulasi dengan baik !

Pertanyaannya adalah: Mengapa bisa terjadi demikian?

- Karena pada `app router`, sebenarnya component akan dibuat pada server (Server Side Rendering), sehingga pada client (browser), kita hanya perlu duduk manis menunggu hasil dari fetch data tersebut dan otomatis terpopulasi ke dalam table.
- Bisa kita lihat pada pembuktiannya pada inspect network yang ada pada browser, pada saat fetch data dari backend, TIDAK AKAN MUNCUL pada network, karena sudah di-fetch pada server.
- Client hanya bisa melihat hasil dari tampilan yang sudah jadi, ibaratnya "hanya mendapatkan HTML akhirnya saja" !
