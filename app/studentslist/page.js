import Link from "next/link"
import styles from '../page.module.css'

const Studentslist = () => {
  return (
    <ul className={styles.studentslist}>
      <li>
        <Link href={'/studentslist/huzzefa'}>Huzzefa</Link>
      </li>
      <li>
        <Link href={'/studentslist/mubashir'}>Mubashir</Link>
      </li>
      <li>
        <Link href={'/studentslist/osama'}>Osama</Link>
      </li>
      <li>
        <Link href={'/studentslist/shehzad'}>Shehzad</Link>
      </li>
    </ul>
  )
}

export default Studentslist