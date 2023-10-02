// document.addEventListener("DOMContentLoaded", () => {
// 	console.log('hello world');
// 	let switchColorScheme = document.getElementById('__next');
	
// 	console.log(switchColorScheme);
	
// 	function setPreferedScheme() {
// 		// get prefered-color-scheme if browser supports
// 		let getMediaObj = window.matchMedia('(prefers-color-scheme: dark)');

// 		// mathMedia contains matches and media, so you can check what's inside .matches
// 		let isDarkMode = getMediaObj.matches;


// 		// basically change
// 		if(isDarkMode) {
// 			document.body.classList.add('dark');
// 		} else {
// 			document.body.classList.remove('dark');
// 		}
// 	}

// 	function changeColorScheme() {
// 		let isDark = document.querySelector('body');
// 		document.body.classList.toggle('dark');
// 	}
// 	setPreferedScheme();

// 	/**
// 	 * Wenn die changeColorScheme-Funktion zweimal aufgerufen wird, kann dies darauf hinweisen,
// 	 * dass das Klickereignis (Event) sowohl auf das
// 	 * click-Ereignis als auch auf das change-Ereignis reagiert.
// 	 * Dies kann geschehen, wenn das <label>-Element sowohl das Klicken als auch das Ändern des Status des <input>-Elements behandelt.
// 	 */
// 	switchColorScheme.addEventListener('click', changeColorScheme);
// });
import Script from 'next/script';

export default function Page() {
	return(
		<>
			console.log("Hello World");
			
		</>
	)
}
