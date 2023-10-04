import styles from '../../styles/Home.module.css';
import Layout from '../../components/layout';

import Head from 'next/head';
import Link from 'next/link';


export default function FirstPost() {
	return (
	<>
		<Layout>
			<Head>
				<title>First Post</title>		
				</Head>
				<script src="/styles/src/js/app.min.js" strategy="lazyOnload"
					onLoad={() =>
						console.log(`script loaded correctly, window.FB has been populated`)
					}
				/>			
				
			<div className={styles.content}>
				<h1>First Post</h1>
				{/* <h2 className={styles.grid}>
					<Link href="/">Back to Dashboard</Link>
				</h2> */}
			</div>
		</Layout>
	</>
	);
}