const Items = ({ todoname, tododate, deleteItem }) => {
  return (
    <>
      <div
        className="container   mt-5 "
        data-aos="flip-right"
        data-aos-duration="3000"
      >
        <div className="row ">
          <div className="p-4 col-lg-5  me-2">
            <h4 className="text-start">{todoname}</h4>
          </div>
          <div className="p-4 col-lg-5  me-2">
            <h4 className="text-start">{tododate}</h4>
          </div>
          <div className="p-3 col-1 ">
            <button
              onClick={() => {
                deleteItem(todoname);
              }}
              className="btn text-center  btn-outline-warning"
            >
              <h6>Delete</h6>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Items;
