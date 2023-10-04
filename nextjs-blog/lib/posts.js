// In Next.js, the lib folder does not have an assigned name like the pages folder, so you can name it anything. It's usually convention to use lib or utils.

import fs from 'fs'; // fs is a Node.js module that lets you read files from the file system.
import path from 'path'; // path is a Node.js module that lets you manipulate file paths.
import matter from 'gray-matter'; // matter is a library that lets you parse the metadata in each markdown file.
import { remark } from 'remark'; // convert markdown into HTML string
import html from 'remark-html';

const postsDirectory = path.join(process.cwd(), 'posts'); // process.cwd = / + 'posts'

export function getSortedPostsData() {
	// Get file names under /posts
	const fileNames = fs.readdirSync(postsDirectory);

	const allPostsData = fileNames.map((fileName) => {
		// Remove ".md" from file name to get id
		const id = fileName.replace(/\.md$/, '');

		// Read markdown file as string
		const fullPath = path.join(postsDirectory, fileName);
		const fileContents = fs.readFileSync(fullPath, 'utf8');

		/**
		 * You might have noticed that each markdown file has a metadata section at the top containing title and date.
		 * This is called YAML Front Matter, which can be parsed using a library called gray-matter.
		 * 
		 * npm install gray-matter
		 */

		// Use gray-matter to parse the post metadata section
		const matterResult = matter(fileContents);

		// Combine the data with the id
		return {
			id,
			...matterResult.data,
		};
	});

	// Sort posts by date
	return allPostsData.sort((a, b) => {
		if (a.date < b.date) {
			return 1;
		} else {
			return -1;
		}
	});
}

/** 
 * @description Return a list of file names, excluding .md 
 * 
 * @return array : objects
 * */
export function getAllPostIds() {
	const fileNames = fs.readdirSync(postsDirectory);

	// Returns an array that looks like this:
	// [
	//   {
	//     params: {
	//       id: 'ssg-ssr'
	//     }
	//   },
	//   {
	//     params: {
	//       id: 'pre-rendering'
	//     }
	//   }
	// ]
	return fileNames.map((fileName) => {
		return {
			params: {
				id: fileName.replace(/\.md$/, ''),
			},
		};
	});
}

/**
 * @description Returns the post data based on id
 * @param {*} id 
 * @returns 
 */
export async function getPostData(id) {
	const fullPath = path.join(postsDirectory, `${id}.md`);
	const fileContents = fs.readFileSync(fullPath, 'utf8');

	// Use gray-matter to parse the post metadata section
	const matterResult = matter(fileContents);

	// Use remark to convert markdown into HTML string
	const processedContent = await remark()
		.use(html)
		.process(matterResult.content);
	const contentHtml = processedContent.toString();

	// Combine the data with the id
	return {
		contentHtml,
		...matterResult.data,
	};
}