import axios from 'axios';
import Link from 'next/link';
import React from 'react';

// const Posts = ({ posts }) => {
//   return (
//     <div>
//       <h1>Blogs</h1>
//       <ul>
//         {posts.map(post => (
//           <li key={post.id}>
//             <Link href={`/posts/${post.id}`}>{post.title}</Link>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Posts;

// export async function getStaticProps() {
//   const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
//   const posts = res.data;
//   return {
//     props: {
//       posts,
//     },
//   };
// }

const fetchPosts = async () => {
  const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
  return res.data;
};

const Posts = async () => {
  const posts = await fetchPosts();
  return (
    <div>
      <h1>Blogs</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <Link href={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Posts;
