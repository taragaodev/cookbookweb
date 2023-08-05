import { BiSearch } from 'react-icons/bi'
import { IoAddCircleSharp } from 'react-icons/io5'
import { MdFavorite } from 'react-icons/md'
import styles from './top.module.css'

// NAVEGAÇÃO
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'


export function Top(text) {  
  const navigation = useNavigate()
  const { register, handleSubmit, formState: { errors, isSubmitSuccessful }, reset } = useForm()

  function searchRecipe(data){
    if(!data.name) return
    let input = data.name
    navigation(`/search/${input}`)
  }

  useEffect(() => {
    if(isSubmitSuccessful){
      reset({name: ''})
    }
  },[isSubmitSuccessful, reset])

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <h2 className={styles.topText}>{text.text}</h2>
      </div>
      <h1 className={styles.title}>Encontre a receita</h1>
      <h1 className={styles.title}>que combina com você</h1>
      <div className={styles.form}>
        <input
          type="text"
          placeholder={errors?.name ? "Campo obrigatório" : "Encontre, as suas receitas favoritas"}
          {...register('name', { required: true })}
        />

        <button onClick={() => 
          handleSubmit(searchRecipe)()                
        }>
          <BiSearch size={28} color="#000" />
        </button>
        <button onClick={() => {
          navigation("/addRecipe")
        }}>
          <IoAddCircleSharp size={28} color="#4cb36c" />
        </button>
        <button>
          <MdFavorite size={28} color='red' />
        </button>
      </div>
    </div>
  )
}
