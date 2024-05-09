import React from 'react'
import PostCard from "@/components/postCard/postCard"
import styles from './blog.module.css'
// import { getPosts } from "@/lib/data";


// FETCH DATA WITH AN API
const getData = async () => {
  const res = await fetch("https://data.mongodb-api.com/app/data-bdkssdn/endpoint/data/v1/api/blog");

  if (!res.ok) {
    throw new Error("Something went wrong")
  }

  return res.json();
};

const BlogPage = async () => {

  // FETCH DATA WITH AN API
  const posts = await getData();

  // FETCH DATA WITHOUT AN API
  // const posts = await getPosts();

  return (
    <div className={styles.container}>
      {posts.map((post) => (
        <div className={styles.post} key={post.slug}>
          <PostCard post={post} />
        </div>
      ))}
    </div>
  );
};

export default BlogPage