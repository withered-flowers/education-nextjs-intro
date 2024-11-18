// ?? Step 13 - Membuat Dynamic Router `/dashboard/jokes/[id]` (1)
// Membuat Type dari Joke yang akan diambil dari API
type Joke = {
	id: string;
	setup: string;
	delivery: string;
};

// ?? Step 13 - Membuat Dynamic Router `/dashboard/jokes/[id]` (2)
// Membuat sebuah fungsi yang bersifat async untuk mengambil data dari API
const fetchJokeById = async (id: string) => {
	const response = await fetch(`http://localhost:3001/jokes/${id}`);
	const data: Joke = await response.json();

	if (!response.ok) {
		throw new Error(`FAILED_FETCH_JOKE_${id}`);
	}

	return data;
};

// ?? Step 13 - Membuat Dynamic Router `/dashboard/jokes/[id]` (3)
// Di sinilah kita akan menggunakan params yang kita dapatkan dari dynamic router

// Perhatikan di sini kita menerima sebuah params yang berisi suatu object
// dengan key `id` yang mana `id` ini kita dapatkan dari dynamic router

// Perhatikan juga karena ini merupakan component yang akan menunggu data
// fungsi fetchJokeById, maka harus dinyatakan sebagai "async" component.
const DashboardJokesByIdPage = async ({
	params,
}: {
	params: { id: string };
}) => {
	// ?? Step 13 - Membuat Dynamic Router `/dashboard/jokes/[id]` (4)
	// Memanggil fungsi fetchJokeById dengan id yang kita dapatkan dari params
	const joke = await fetchJokeById(params.id);

	return (
		<section>
			<h2 className="text-2xl font-semibold">
				Dashboard Page - Joke ({params.id})
			</h2>
			{/* ?? Step 13 - Membuat Dynamic Router `/dashboard/jokes/[id]` (5) */}
			{/* Menampilkan hasil dalam bentuk pre */}
			<pre>{JSON.stringify(joke, null, 2)}</pre>
		</section>
	);
};

export default DashboardJokesByIdPage;
