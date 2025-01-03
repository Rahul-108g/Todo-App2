import { useRef } from "react";
import { CgAdd } from "react-icons/cg";

const Form = ({ addNewItem }) => {
  const todoNameElement = useRef();
  const todoDateElement = useRef();

  const submitData = (event) => {
    event.preventDefault();
    const todoName = todoNameElement.current.value;
    const todoDate = todoDateElement.current.value;
    addNewItem(todoName, todoDate);

    todoNameElement.current.value = "";
    todoDateElement.current.value = "";
  };

  return (
    <>
      <div className="container my-4  ">
        <form
          action=""
          onSubmit={(event) => submitData(event)}
          className="d-flex justify-content-center"
        >
          <input
            ref={todoNameElement}
            type="text"
            className="form-control me-3"
            placeholder="enter your item"
          />

          <input
            ref={todoDateElement}
            type="date"
            className="form-control me-2"
            placeholder="enter your item"
          />

          <button type="submit" className="btn btn-outline-warning ">
            <h5>
              <CgAdd />
            </h5>
          </button>
        </form>
      </div>
    </>
  );
};
export default Form;
