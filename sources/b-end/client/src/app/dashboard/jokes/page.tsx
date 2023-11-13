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
