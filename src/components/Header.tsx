import styles from './Header.module.css'
import todoLogo from '../assets/rocket.svg'
import { PlusCircle} from 'phosphor-react'

export default function Header() {

  return (
    <div>
      <header className={styles.header}>

        <img src={todoLogo} alt="Logo" />
        <span>to</span><span>do</span>
      </header>

      <footer className={styles.footer}>
        <form className={styles.task}> 
          <textarea 
            name="newTask"
            placeholder='Adicionar uma nova tareda'
            required
          />
          <button 
            type='submit'
          >
            Criar
            <PlusCircle className={styles.buttonPlusIcon} size={20} />
          </button>
        </form>
      </footer>
  </div>
  )
}

