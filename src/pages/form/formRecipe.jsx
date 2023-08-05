import styles from './formrecipe.module.css'
import image from '../../assets/livro.png'

// HOOKS
import { useForm } from 'react-hook-form'
import { GrAdd } from 'react-icons/gr'
import { useEffect, useState } from 'react'

export function FormRecipe() {
  const [lista, setLista] = useState([])   
  let newLista = []
  let newLista_2 = []
  const { register, handleSubmit, formState: { errors, isSubmitSuccessful }, reset } = useForm()

  function addFullIngredients(data){
    let newItem = data
    let newItems = [...lista, newItem]
    setLista(newItems) 
  }
    
  
  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({ingredient: '', amount: ''})
    }
  }, [isSubmitSuccessful, reset])

 
  function removeItem(index, item) {
    if (index > -1) {
      newLista = lista.slice(index, 1)
      setLista(newLista)
      console.log(lista)
    }
    newLista_2 = lista.filter(obj => obj !== item)
    setLista(newLista_2)
  }


  const listItems = lista.map((item, index) => (
    <button
      className={styles.btnListItem}
      onClick={() => removeItem(index, item)}
      key={index}
    >
      <div className={styles.listIngredients}>
        <ul>
          <li>
            <h3>
              {index + 1} - {item.ingredient}
            </h3>
            <h3>
              {item.amount}
            </h3>
          </li>
        </ul>
      </div>
    </button>
  ))

  

  // function onSubmit(data) {
  //   console.log(data)
  // }

  return (
    <div className={styles.container}>

      {/* INFO DA RECEITA */}
      <h2>Título</h2>
      <div className={styles.formGroup}>
        <div className={styles.image}>
          <img src={image} alt="livro-receitas" />
        </div>
        <label>Título da receita</label>
        <input
          type='text'
          placeholder={errors?.name ? 'Campo obrigatório' : 'Digite o nome da receita'}
          // {...register('name', { required: true })}
          className={errors?.name && styles.inputError}
        />
        <label>Ingredientes</label>
        <input
          type='text'
          placeholder={errors?.count ? 'Campo obrigatório' : 'Quantos ingredientes?'}
          // {...register('count', { required: true })}
          className={errors?.count && styles.inputError}
        />
        <label>Tempo de preparo em minutos</label>
        <input
          type='text'
          placeholder={errors?.time ? 'Campo obrigatório' : 'Qual o tempo de preparo?'}
          // {...register('time', { required: true })}
          className={errors?.time && styles.inputError}
        />
        <label>Quantas porções</label>
        <input
          type='text'
          placeholder={errors?.portions ? 'Campo obrigatório' : 'Quantas porções rende?'}
          // {...register('portions', { required: true })}
          className={errors?.portions && styles.inputError}
        />
        <label htmlFor="">Selecione uma imagem</label>
        <label htmlFor='cover' className={styles.labelCover}>selecione...</label>
        <input
          id='cover'
          type='file'
          accept='image/jpeg, image/png'
        // {...register('cover')}
        />
        <label>Video</label>
        <input
          type='text'
          placeholder={errors?.video ? 'Campo obrigatório' : 'link do video no youtube.'}
          // {...register('video', { required: true })}
          className={errors?.video && styles.inputError}
        />
      </div>

      {/* INGREDIENTES */}
      <h2>Ingredientes</h2>
      <div className={styles.formGroup}>
        <label>Nome</label>
        <input
          type='text'
          placeholder={errors?.ingredient ? 'Campo obrigatório' : 'Informe um igrediente'}          
          {...register('ingredient', { required: true })}
          className={errors?.ingredient && styles.inputError}
        />
        <label>Quantidade</label>
        <input
          type='text'
          placeholder={errors?.amount ? 'Campo obrigatório' : 'Qual a quantidade?'}
          {...register('amount', { required: true })}          
          className={errors?.amount && styles.inputError}
        />
        <div className={styles.areaBtnAdd}>
          <button
            className={styles.btnAdd}
            onClick={() => handleSubmit(addFullIngredients)()}
          ><GrAdd /></button>
        </div>
      </div>

      {/* LISTA DE INGReDIENTES */}
      <h2 style={{ textAlign: 'center' }}>Lista de ingredientes</h2>
      {listItems}      

      {/* MODO DE PREPARO */}
      <h2>Instruções</h2>
      <div className={styles.formGroup}>
        <label>Passos</label>
        <input
          type='text'
          placeholder={errors?.steps ? 'Campo obrigatório' : 'Informe um passo'}
          // {...register('steps', { required: true })}
          className={errors?.steps && styles.inputError}
        />
        <div className={styles.areaBtnAdd}>
          <button
            className={styles.btnAdd}
          // onClick={}
          ><GrAdd /></button>
        </div>
      </div>
      <div className={styles.btnForm}>
        <button onClick={() => handleSubmit(addFullIngredients)}>Adicionar receita</button>
      </div>
    </div>
  )
}
