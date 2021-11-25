import React from "react";

export const Square = () => {
  return (
    <div>
      <button
        className="square"
        onClick={function () {
          console.log("click");
        }}
      >
        {this.props.value}
      </button>
    </div>
  );
};

export default Square;
