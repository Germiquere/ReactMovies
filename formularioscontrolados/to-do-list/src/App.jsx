import { useState } from "react";
import Formulario from "./components/Formulario.jsx";
import TodosStatics from "./components/todosStatics.jsx";

const todoStatic = [
  {
    id: 1,
    title: "tarea 1",
    description: "Soy una tarea estatica",
    state: "pendiente",
    priority: true,
  },
  {
    id: 2,
    title: "tarea 2",
    description: "Soy otra tarea estatica",
    state: "pendiente",
    priority: false,
  },
  {
    id: 3,
    title: "tarea 3",
    description: "Soy la tercer tarea estatica",
    state: "pendiente",
    priority: true,
  },
];

const App = () => {
  const [toDos, setToDos] = useState(todoStatic);
  const nuevaTarea = (objeto) => {
    setToDos([...toDos], objeto);
    console.log(objeto);
    console.log(toDos);
  };

  // const addToDos = (toDu) => {
  //   console.log(toDu);
  //   setToDos([...toDos], "holaaaaaaaaaaaaa");
  // };
  return (
    <div className="container">
      <h1>Formulario</h1>
      <Formulario nuevaTarea={nuevaTarea} />
      <TodosStatics name={toDos} />
      {/* {console.log(todoStatic)} */}
    </div>
  );
};
export default App;
