import "./input.scss";

function Input({className = "", ...props}) {
  return (
    <input className={"input " + className} type="text" {...props} />
  );
}

export default Input;