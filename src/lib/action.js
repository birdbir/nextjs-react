"use server"

import { revalidatePath } from "next/cache"
import { Post } from "./models"
import { connectToDb } from "./utils"
import { signIn, signOut } from "./auth"

export const addPost = async(formData) => {

    // const title = formData.get("title")
    // const desc = formData.get("desc")
    // const slug = formData.get("slug")
    // const userId = formData.get("userId")

    const {title, desc, slug, userId} = Object.fromEntries(formData)

    try{
        connectToDb()
        const newPost = new Post({
            title, 
            desc,
            slug,
            userId
        })
        await newPost.save()
        console.log("saved to DB")
        revalidatePath('/blog')
    }catch(err){
        console.log(err)
        return {error: "Something wrong"}
    }

}

export const deletePost = async(formData) => {

    const {id} = Object.fromEntries(formData)

    try{
        connectToDb()

        await Post.findByIdAndDelete(id)
        console.log("deleted from DB")
        revalidatePath('/blog')
    }catch(err){
        console.log(err)
        return {error: "Something wrong"}
    }

}

export const handleGithubLogin = async() => {
    "use server"

    await signIn("github")
  }

  export const handleLogout = async() => {
    "use server"

    await signOut()
  }