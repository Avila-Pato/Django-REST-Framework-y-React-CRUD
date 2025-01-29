import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import TaskPage from "./pages/TaskPage.jsx";
import TaskFormPage from "./pages/TaskFormPage.jsx";
import Navigation from "./components/Navigation.jsx";
import { Toaster } from "react-hot-toast";
import TaskEditPage from "./pages/TaskEditPage.jsx";

function App() {
  return (
    <BrowserRouter>
      <div className="container mx-auto">
        <Navigation />
        <Routes>
          <Route path="/" element={<Navigate to="/tasks" />} />
          <Route path="/tasks" element={<TaskPage />} />
          <Route path="/tasks-create" element={<TaskFormPage />} />
          <Route path="/tasks/edit/:id" element={<TaskEditPage />} />
        </Routes>
        <Toaster />
      </div>
    </BrowserRouter>
  );
}

export default App;
