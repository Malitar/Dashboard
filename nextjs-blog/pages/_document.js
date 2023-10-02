import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

import Custom from '../styles/src/js/app.min.js';

export default function Document() {
	return(
		<Html lang="en">
			<Head> 
				<script src="/styles/src/js/app.min.js" />
				
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>

		</Html>
	)
}