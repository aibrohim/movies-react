import "./input.css";

function Input({className = "", ...props}) {
  return (
    <input className={"input " + className} type="text" {...props} />
  );
}

export default Input;