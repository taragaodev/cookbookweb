import styles from '../foodlist/foodlist.module.css'

export function FoodList(data){
  return(
    <button className={styles.container} key={data._id}>
      <img src={data.cover} className={styles.cover}/>
      <div className={styles.info}>
        <h3 className={styles.name}>{data.title}</h3>
        <h3 className={styles.description}>{data.total_ingredients} ingredientes | {data.time} min</h3>
      </div>
    </button>
  )
}