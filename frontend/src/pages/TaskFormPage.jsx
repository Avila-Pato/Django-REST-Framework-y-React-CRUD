import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-hot-toast";
import { useEffect } from "react";
import { getTask, createTask, updateTask } from "../api/task_api";

export default function TaskFormPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();
  const navigate = useNavigate();
  const params = useParams();

  const onSubmit = handleSubmit(async (data) => {
    if (params.id) {
      await updateTask(params.id, data);
      toast.success("Task updated successfully", {
        position: "bottom-right",
        style: { background: "#101010", color: "#fff" },
      });
    } else {
      await createTask(data);
      toast.success("Task created successfully", {
        position: "bottom-right",
        style: { background: "#101010", color: "#fff" },
      });
    }
    navigate("/tasks");
  });

  useEffect(() => {
    async function fetchTask() {
      if (params.id) {
        const response = await getTask(params.id);
        const task = response.data;
        setValue("title", task.title);
        setValue("description", task.description);
      }
    }
    fetchTask();
  }, []);

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-gray-800 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center">
        {params.id ? "Edit Task" : "Create Task"}
      </h2>
      <form onSubmit={onSubmit} className="space-y-4">
        <div>
          <label className="block text-white font-semibold">Title</label>
          <input
            type="text"
            placeholder="Task title"
            {...register("title", { required: true })}
            className="w-full mt-1 p-2 border 
             rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
          />
          {errors.title && (
            <span className="text-red-500 text-sm">This field is required</span>
          )}
        </div>

        <div>
          <label className="block text-white font-semibold">Description</label>
          <textarea
            rows="3"
            placeholder="Description"
            {...register("description", { required: true })}
            className="w-full mt-1 p-2 border text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
          {errors.description && (
            <span className="text-red-500 text-sm">This field is required</span>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md transition duration-200"
        >
          Save
        </button>
      </form>
    </div>
  );
}
