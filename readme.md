# Proyecto de Gestión de Tareas

Este proyecto es una aplicación web para gestionar tareas, utilizando **Django REST Framework** para el backend y **React** con **Tailwind CSS** para el frontend. A través de esta aplicación, puedes crear, actualizar, eliminar y listar tareas, todo con una interfaz sencilla y moderna.

## 🛠️ Tecnologías Utilizadas

- **Backend**: Django, Django REST Framework
- **Frontend**: React, Tailwind CSS
- **API**: JSON, axios
- **Estilos**: Tailwind CSS


## 🔧 Configuración del Proyecto

Se ha configurado un entorno de desarrollo que incluye tanto el backend como el frontend. Django REST Framework se utiliza para manejar las solicitudes del lado del servidor, mientras que React gestiona la interfaz de usuario del lado del cliente.

## 🌐 Django REST Framework

El backend se basa en **Django REST Framework**, que facilita la creación de API RESTful para manejar las operaciones CRUD (Crear, Leer, Actualizar, Eliminar) de las tareas. Este marco de trabajo permite una integración rápida y eficiente entre el frontend y el backend, utilizando solicitudes HTTP.

## 📝 Modelo de Tareas

El modelo de tareas fue diseñado en Django para almacenar información relacionada con cada tarea, como el **título** y la **descripción**. Este modelo se conecta a la base de datos y se expone a través de un API para interactuar con él desde el frontend.

## 🖥️ Configuración de URLs

Se configuraron las URLs en Django para gestionar las rutas necesarias, permitiendo que el frontend se comunique correctamente con el backend y realizando las operaciones CRUD en el servidor.

## 📚 Documentación de la API

El proyecto incluye documentación detallada de las API utilizando herramientas como **Swagger** para facilitar la comprensión de cómo interactuar con el backend.

## ⚙️ Configuración de React

En el frontend, se utilizó **React** para construir una interfaz de usuario interactiva y dinámica. La configuración incluye la integración con el backend para obtener y manipular las tareas.

## 📥 Obtener Tareas

Se implementó una función en React para **obtener las tareas** desde el backend mediante una solicitud API. Esta función se asegura de que las tareas estén siempre actualizadas y se muestren en tiempo real en la interfaz de usuario.

## 🔌 Petición al Backend

Para realizar las operaciones CRUD en el backend, se usan peticiones HTTP en React. Estas solicitudes permiten crear, eliminar, actualizar y obtener tareas de forma eficiente, con una experiencia de usuario fluida.

## 📋 TaskCard: Componente de Tarea

El **TaskCard** es un componente que muestra cada tarea en una tarjeta. Este componente es reutilizable y está diseñado para mostrar de manera clara y sencilla los detalles de cada tarea, como su título y descripción.

## ➕ Crear Tareas

Se implementó una interfaz para **crear tareas**, que permite a los usuarios agregar nuevas tareas a la lista a través de un formulario. Las tareas se envían al backend para ser guardadas en la base de datos.

## 🗑️ Eliminar Tareas

El proyecto permite a los usuarios **eliminar tareas** mediante un botón de eliminación. Al confirmar la acción, la tarea se elimina tanto del frontend como del backend.

## ✏️ Actualizar Tareas

Los usuarios pueden **actualizar tareas** existentes a través de un formulario de edición. Al enviar los cambios, los datos se actualizan en el backend y se reflejan de inmediato en la interfaz.

## 🎨 Integración con Tailwind CSS

Para los estilos, se utilizó **Tailwind CSS**, un marco de diseño utility-first, que facilita la creación de interfaces responsivas y modernas. Con Tailwind, se logró una apariencia atractiva y funcional para la aplicación sin la necesidad de escribir grandes cantidades de CSS personalizado.

---

## 📌 Contribuciones

Si deseas contribuir a este proyecto, por favor abre un **issue** o envía un **pull request** con las mejoras. ¡Toda ayuda es bienvenida!

---

## 👨‍💻 Contacto

Si tienes alguna pregunta o deseas más información, no dudes en contactarme a través de mi [GitHub](https://github.com/Avila-Pato) o [correo electrónico](mailto:p.avilaf1998@gmail.com).

---

¡Gracias por visitar el proyecto! 🎉
