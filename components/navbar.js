import Link from 'next/link'
import styles from '../app/page.module.css'

const Navbar = () => {
  return (
    <nav className={styles.mainnav}>
    <ul>
      <li><Link className={styles.link} href={"/"}>Home</Link></li>
      <li><Link className={styles.link} href={"/about"}>About</Link></li>
      <li><Link className={styles.link} href={"/blog"}>Blog</Link></li>
      <li><Link className={styles.link} href={"/contact"}>Contact</Link></li>
      <li><Link className={styles.link} href={"/studentslist"}>StudentsList</Link></li>
      <li><Link className={styles.link} href={"/lectures"}>Lectures</Link></li>
    </ul>
  </nav>
  )
}

export default Navbar