import { useState } from 'react';
import styles from './ListTasks.module.css'
import { ClipboardText } from 'phosphor-react'

export default function ListTasks() {
  
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.info}>
          <span className={styles.Newtasks}>Tarefas Criadas 0</span>
          <span className={styles.Endtasks}>Concluídas 0</span>
        </div>
      </header>
      <footer className={styles.footer}>
        <ClipboardText size={56} className={styles.icon}/>
        <span>Você ainda não tem tarefas cadastradas</span>
        <p>Crie tarefas e organize seus itens a fazer</p>
      </footer>
    </div>
  );
}
