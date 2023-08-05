import { Top } from "../../components/topo/top";
import styles from './recipes.module.css'
import { useEffect, useState } from "react";
import api from '../../services/api'
import { useNavigate } from "react-router-dom";
import { Footer } from "../../components/footer/footer";

export function Recipes() {
  const [foods, setFoods] = useState([])
  const navigation = useNavigate()


  function goToDetails(data) {
    navigation(`/details/${data.name}`)
  }

  useEffect(() => {
    async function fetchApi() {
      let response = await api.get('/foods')
      setFoods(response.data)

    }
    fetchApi()
  }, [])

  return (
    <div className={styles.container}>
      <Top text='Receitas free' />
      <div className={styles.list}>
        <div className={styles.itemsList}>
          {
            foods.map((item) =>
              <button
                key={item._id}
                className={styles.btncontainer}
                onClick={() => {
                  goToDetails(item)
                }}
              >
                <div className={styles.gradientCover}>
                  <img src={item.cover} alt={item.name} className={styles.cover} />
                  <div className={styles.gradient}></div>
                </div>
                <div className={styles.info}>
                  <h2 className={styles.name}>{item.name}</h2>
                  <h2 className={styles.description}>{item.total_ingredients} ingredientes | {item.time} min</h2>
                </div>
                {/* <div className={styles.gradient}></div> */}
              </button>
            )
          }
        </div>
        <Footer />
      </div>
    </div>

  )
}