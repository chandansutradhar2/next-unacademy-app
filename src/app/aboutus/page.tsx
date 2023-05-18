"use client";
import React, { useState } from "react";

const aboutus = () => {
  const [counter, setCounter] = useState(0);
  return (
    <h1 className="text-xl top-1 px-2 py-3 w-10/12 h-96 bg-blue-500">
      The Current counter Value is {counter}
    </h1>
  );
};

export default aboutus;
