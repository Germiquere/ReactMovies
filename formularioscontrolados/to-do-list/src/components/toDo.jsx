const ToDo = ({ toDo, deleteTarea, actualizarEstado }) => {
  const { title, description, state, id, priority } = toDo;
  return (
    // <li className="flex-column align-items-center list-group-item ">
    //   <div>
    //     <div className="flex-column align-items-center">
    //       <h5>{title}</h5>
    //       <p>{description}</p>
    //       <div className="d-flex gap-2">
    //         <button className="btn btn-sm btn-danger">Eliminar</button>
    //         <button className="btn btn-sm btn-warning">Actualizar</button>
    //       </div>
    //     </div>
    //   </div>
    // </li>
    <div className="card text-center mb-2">
      <div className="card-body">
        {/* al poner && hago que en el if solamente si es true se ponga prioritario  y si es negativo que no se haga nada */}
        <span className="badge bg-secondary">{priority && "Prioritario"}</span>
        <h5 className={`${state && "text-decoration-line-through"}`}>
          {title}
        </h5>
        <p className="card-text">{description}</p>
      </div>
      <div className="card-footer d-flex gap-2 justify-content-center">
        <button
          onClick={() => {
            deleteTarea(id);
          }}
          className="btn btn-sm btn-danger"
        >
          Eliminar
        </button>
        <button
          onClick={() => {
            actualizarEstado(id);
          }}
          className="btn btn-sm btn-warning"
        >
          {/* si esta pendiente que el boton diga complatado y si no esta pendiente que diga pendiente */}
          {state ? "Pendiente" : "Completado"}
        </button>
      </div>
    </div>
  );
};
export default ToDo;
