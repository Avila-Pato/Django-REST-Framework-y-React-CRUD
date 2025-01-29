import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getTask, updateTask } from "../api/task_api";
import { toast } from "react-hot-toast";
import { useForm } from "react-hook-form";

export default function TaskEditPage() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const { id } = useParams(); // Recuperamos el id desde la URL

  // Cargar la tarea cuando se ingresa a la página
  useEffect(() => {
    async function fetchTask() {
      const response = await getTask(id);
      const task = response.data;
      setValue("title", task.title);
      setValue("description", task.description);
    }
    fetchTask();
  }, [id, setValue]);

  const onSubmit = handleSubmit(async (data) => {
    await updateTask(id, data); // Actualizar la tarea
    toast.success("Task updated successfully", {
      position: "bottom-right",
      style: {
        background: "#101010",
        color: "#fff",
      },
    });
    navigate("/tasks"); // Redirigir a la lista de tareas
  });

  return (
    <div className="max-w-md mx-auto p-6 bg-zinc-800 rounded-md shadow-md">
      <h1 className="text-xl font-bold text-white mb-4">Edit Task</h1>
      <form onSubmit={onSubmit}>
        <div className="mb-4">
          <input
            type="text"
            className="w-full p-2 rounded bg-zinc-700 text-white"
            placeholder="Task title"
            {...register("title", { required: "This field is required" })}
          />
          {errors.title && (
            <span className="text-red-500">{errors.title.message}</span>
          )}
        </div>
        <div className="mb-4">
          <textarea
            className="w-full p-2 rounded bg-zinc-700 text-white"
            rows="4"
            placeholder="Task description"
            {...register("description", { required: "This field is required" })}
          ></textarea>
          {errors.description && (
            <span className="text-red-500">{errors.description.message}</span>
          )}
        </div>
        <button className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded-md transition duration-300 hover:cursor-pointer">
          Save Changes
        </button>
      </form>
    </div>
  );
}
