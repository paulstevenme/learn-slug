import axios from 'axios';
import React from 'react';

// const Post = ({ post }) => {
//   return (
//     <div>
//       <h1>{post.title}</h1>
//       <p>{post.body}</p>
//     </div>
//   );
// };

// export default Post;

// export async function getStaticPaths() {
//   const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
//   const posts = res.data;

//   const paths = posts.map(post => ({
//     params: { slug: post.id.toString() },
//   }));

//   return { paths, fallback: true };
// }

// export async function getStaticProps({ params }) {
//   const res = await axios.get(
//     `https://jsonplaceholder.typicode.com/posts/${params.slug}`
//   );
//   const post = res.data;

//   return {
//     props: {
//       post,
//     },
//   };
// }

const fetchPostBySlug = async slug => {
  const res = await axios.get(
    `https://jsonplaceholder.typicode.com/posts/${slug}`
  );
  return res.data;
};

const PostPage = async ({ params }) => {
  const post = await fetchPostBySlug(params.slug);

  if (!post) {
    return <div>Post not found</div>;
  }
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
};

export default PostPage;
