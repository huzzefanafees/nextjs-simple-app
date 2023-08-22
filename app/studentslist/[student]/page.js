import styles from '../../page.module.css'

const Student = ({params}) => {
  return (
    <div className={styles.student}>
    <h1>Student detail:</h1>
    <h3>Name: {params.student.charAt(0).toUpperCase() + params.student.slice(1)}</h3>
    </div>
  )
}

export default Student