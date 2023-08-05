import { useEffect, useState } from 'react'
import styles from '../search/search.module.css'
import api from '../../services/api'

// import cook from '../../assets/cook.jpeg'

import { useNavigate, useParams } from 'react-router-dom'
import { Footer } from '../../components/footer/footer'
import { IoReturnDownBack } from 'react-icons/io5'
import { TopDetails } from '../../components/topdetails'

export function Search() {
  const [foods, setFoods] = useState([])
  const { name } = useParams()
  const navigation = useNavigate()


  function backHome() {
    navigation('/')
  }

  useEffect(() => {
    async function fetchApi() {
      let response = await api.get(`/food?name=${name}`)
      setFoods(response.data)
    }
    fetchApi()
  }, [name])

  return (
    <div className={styles.list}>
      <TopDetails text="veja o que encontramos" />
      <button className={styles.return} onClick={backHome}>
        <IoReturnDownBack size={34} color='#fff' />
      </button>
      {/* <div className={styles.listTop}>
        <h1 className={styles.textTopList}>Veja o que encontramos</h1>
        <button className={styles.return} onClick={backHome}>
          <IoReturnDownBack size={34} color='#fff' />
        </button>
      </div> */}
      <div className={styles.view}>
        {
          foods.map((item) =>
            <div key={item._id} className={styles.listContainer}>
              <img src={item.cover} alt={item.name} className={styles.cover} />
              <div className={styles.itemDescription}>
                <h2>{item.name}</h2>
                <h1>Ingredientes:</h1>
                {
                  item.ingredients.map((item, index) => {
                    return (
                      <ul key={item._id}>
                        <li>
                          {index + 1} - {item.name}
                        </li>
                      </ul>
                    )

                  })
                }
                <h1>Modo de preparo:</h1>
                {
                  item.instructions.map((item, index) =>
                    <ul key={item._id} >
                      <li>
                        {index + 1} - {item.text}
                      </li>
                    </ul>
                  )
                }
              </div>
            </div>
          )
        }
        < div className={styles.footer}>
          <Footer />
        </div>
      </div>
    </div >
  )
}