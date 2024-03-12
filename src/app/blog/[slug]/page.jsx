import React from 'react'
import styles from './singlePost.module.css'
import Image from 'next/image'

const SinglePostPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image className={styles.img} src="https://images.pexels.com/photos/20195760/pexels-photo-20195760.jpeg" alt="" fill/>
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Title</h1>
        <div className={styles.detail}>
          <Image className={styles.avatar} src="" alt="" width={50} height={50}/>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Author</span>
            <span className={styles.detailValue}>shekidochan</span>
          </div>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>01.01.2024</span>
          </div>
        </div>
        <div className={styles.content}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
        Vero blanditiis adipisci minima reiciendis a autem assumenda dolore.
        </div>
      </div>
    </div>
  )
}

export default SinglePostPage