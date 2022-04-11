import React from "react";

function FunctionProps(props) {
  return (
    <div>
      <h3> this is functional Component</h3>,
      <h3>
        Hello {props.name} from {props.place}
      </h3>
    </div>
  );
}
export default FunctionProps;
