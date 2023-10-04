// JS-Functionality
import { getAllPostIds, getPostData } from '../../lib/posts';

// import Layouts to render site
import Layout from '../../components/layout';

// Adds styling
import styles from '../../styles/Home.module.css';

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
			{postData.title}
			<br />
			{postData.id}
			<br />
			{postData.date}
			<br />
			<div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
		</Layout>
	);
}