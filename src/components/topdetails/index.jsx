import styles from '../topdetails/top.module.css'

export function TopDetails(text) {
  return (
    <div className={styles.containert}>
      <div className={styles.container}>
        <div className={styles.top}>
          <h2 className={styles.topText}>{text.text}</h2>          
        </div>
      </div>
    </div>
  )
}