import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.head}>
        <h1>My Blog</h1>
      </div>
      <div className={styles.blogs}>
        <h3>
          How to learn javascript in 2023?
        </h3>
        <p>Javascript is a programming language.</p>
      </div>
    </main>
  )
}
