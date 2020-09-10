import React from "react";

const Spinner = () => {
  return (
    <div className="flex items-center justify-center h-xxxl w-full">
      <div className="animate-spin  loader ease-linear rounded-full border-10 border-t-8 border-green-700 h-32 w-32"></div>
    </div>
  );
};

export default Spinner;
