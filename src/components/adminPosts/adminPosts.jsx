import { getPosts } from "@/lib/data";
import styles from "./adminPosts.module.css";
import Image from "next/image";
import { deletePost } from "@/lib/action";
import Link from "next/link";

const AdminPosts = async () => {
  const posts = await getPosts();

  return ( 
    <div className={styles.container}>
      <h1>Posts</h1>
      {posts.map((post) => (
        <div className={styles.post} key={post.slug}>
          <div className={styles.detail}>
            <Image
              src="/noavatar.png"
              alt=""
              width={50}
              height={50}
            />
            <Link className={styles.link} href={`/blog/${post.slug}`}>
              <span className={styles.postTitle}>{post.title.toString().slice(0, 10)+'...'}</span>
            </Link>
          </div>
          <form action={deletePost}>
            <input type="hidden" name="id" value={post.id} />
            <button className={styles.postButton}>Delete</button>
          </form>
        </div>
      ))}
    </div>
  );
};

export default AdminPosts;
