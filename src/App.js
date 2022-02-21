import React, { useState } from "react";
import "./styles.css";
import Navbar from "./components/Navbar/Navbar";
import TaskList from "./components/TaskList/TaskList";

let idAcc = 0;
const generateId = () => {
  idAcc += 1;
  return idAcc;
};

export default function App() {
  const [tasks, setTasks] = useState([]);
  const addTask = (title, state) => {
    console.log("Função sendo chamada em App");
    const newTask = {
      id: generateId(),
      title,
      state
    };
    setTasks((existingTask) => {
      return [...existingTask, newTask];
    });
  };
  const updateTask = (id, title, state) => {
    console.log("passando aqui");
    setTasks((existingTask) => {
      return existingTask.map((task) => {
        if (task.id === id) {
          return { ...task, title, state };
        } else {
          return task;
        }
      });
    });
  };

  const deleteTask = (id) => {
    setTasks((existingTask) => {
      return existingTask.filter((task) => task.id !== id);
    });
  };

  return (
    <div className="App">
      <Navbar />
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>

      <div className="container">
        <TaskList
          title="Pendente"
          taskState="Pendente"
          onAddTask={addTask}
          tasks={tasks.filter((t) => t.state === "Pendente")}
          onTaskUpdated={updateTask}
          onDeleteTask={deleteTask}
        />

        <TaskList
          title="Fazendo"
          taskState="Fazendo"
          onAddTask={addTask}
          tasks={tasks.filter((t) => t.state === "Fazendo")}
          onTaskUpdated={updateTask}
          onDeleteTask={deleteTask}
        />

        <TaskList
          title="Completa"
          taskState="Completa"
          onAddTask={addTask}
          tasks={tasks.filter((t) => t.state === "Completa")}
          onTaskUpdated={updateTask}
          onDeleteTask={deleteTask}
        />
      </div>
    </div>
  );
}
