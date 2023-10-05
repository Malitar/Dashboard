// JS-Functionality
import { getAllPostIds, getPostData } from '../../lib/posts';
import Head from 'next/head';

// import Layouts to render site
import Layout from '../../components/layout';
import Date from '../../components/date';

// Adds styling
import utilStyles from '../../styles/utils.module.css';

/**
 * @description uses getPostData to get the post data, returns this as props
 * @param {*} params 
 * @returns props
 */
export async function getStaticProps({ params }) {

	// How does params.id from getStaticProps({ params }) know the key is named id?
	// The value from the file name.
	const postData = await getPostData(params.id);
	return {
		props: {
			postData,
		},
	};
}


/**
 * @description Get a list of possible values for id and return this list
 * 
 * @param
 * @returns 
 */
export async function getStaticPaths() {
	const paths = getAllPostIds(); // contains the array of known paths returned by
	return {
		paths,
		fallback: false,
	};
}

export default function Post({ postData }) {
	return (
		<Layout>
			<Head>
				<title>{postData.title}</title>
			</Head>
			<article>
				<h1 className={utilStyles.headingXl}>
					{postData.title}
				</h1>
				<br />
				<div className={utilStyles.lightText}>
					<Date dateString={postData.date} />
				</div>
				<br />
				<div className={utilStyles.boxLight} dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
			</article>
		</Layout>
	);
}