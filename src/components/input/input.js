import { forwardRef } from "react";
import "./input.scss";

function Input({className = "", ...props}, ref) {
  return (
    <input ref={ref} className={"input " + className} type="text" {...props} />
  );
}

export default forwardRef(Input);