import React from 'react'
import Image from 'next/image'
import styles from './postCard.module.css'
import Link from 'next/link'

const postCard = () => {
  return (
    <div className={styles.container}>
        <div className={styles.top}>
            <div className={styles.imgContainer}>
              <Image src= '/post.png' alt='' fill className={styles.img}/>
            </div>
            <span className={styles.date}>01.01.2024</span>
        </div>
        <div className={styles.bottom}>
            <h1 className={styles.title}>Title</h1>
            <p className={styles.desc }>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error, labore, voluptates suscipit adipisci eos praesentium doloremque cupiditate, ea aperiam voluptatibus exercitationem? Accusamus facilis ullam est, qui blanditiis accusantium molestiae animi!</p>
            <Link href='/blog/post'> READ More</Link>
        </div>
    </div>
  )
}

export default postCard