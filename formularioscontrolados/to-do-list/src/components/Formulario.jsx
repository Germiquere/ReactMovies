import { useState } from "react";
import Swal from "sweetalert2";
const Formulario = ({ nuevaTarea }) => {
  // no es la forma correcta porque si tengo muchos mas inputs seria muy tedioso.s
  //   const [title, setTitle] = useState("");
  //   const [description, setDescription] = useState("");
  //   const [state, setState] = useState("pendiente");

  //   una mejor forma de conseguir lo mismo de arriba
  const [toDo, setToDo] = useState({
    title: "",
    description: "",
    state: "pendiente",
    priority: true,
  });
  // con el destructuring lo que hago es facilitarme y no tener que poner al querer usar por ejemplo el title toDo.title. solamente coloco title y ya funciona.
  const { title, description, state, priority } = toDo;

  const handleSubmit = (e) => {
    e.preventDefault();
    // el return es por si es que se encontro con algun problema para que no siga ejecutandoce el submit

    if (title.trim() === "" || description.trim() === "") {
      return Swal.fire({
        icon: "error",
        title: "Llena todos los campos",
        // text: "Tienes que llenar todos los campos",
      });
    }
    nuevaTarea({
      id: Date.now(),
      ...toDo,
      //  hacer lo que esta abajo es lo mismo que lo que como esta hecho
      //  state: state === 'completado' ? true : false,
      state: state === "completado",
      // esta linea de codigo ya deja verdadero o falso
    });
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Se agrego una nueva tareas ",
      showConfirmButton: false,
      timer: 700,
    });
  };
  //   los checkboxs no funcionan con esta forma de hacerlo porque no usan el value sino que usan el checked
  //   por eso hay que usar el if y preguntar si el type es value o checkbox
  const handleChange = (e) => {
    setToDo({
      ...toDo,
      [e.target.name]:
        e.target.type === "checkbox" ? e.target.checked : e.target.value,
    });
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Titulo"
        className="form-control mb-2"
        name="title"
        value={toDo.title}
        // onChange={(e) => setToDo({ ...toDo, title: e.target.value })}
        onChange={handleChange}
      />
      <textarea
        name="description"
        className="form-control mb-2"
        placeholder="Descripcion"
        value={toDo.description}
        // onChange={(e) => setToDo({ ...toDo, description: e.target.value })}
        onChange={handleChange}
      />
      <div>
        <input
          type="checkbox"
          name="priority"
          className="form-check-input"
          id="inputCheck"
          checked={toDo.priority}
          onChange={handleChange}
        />
        <label htmlFor="inputCheck">Importante</label>
      </div>
      <select
        name="state"
        className="form-select mb-2"
        value={toDo.state}
        // onChange={(e) => setToDo({ ...toDo, state: e.target.value })}
        onChange={handleChange}
      >
        <option value="pendiente">Pendiente</option>
        <option value="completado">Completado</option>
      </select>
      <button type="submit" className="btn btn-primary">
        Crear Nota
      </button>
    </form>
  );
};
export default Formulario;
