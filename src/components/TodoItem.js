import "../styles/styles.css";

const TodoItem = ({ task }) => {
  return (
    <>
      <div className="card">
        <p>{task}</p>
      </div>
    </>
  );
};

export default TodoItem;
