import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <div className="flex justify-between items-center py-3">
      <Link to="/tasks">
        <h1 className="font-bold text-3xl mb-4">Tasks App</h1>
      </Link>
      <button>
        <Link
          to="/tasks-create"
          className="rounded-2xl bg-gray-600 p-4 hover:bg-gray-800"
        >
          {" "}
          Create Task{" "}
        </Link>
      </button>
    </div>
  );
}
