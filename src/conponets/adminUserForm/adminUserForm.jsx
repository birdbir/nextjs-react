"use client"
import React from 'react'
import styles from './adminUserForm.module.css'
import { addUser } from '@/lib/action'
import { useFormState } from "react-dom"

const AdminUserForm = () => {

  const [state, formAction] = useFormState(addUser, undefined)
  return (
    <form action={formAction} className={styles.container}>
      <h1>Add New User</h1>
      <input type="text" placeholder='username' name='username' />
      <input type="text" placeholder='email' name='email' />
      <input type="password" placeholder='password' name='password' />
      <input type="text" placeholder='img' name='img' />
      <select name="isAdmin">
        <option value="false">Is Admin?</option>
        <option value="false">No</option>
        <option value="ture">Yes</option>
      </select>
      <button>Add</button>
      {state && state.error}
    </form>
  )
}

export default AdminUserForm