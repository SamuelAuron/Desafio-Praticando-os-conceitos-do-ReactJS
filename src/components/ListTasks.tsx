import { FormEvent, useState } from 'react';
import styles from './ListTasks.module.css'
import { ClipboardText, PlusCircle } from 'phosphor-react'
import Task from './Task';

export interface Task {
  id: number;
  task: string;
  finished: false;
}

export default function ListTasks() {
  const [tasks, setTasks] = useState([])
  const [finishedTasks, setFinishedTasks] = useState([])

  const [newTaskText, setNewTaskText] = useState('');

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault()
    
    setTasks([...tasks, newTaskText])
    setNewTaskText('')
  }

  return (
    <div className={styles.container}>
      <form 
        className={styles.task}
        onSubmit={handleCreateNewTask}
      > 
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
      <div className={styles.info}>
        <span className={styles.Newtasks}>Tarefas Criadas {tasks.length}</span>
        <span className={styles.Endtasks}>Concluídas {tasks.length}</span>
      </div>
      <footer className={styles.footer}>
        <ClipboardText size={56} className={styles.icon}/>
        <span>Você ainda não tem tarefas cadastradas</span>
        <p>Crie tarefas e organize seus itens a fazer</p>
        <Task content='Beber agua' /> 
      </footer>
    </div>
  );
}
