import styles from '../footer/footer.module.css'
import lampada from '../../assets/caixa.png'
import { BsWhatsapp, BsGithub, BsLinkedin } from 'react-icons/bs'

export function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.contatoDev}>
        <div className={styles.logo}>
          <a href="https://slumsk8.github.io/desafio-dio-github-rep/" target={'_blank'} rel="noreferrer">
            <img src={lampada} alt="fora da caixa" />
          </a>
          <h2>Tiago Aragão Costa</h2>
          <p>Analista de sistemas</p>
        </div>
        <div className={styles.socialMedia}>
          <a href="https://www.linkedin.com/in/tiago-arag%C3%A3o-costa-469027193/" target={'_blank'} rel="noreferrer">
            <BsLinkedin color='#0a66c2' size={24} />
          </a>
          <a href="https://github.com/slumsk8" target={'_blank'} rel="noreferrer">
            <BsGithub color='#000' size={24} />
          </a>
          <a href=" https://wa.me/5571987322709?Olá%20em%20que%20posso%20ajudar?" target={'_blank'}>
            <BsWhatsapp color='#28e16d' size={24} />
          </a>
        </div>
      </div>
      {/* <div className={styles.developer}>
        <h2>Tiago Aragão Costa</h2>
        <p>Analista de sistemas</p>
        <div className={styles.socialMedia}>
          <button className={styles.btnWA}>
            <BsWhatsapp color='#4cb36c' size={34} />
          </button>
          <button className={styles.btnWA}>
            <BsInstagram color='#fb5645' size={34} />
          </button>
          <button className={styles.btnWA}>
            <BsGithub color='#000' size={34} />
          </button>
        </div>
      </div> */}
    </div>
  )

}