import { useState, useEffect } from "react";
import { TaskCard } from "./TaskCard";
import { getAllTasks, deleteTask } from "../api/task_api";
import { toast } from "react-hot-toast";

export default function TaskList() {
  const [tasks, setTasks] = useState([]);

  // Cargar todas las tareas
  useEffect(() => {
    async function fetchTasks() {
      const response = await getAllTasks();
      setTasks(response.data);
    }
    fetchTasks();
  }, []);

  const handleDelete = async (id) => {
    const confirmation = window.confirm(
      "Are you sure you want to delete this task?"
    );
    if (confirmation) {
      await deleteTask(id); // Eliminar tarea
      toast.success("Task deleted successfully", {
        position: "bottom-right",
        style: {
          background: "#101010",
          color: "#fff",
        },
      });
      setTasks(tasks.filter((task) => task.id !== id)); // Eliminar de la lista
    }
  };

  return (
    <div className="grid grid-cols-3 gap-3">
      {tasks.map((task) => (
        <div key={task.id} className="relative">
          <TaskCard task={task} />
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-md absolute bottom-0 right-0 hover:cursor-pointer"
            onClick={() => handleDelete(task.id)}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}
