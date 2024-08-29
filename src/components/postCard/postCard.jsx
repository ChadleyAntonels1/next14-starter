import React from 'react'
import Image from "next/image"
import styles from "./postCard.module.css"
import Link from "next/link"

const PostCard = ({post}) => {
  return ( 
    <div className={styles.container}>
      <div className={styles.top}>
        {post.url && <div className={styles.imgContainer}>
          <Image src={post.url} alt="" fill className={styles.img}/>
        </div>}
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>{post.title}</h1>
        <p className={styles.date}>{post.createdAt?.toString().slice(5, 10)}</p>
        <Link className={styles.link} href={`/blog/${post.slug}`}>READ MORE</Link>
      </div>
    </div>
  )
}

export default PostCard