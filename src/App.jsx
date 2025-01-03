import Item from "./Component/Item";
import Heading from "./Component/Heading";
import { useEffect, useState } from "react";
import Form from "./Component/Form";
import Container from "./Component/Container";
import Aos from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    Aos.init({ once: true });
  });

  const [todoitem, setTodoitem] = useState([
    {
      name: "Apple",
      date: "12/02/2000",
    },
  ]);

  const addNewItem = (todoName, todoDate) => {
    let newArr = [...todoitem, { name: todoName, date: todoDate }];

    setTodoitem(newArr);
  };

  const deleteItem = (item) => {
    let newArr2 = todoitem.filter((val) => {
      return val.name !== item;
    });

    setTodoitem(newArr2);
  };

  return (
    <Container>
      <Heading />
      <Form addNewItem={addNewItem} />
      <Item todoitem={todoitem} deleteItem={deleteItem} />
    </Container>
  );
}

export default App;
