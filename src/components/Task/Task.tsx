import { FormEvent, useState } from "react";
import styles from "./styles.module.scss";

interface Task {
  id: number;
  title: string;
  done: boolean;
}

export const Tasks: React.FC = () => {
  const [taskTitle, setTaskTitle] = useState("");
  const [tasks, setTasks] = useState([] as Task[]);

  function handleSubmitAddTask(e: FormEvent) {
    e.preventDefault();

    if (taskTitle.length < 3) {
      alert("Tarefas devem ter pelo menos 3 caracteres");
      return;
    }

    setTasks([
      ...tasks,
      {
        id: new Date().getTime(),
        title: taskTitle,
        done: false,
      },
    ]);
    setTaskTitle("");
  }

  return (
    <section className={styles.container}>
      <form onSubmit={handleSubmitAddTask}>
        <div>
          <label htmlFor="task-title">Adicionar Nova Tarefa</label>
          <input
            value={taskTitle}
            onChange={(e) => setTaskTitle(e.target.value)}
            type="text"
            id="task-title"
            placeholder="Adicione uma tarefa"
          />
        </div>
        <button type="submit">Adicionar</button>
      </form>

      <ul>
        {tasks.map((task, index) => {
          return (
            <li key={task.id}>
              <input type="checkbox" id={`task-${task.id}`} />
              <label htmlFor={`task-${task.id}`}>
                Tarefa {index + 1}: {task.title}
              </label>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
