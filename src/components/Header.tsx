import styles from './Header.module.css'
import todoLogo from '../assets/rocket.svg'

export default function Header() {

  return (
    <div>
      <header className={styles.header}>
        <img src={todoLogo} alt="Logo" />
        <span>to</span><span>do</span>
      </header>
  </div>
  )
}

