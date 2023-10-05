export default function handler(req, res) {
	res.status(200).json(
		{ 
			text: 'Do Not Fetch an API Route from getStaticProps or getStaticPaths',
			formInput: 'For example, you can create a form on your page and have it send a POST request to your API Route. You can then write code to directly save it to your database. The API Route code will not be part of your client bundle, so you can safely write server-side code.'
		}
	);
}