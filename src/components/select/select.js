import "./select.css";

function Select({className = "", ...props}) {
  return (
    <select className={"select " + className} {...props} />
  );
}

export default Select;
