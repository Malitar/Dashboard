/** Programm Ablauf
 * 1. Die Komponente wird gerendert, und der return-Block wird ausgeführt.
 * Das bedeutet, dass die JSX-Elemente und der Inhalt des return-Blocks in den DOM eingefügt werden.
 * 
 * 2. Nachdem die Komponente gerendert wurde, wird die useEffect-Funktion aufgerufen,
 * da sie keine Abhängigkeiten hat oder leere Abhängigkeiten (eine leere Abhängigkeitsliste [ ]).
 * Das bedeutet, sie wird nach dem ersten Rendern und bei jeder Aktualisierung der Komponente aufgerufen.
 * 
 * 3. Innerhalb von useEffect wird fetchData aufgerufen. Beachte, dass fetchData asynchron ist,
 * daher wird der Code in useEffect nicht blockiert, während auf die API-Antwort gewartet wird.
 * 
 * 4. Wenn die API-Antwort zurückkommt (entweder erfolgreich oder mit einem Fehler),
 * wird die entsprechende .then- oder .catch-Funktion aufgerufen. Wenn die Antwort erfolgreich ist,
 * wird setUserData auf die erhaltenen Daten gesetzt, und das führt zu einer erneuten Ausführung der return-Anweisung.
 * 
 * Wenn setUserData aufgerufen wird und den Wert aktualisiert, wird die Komponente neu gerendert,
 * um die aktualisierten Daten anzuzeigen.
 * Dies ist der Punkt, an dem die return-Anweisung erneut ausgeführt wird und userData in der JSX verwendet werden kann.
 */

/** Das Wort "rendern"
 * unter "rendern" versteht man allgemein das Übersetzen von einem File (.html, .js, .cpp) in Maschinencode,
 * welcher dann von einer anderen Maschine wieder gelesen und entsprechend den Maschinenbefehlen ausgeführt werden kann. 
 * 
 * Beispielsweise wird der HTML-Code in einen für Browser lesbaren Maschinen-Befehlssatz übersetzt.
 * Der Browser kann dann den Maschinen-Befehlssatz ausführen und nach den angegebenen Befehlen dem Menschen 
 * ein Visuelles Bild für den geschriebenen Code darstellen
 */

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
	/**
	 * Dieser Hook wird verwendet, um sicherzustellen, dass die fetchData-Funktion aufgerufen wird, sobald die Komponente geladen ist.
	 * Wir übergeben [] als zweites Argument, um sicherzustellen, dass der Effekt nur einmal nach dem ersten Rendern der Komponente ausgeführt wird
	 */
	useEffect(() => { // (II) Call useEffect() after first rendering
		// Die fetchData-Funktion aufrufen, wenn die Komponente montiert wird
		fetchData()
			/**die .then-Methode wird aufgerufen, wenn die Promise von fetchData() erfolgreich aufgelöst wird.
			 * In diesem Fall wird data an die .then-Methode übergeben, und setUserData(data) wird verwendet,
			 * um den Zustand userData mit den abgerufenen Daten zu aktualisieren. */
			.then((data) => {
				// Setzen Sie den userData-Zustand mit den abgerufenen Daten
				setUserData(data);
			})
			/** Wenn ein Fehler auftritt, wird die .catch-Methode aufgerufen, und der error (Fehler) wird an die .catch-Methode übergeben.
			 * In diesem Fall verwenden wir console.error(error), um den Fehler in der Konsole anzuzeigen
			 * und können zusätzliche Fehlerbehandlungslogik hinzufügen, wenn dies erforderlich ist. 
			 * Das catch-Block ermöglicht es uns, auf Fehler während des Fetch-Vorgangs zu reagieren und geeignete
			 * Maßnahmen zu ergreifen, wie z. B. Fehlermeldungen anzuzeigen oder alternative Daten anzuzeigen, wenn der Abruf fehlschlägt. */
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
					{/*
						Funktion to display full JSON
						<pre>{JSON.stringify(userData, null, 2)}</pre> 
					*/}
					{/*
						Funktion to display a Single Element
						<p>{userData.first_name}</p>
					*/}
					{/* 
						Funktion to iterate over an Dataset-Array
						<ul>
							{userData.map((userData, index) => (
								<li key={index}>{userData.first_name}</li>
							))}
						</ul> 
					*/}

					{userData ? (
						<ul>
							{userData.map((user, index) => (
								<li key={index}>{user.first_name}</li>
							))}
						</ul>
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