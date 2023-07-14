import { Trash } from "phosphor-react";
import styles from './Task.module.css';

interface TaskProps{
  content: string;
  onDeleteTask: (comment: string) => void;
}

export default function Task({content, onDeleteTask}: TaskProps) {
  function handleDeleteTask() {
    onDeleteTask(content);
  }

  return (
    <div className={styles.container}>
      <div className={styles.teste}></div>
      <p>{content}</p> 
      <button onClick={handleDeleteTask} title='Deletar tarefa'>
        <Trash size={18} />
      </button>
      
    </div>
  );
}