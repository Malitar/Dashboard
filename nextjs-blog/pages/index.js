import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import Date from '../components/date';
/**Import Custom functions */
import { getSortedPostsData } from '../lib/posts';

/** Custom hardcoded texts */
const introduction = 'Cookiebits'

/** Write import function which will return the 'want-to-use' data to Home later */
export async function getStaticProps() {
	const allPostsData = getSortedPostsData();
	console.log(allPostsData);

	return {
		props: {
			allPostsData,
		},
	};
}


/**By returning allPostsData inside the props object in getStaticProps, the blog posts will be passed to the Home component as a prop. */
export default function Home({ allPostsData }) {
	return (
		<Layout home>
			<Head>
				<title>{siteTitle}</title>
			</Head>
			<section className={utilStyles.headingMd}>

				<p>{introduction}</p>
				<p>
					(This is a sample website - you’ll be building a site like this on{' '}
					<a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
				</p>
				<a href="/posts/" className={utilStyles.card}>
					<h3>First Post &rarr;</h3>
					<p>My first Page called Blog</p>
				</a>

			</section>

			<section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
				<h2 className={utilStyles.headingLg}>Blog</h2>
				<ul className={utilStyles.list}>
					{/* Begin Render Data to page */}
					{allPostsData.map(({ id, date, title }) => (
						<li className={utilStyles.listItem} key={id}>
							<Link href={`/posts/${id}`}>{title}</Link>
							<br />
							<small className={utilStyles.lightText}>
								<Date dateString={date} />
							</small>
						</li>
					))}
				</ul>
			</section>
		</Layout>
	);
}