import axios from "axios";

export const getAllTasks = async () => {
  try {
    const response = await axios.get(
      "http://localhost:8000/tasks/api/v1/tasks/"
    );
    return response; // Asegurar que la función devuelva la respuesta
  } catch (error) {
    console.error("Error al obtener tareas:", error);
    return { data: [] }; // Evita que falle en caso de error
  }
};

export const getTask = async (id) => {
  try {
    const response = await axios.get(
      `http://localhost:8000/tasks/api/v1/tasks/${id}/`
    );
    return response; // Asegurar que la función devuelva la respuesta
  } catch (error) {
    console.error("Error al obtener tarea:", error);
    return { data: [] }; // Evita que falle en caso de error
  }
};

export const createTask = async (task) => {
  try {
    const response = await axios.post(
      "http://localhost:8000/tasks/api/v1/tasks/",
      task
    );
    return response; // Asegurar que la función devuelva la respuesta
  } catch (error) {
    console.error("Error al crear tarea:", error);
    return { data: [] }; // Evita que falle en caso de error
  }
};

export const deleteTask = async (id) => {
  try {
    const response = await axios.delete(
      `http://localhost:8000/tasks/api/v1/tasks/${id}/`
    );
    return response; // Asegurar que la función devuelva la respuesta
  } catch (error) {
    console.error("Error al eliminar tarea:", error);
    return { data: [] }; // Evita que falle en caso de error
  }
};

export const updateTask = async (id, task) => {
  try {
    const response = await axios.put(
      `http://localhost:8000/tasks/api/v1/tasks/${id}/`,
      task
    );
    return response; // Asegurar que la función devuelva la respuesta
  } catch (error) {
    console.error("Error al actualizar tarea:", error);
    return { data: [] }; // Evita que falle en caso de error
  }
};
