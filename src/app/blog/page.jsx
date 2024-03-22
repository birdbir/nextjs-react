import React from 'react'
import styles from './blog.module.css'
import PostCard from '@/conponets/postCard/postCard'
import { getPosts } from '@/lib/data'

// Fetch data with an api
const getData = async() => {
  const res = await fetch("http://localhost:3000/api/blog")

  if(!res.ok){
    throw new Error("Something went wrong")
  }

  return res.json()
}

const BlogPage = async() => {

  const posts = await getData()

  // Fetch data without an api
  // const posts = await getPosts()

  return (
    <div className={styles.container}>
      {posts.map((post)=>(
        <div className={styles.post} key={post.id}>
          <PostCard post={post}/>
        </div>
      ))}

    </div>
  )
}

export default BlogPage