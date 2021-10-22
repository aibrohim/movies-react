import { forwardRef } from "react";
import "./select.css";

function Select({className = "", ...props}, ref) {
  return (
    <select ref={ref} className={"select " + className} {...props} />
  );
}

export default forwardRef(Select);
