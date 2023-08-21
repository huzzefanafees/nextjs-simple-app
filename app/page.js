import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'

export default function Home() {
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
      <main className={styles.main}>
        <div className={styles.head}>
          <h1>My Blog</h1>
        </div>
        <div className={styles.blogs}>
          <h3>
            How to learn javascript in 2023?
          </h3>
          <p>Javascript is the language used to design web pages.</p>
        </div>
      </main>
    </>
  )
}
