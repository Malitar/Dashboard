export async function getData() {
	// Get file names under /posts
	const res = await fetch('de.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&explaintext&redirects=1&titles=Cryptochrome');

	return res.json();
	

}

export default async function Page() {
	return await getData();


}