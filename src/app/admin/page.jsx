import AdminPostForm from '@/conponets/adminPostForm/adminPostForm'
import AdminPosts from '@/conponets/adminPosts/adminPosts'
import AdminUserForm from '@/conponets/adminUserForm/adminUserForm'
import AdminUsers from '@/conponets/adminUsers/adminUsers'
import React, { Suspense } from 'react'
import styles from './admin.module.css'

const AdminPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <div className={styles.col}>
          <Suspense fallback={<div>Loading...</div>}>
            <AdminPosts />
          </Suspense>
        </div>
        <div className={styles.col}>
          <AdminPostForm />
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.col}>
          <Suspense fallback={<div>Loading...</div>}>
            <AdminUsers />
          </Suspense>
        </div>
        <div className={styles.col}>
          <AdminUserForm />
        </div>
      </div>
    </div>
  )
}

export default AdminPage