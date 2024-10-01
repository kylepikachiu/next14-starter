import React from 'react'
import Image from 'next/image'
import styles from './singlePost.module.css'

const SinglePostPage = () => {
  return (
    <div className={styles.container}>
    <div className={styles.imgContainer}>
      <Image
        src="https://images.pexels.com/photos/26836559/pexels-photo-26836559/free-photo-of-foamy-wave-crashing-onto-shore.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt=""
        fill
        className={styles.img}
      />
    </div>
    <div className={styles.textContainer}>
      <h1 className={styles.title}>Title</h1>
      <div className={styles.detail}>
        <Image
          className={styles.avatar}
          src="https://images.pexels.com/photos/26836559/pexels-photo-26836559/free-photo-of-foamy-wave-crashing-onto-shore.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          // ! why did he suddenly do styling in the jsx
          height={50}
          width={50}
        />
        <div className={styles.detailText}>
          <span className={styles.detailTitle}>Author</span>
          <span className={styles.detailValue}>Kyle Chiu</span>
        </div>
        <div className={styles.detailText}>
          <span className={styles.detailTitle}>Published</span>
          <span className={styles.detailValue}>01.01.2024</span>
        </div>
      </div>
      <div className={styles.content}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
      </div>
    </div>
  </div>
  )
}

export default SinglePostPage
