import Link from 'next/link'
import React from 'react'
import styles from '../page.module.css'

const Blog = () => {
  return (
    <>
      <nav className={styles.mainnav}>
        <ul>
          <li><Link className={styles.link} href={"/"}>Home</Link></li>
          <li><Link className={styles.link} href={"/about"}>About</Link></li>
          <li><Link className={styles.link} href={"/blog"}>Blog</Link></li>
          <li><Link className={styles.link} href={"/contact"}>Contact</Link></li>
        </ul>
      </nav>
      <div className={styles.main}>
        <div className={styles.head}>
          <h1>Bolg</h1>
        </div>
      </div>
    </>
  )
}

export default Blog