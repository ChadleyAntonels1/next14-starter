import React from 'react'
import PostCard from "@/components/postCard/postCard"
import styles from './blog.module.css'
import { revalidatePath } from 'next/cache';
// import { getPosts } from "@/lib/data";


// FETCH DATA WITH AN API
const getData = async () => {
  const res = await fetch("https://next14-starter-two.vercel.app/api/blog", { next: { revalidate: 3 } });

  if (!res.ok) {
    throw new Error("Something went wrong at blog pag")
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