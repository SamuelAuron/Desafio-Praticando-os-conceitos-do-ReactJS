import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';
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

  function handleNewTaskChange(event: ChangeEvent<HTMLTextAreaElement>){
    event.target.setCustomValidity('')
    setNewTaskText(event.target.value)
  }

  function handleNewTaskInvalid(event: InvalidEvent<HTMLTextAreaElement>){
    event.target.setCustomValidity('Esse campo é obrigatorio!');
  }

  function deleteTask(taskToDelete: string) {
    const taskWithoutDeleteOne = tasks.filter(task => {
      return task !== taskToDelete;
    })
    setTasks(taskWithoutDeleteOne)
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
          value={newTaskText}
          onChange={handleNewTaskChange}
          onInvalid={handleNewTaskInvalid}
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
        {tasks.map(task => {
          return <Task 
          key={task}
          content={task}
          onDeleteTask={deleteTask}/> 
        })}
      </footer>
    </div>
  );
}
