import React, { Suspense } from 'react'
import styles from './singlePost.module.css'
import Image from 'next/image'
import PostUser from '@/conponets/postUser/postUser'
import { getPost } from '@/lib/data'

// Fetch data with an api
// const getData = async(slug) => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`)

//   if(!res.ok){
//     throw new Error("Something went wrong")
//   }

//   return res.json()
// }

const SinglePostPage = async({params}) => {
  const {slug} = params

  // const post = await getData(slug)

  // Fetch data without an api
  const post = await getPost(slug)
  console.log(post)
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image className={styles.img} src="https://images.pexels.com/photos/20195760/pexels-photo-20195760.jpeg" alt="" fill/>
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{post?.title}</h1>
        <div className={styles.detail}>
          <Image className={styles.avatar} src="" alt="" width={50} height={50}/>
          {post && (<Suspense fallback={<div>Loading...</div>}> 
          <PostUser userId = {post.userId}/>
          </Suspense>)}
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>01.01.2024</span>
          </div>
        </div>
        <div className={styles.content}>{post?.body}</div>
      </div>
    </div>
  )
}

export default SinglePostPage