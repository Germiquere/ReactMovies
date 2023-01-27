import { useEffect } from "react";
import { useState } from "react";
import Formulario from "./components/Formulario.jsx";
import TodosStatics from "./components/todosStatics.jsx";
// con esto pregunto si el localStorage tiene items que los traiga y sino que devuelva un array vacio
// buco el item tarea que cree anteriormente si es que exite y obtengo sus datos y les hago un parse para volverlo a un array sin formato de string
const todoStatic = JSON.parse(localStorage.getItem("tareas")) || [];

const App = () => {
  const [toDos, setToDos] = useState(todoStatic);
  // creando el hook para agregar una tarea
  const nuevaTarea = (toDo) => {
    setToDos([...toDos, toDo]);
  };
  // guardando los datos en el localstorage
  // con el segundo parametro que va entre corchetes le puedo decir despues de que elemento renderizado se va a ejecutar el useefect
  useEffect(() => {
    // creo el item tarea  y transformo a string el array todos
    localStorage.setItem("tareas", JSON.stringify(toDos));
  }, [toDos]);

  // creando el hook para borrar una tarea por id de componente
  const deleteTarea = (id) => {
    const array = toDos.filter((toDo) => toDo.id !== id);
    setToDos(array);
  };
  // cambiar de pendiente a completado
  const actualizarEstado = (id) => {
    const array = toDos.map((toDo) => {
      if (toDo.id === id) {
        toDo.state = !toDo.state;
      }
      return toDo;
    });
    setToDos(array);
  };
  // ordenar tareas por prioridad
  const ordenarTareas = (arrayToDos) => {
    return arrayToDos.sort((a, b) => {
      if (a.priority === b.priority) return 0;
      if (a.priority === true) return -1;
      // el === true es redundante se puede hacer como hice en el caso de abajo
      if (!a.priority) return 1;
    });
  };
  return (
    <div className="container">
      <h1>Notas</h1>
      <Formulario nuevaTarea={nuevaTarea} />
      <TodosStatics
        toDos={ordenarTareas(toDos)}
        deleteTarea={deleteTarea}
        actualizarEstado={actualizarEstado}
      />
      {/* {console.log(todoStatic)} */}
    </div>
  );
};
export default App;
