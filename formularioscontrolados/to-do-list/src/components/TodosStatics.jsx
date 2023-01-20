const TodosStatics = ({ name }) => {
  return (
    <div>
      <h2>ToDos</h2>
      <ul>
        {name.map((e) => (
          <li key={e.id}>{e.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodosStatics;
