import Items from "./Items";

const Item = ({ todoitem, deleteItem }) => {
  return (
    <div className="container m-5">
      {todoitem.map((item) => (
        <Items
          key={item.name}
          todoname={item.name}
          tododate={item.date}
          deleteItem={deleteItem}
        />
      ))}
    </div>
  );
};
export default Item;
