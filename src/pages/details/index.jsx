import styles from '../details/details.module.css'
import api from '../../services/api'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

// ICONS
// import { IoReturnDownBack } from 'react-icons/io5'
import { TopDetails } from '../../components/topdetails'
import { IoReturnDownBack } from 'react-icons/io5'

export function Details() {
  const [foods, setFoods] = useState([])
  const { name } = useParams()
  const navigation = useNavigate()


  function backHome() {
    navigation('/')
  }

  useEffect(() => {
    async function fecthApi() {
      let response = await api.get(`/food?name=${name}`)
      setFoods(response.data)

    }
    fecthApi()
  }, [name])

  return (
    <div className={styles.container}>
      {
        foods.map((item) =>
          <div key={item._id} className={styles.content}>
            <TopDetails text={item.name} action={backHome} />
            <button className={styles.return} onClick={backHome}>
              <IoReturnDownBack size={34} color='#fff' />
            </button>
            {/* <div className={styles.topo}>
              <div className={styles.title}>
                <h1>{item.name}</h1>
                <button className={styles.return} onClick={backHome}>
                  <IoReturnDownBack size={34} color='#fff'/>
                </button>
              </div>
            </div> */}
            <div className={styles.cover}>
              <img src={item.cover} alt="item.name" />
            </div>
            <div className={styles.recipe}>
              <h1>Ingredientes</h1>
              {
                item.ingredients.map((res, index) =>
                  <ul key={res._id}>
                    <li>{index + 1} - {res.name}</li>
                  </ul>
                )
              }
              <h1>Modo de preaparo</h1>
              {
                item.instructions.map((res, index) =>
                  <ul key={res._id}>
                    <li>{index + 1} - {res.text}</li>
                  </ul>
                )
              }
            </div>
          </div>
        )
      }

      {/* {
        foods.map((item) =>
          <div key={item._id} className={styles.listContainer}>
            <div className={styles.listcontent}>
              <img src={item.cover} alt={item.name} className={styles.cover} />
            </div>
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
      } */}
    </div>
  )
}


