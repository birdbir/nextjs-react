import React from 'react'
import styles from './postCard.module.css'
import Image from 'next/image'
import Link from 'next/link'

const postCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imgContainer}>
          <Image src="https://images.pexels.com/photos/20195760/pexels-photo-20195760.jpeg" alt="" fill className={styles.img}/>
        </div>
        <span className={styles.date}>01.01.2024</span>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>Title</h1>
        <p className={styles.desc}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
        Vero blanditiis adipisci minima reiciendis a autem assumenda dolore.</p>
        <Link className={styles.link} href="/blog/post">READ MORE</Link>
      </div>
    </div>
  )
}

export default postCard