import styles from '../../styles/Home.module.css';
import Layout from '../../components/layout';

import Head from 'next/head';
import Link from 'next/link';
import Script from 'next/script';

export default function FirstPost() {
	return (
	<>
		<Layout>
			<Head>
				<title>First Post</title>		
				</Head>
				<Script
					src="/styles/src/js/app.min.js"
					strategy="lazyOnload"
					onLoad={() =>
						console.log(`script loaded correctly, window.FB has been populated`)
					}
				/>			
				
			
			<h1>First Post</h1>
			<h2 className='{styles.grid}'>
				<Link href="/">Back to Dashboard</Link>
			</h2>
		</Layout>
	</>
	);
}