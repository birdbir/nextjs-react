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
      {post.img && <div className={styles.imgContainer}>
        <Image className={styles.img} src={post.img} alt="" fill/>
      </div>}
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{post.title}</h1>
        <div className={styles.detail}>
          {post && (<Suspense fallback={<div>Loading...</div>}> 
          <PostUser userId = {post.userId}/>
          </Suspense>)}
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>{post.createdAt.toString().slice(4, 16)}</span>
          </div>
        </div>
        <div className={styles.content}>{post.desc}</div>
      </div>
    </div>
  )
}

export default SinglePostPage