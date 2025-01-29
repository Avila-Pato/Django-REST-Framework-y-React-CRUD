/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";

export function TaskCard({ task }) {
  const navigate = useNavigate();

  return (
    <div
      className="bg-zinc-800 p-4 rounded-lg shadow-md hover:bg-zinc-700 hover:cursor-pointer transition duration-200 gap-2"
      onClick={() => navigate(`/tasks/edit/${task.id}`)}
    >
      <h1 className="text-white font-bold uppercase text-lg truncate">
        {task.title}
      </h1>
      <p className="text-slate-400 text-sm mt-1 line-clamp-2">
        {task.description}
      </p>
    </div>
  );
}
