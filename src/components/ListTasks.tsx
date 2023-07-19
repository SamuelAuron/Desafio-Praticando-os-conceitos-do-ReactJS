import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';
import styles from './ListTasks.module.css'
import { ClipboardText, PlusCircle } from 'phosphor-react'
import Task from './Task';
import uuid from 'uuid-random';

export interface TypeTask {
  id: string;
  content: string;
  isFinished: boolean;
}

export default function ListTasks() {
  const [tasks, setTasks] = useState<TypeTask[]>([])
  const [completedTasksCount, setCompletedTasksCount] = useState(0)
 
  const [newTaskText, setNewTaskText] = useState('');

  function listTasks() {
    if (tasks.length <= 0){
      return(
        <>
        <ClipboardText size={56} className={styles.icon}/>
        <span>Você ainda não tem tarefas cadastradas</span>
        <p>Crie tarefas e organize seus itens a fazer</p>
        </>
      );
    }
  }

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault()

    const newTask: TypeTask = {
      "id": uuid(),
      "content": newTaskText,
      "isFinished": false
    };

    setTasks([...tasks, newTask])
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
      if (task.id === taskToDelete && task.isFinished){
        setCompletedTasksCount(completedTasksCount - 1)
      }  
      return task.id !== taskToDelete;
    })
    setTasks(taskWithoutDeleteOne)
  }

  function setStatusTask(taskToSet: string) {
    let count = 0;
    tasks.map(task => {
      if (task.id === taskToSet) {
        task.isFinished = !task.isFinished;
      }
      if (task.isFinished){
        count =count + 1;
      }
    })
    setCompletedTasksCount(count)
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
        <span className={styles.Newtasks}>Tarefas Criadas <span>{tasks.length}</span></span>
        <span className={styles.Endtasks}>Concluídas <span>{completedTasksCount} de {tasks.length}</span></span>
      </div>
      
      <footer className={styles.footer}>
      {listTasks()}
      {tasks.map(task => {
          return <Task 
          key={task.id}
          id={task.id}
          content={task.content}
          isFinished={task.isFinished}
          onDeleteTask={deleteTask}
          onFinishedTask={setStatusTask}
        />
      })}
      </footer>
    </div>
  );
}
