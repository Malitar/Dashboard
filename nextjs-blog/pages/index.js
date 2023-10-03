import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
// Zuerst importieren wir useEffect und useState aus React. Diese Hooks werden verwendet,
// um den Effekt des API-Abrufs und das Verwalten des Zustands in der Komponente zu steuern.
import { useEffect, useState } from 'react'; 

/** Custom hardcoded texts */
const introduction = 'Cookiebits'

// Definiere eine Funktion, um die Daten abzurufen
// Eine eigenständige Funktion zum Abrufen der Daten von der API
async function fetchData() {
	try {
		const response = await fetch(
			'https://random-data-api.com/api/v2/users?size=2&response_type=json'
		);

		if (!response.ok) {
			throw new Error('Fehler beim Abrufen der Daten von der API');
		}

		const data = await response.json();
		return data;
	} catch (error) {
		console.error(error);
		throw error;
	}
}

export default function Home() {
	/**
	 * Mit const [userData, setUserData] = useState(null); erstellen wir eine Zustandsvariable userData, 
	 * die am Anfang auf null gesetzt ist. Diese Variable wird verwendet, 
	 * um die von der API abgerufenen Daten zu speichern.
	 */
	const [userData, setUserData] = useState(null); 
  useEffect(() => { // (II) Call useEffect() after first rendering
    // Die fetchData-Funktion aufrufen, wenn die Komponente montiert wird
    fetchData()
      .then((data) => {
        // Setzen Sie den userData-Zustand mit den abgerufenen Daten
        setUserData(data);
      })
      .catch((error) => {
        // Behandeln Sie Fehler hier, z.B. Anzeige einer Fehlermeldung
        console.error(error);
      });
  }, []);


	return (
		<Layout home>
			<Head>
				<title>{siteTitle}</title>
			</Head>
			<section className={utilStyles.headingMd}>
				<div>
					{userData ? (
						<pre>{JSON.stringify(userData, null, 2)}</pre>
					) : (
						<p>Daten werden geladen...</p>
					)}
				</div>
				<p>{introduction}</p>
				<p>
					(This is a sample website - you’ll be building a site like this on{' '}
					<a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
				</p>
				<a href="/posts/first-post" className={utilStyles.card}>
					<h3>First Post &rarr;</h3>
					<p>My first Page called Blog</p>
				</a>

			</section>

			<section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
				<h2 className={utilStyles.headingLg}>Blog</h2>
				<ul className={utilStyles.list}>


				</ul>
			</section>
		</Layout>
	);
}