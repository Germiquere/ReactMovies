import ToDo from "./toDo";
const TodosStatics = ({ toDos, deleteTarea, actualizarEstado }) => {
  return (
    <div className="mt-4 text-center">
      <h2 className="mb-5">Mis Notas</h2>
      <div>
        {toDos.map((e) => (
          <ToDo
            key={e.id}
            toDo={e}
            deleteTarea={deleteTarea}
            actualizarEstado={actualizarEstado}
          ></ToDo>
        ))}
      </div>
      {toDos.length === 0 && <p className="text-center">No hay notas</p>}
    </div>
  );
};

export default TodosStatics;
