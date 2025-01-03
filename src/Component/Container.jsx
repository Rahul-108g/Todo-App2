import style from "./Container.module.css";

const Container = ({ children }) => {
  return (
    <>
      {" "}
      <div
        className={`container mt-5   ${style["box"]}`}
        data-aos="flip-left"
        data-aos-duration="1000"
      >
        {children}
      </div>
      ;
    </>
  );
};
export default Container;
