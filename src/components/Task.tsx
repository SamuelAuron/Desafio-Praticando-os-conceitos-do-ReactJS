import { Trash } from "phosphor-react";
import styles from './Task.module.css';
import { useState } from "react";

import circle from '../assets/circle.svg'
import check from '../assets/check.svg'
import { TypeTask } from "./ListTasks";

interface TaskProps extends TypeTask{
  onDeleteTask: (comment: string) => void;
  onFinishedTask: (comment: string) => void;
}

export default function Task({id, content, isFinished, onDeleteTask, onFinishedTask}: TaskProps) {
  const [finishedTask, setFinishedTask] = useState<boolean>(isFinished);

  function task() {
    if (finishedTask){
      return (
        <div className={styles.task}>
          <button 
            className={styles.completedCheckBox}
            onClick={handleFinishedTask}
          >
            <img src={check} alt="" />
          </button>
          <p className={styles.finishedText}>{content}</p> 
          <button onClick={handleDeleteTask} title='Deletar tarefa'>
            <Trash size={18} />
          </button>
        </div>
      );
    } else {
      return (
        <div className={styles.task}>
          <button 
            className={styles.checkBox}
            onClick={handleFinishedTask}
          >
            <img src={circle} alt="" />
          </button>
          <p className={styles.taskText}>{content}</p> 
          <button onClick={handleDeleteTask} title='Deletar tarefa'>
            <Trash size={18} />
          </button>
        </div>
      );
    }
    
  }
  function handleDeleteTask() {
   
    onDeleteTask(id);
    
  }


  function handleFinishedTask(){
    
    onFinishedTask(id)
    setFinishedTask(!finishedTask)
  }

  return task();
}