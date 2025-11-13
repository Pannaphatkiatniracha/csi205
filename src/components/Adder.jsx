import { useState } from "react";
import Value from "./Value";

const Adder = ({ name }) => {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);

  return (
    <div className="border-2 border-black  rounded-3xl p-4 mt-3 mx-auto w-fit">
      {/* title */}
      <h1 className="text-center text-blue-600 text-xl font-bold mb-3">
        {name || "Adder"}
      </h1>

      {/* badges */}
      <div className="flex justify-center items-center gap-4 mb-3">
        <div className="bg-gray-300 text-gray-800 px-3 py-1 rounded">A = {a}</div>
        <div className="bg-blue-500 text-white px-3 py-1 rounded">A + B = {a + b}</div>
        <div className="bg-gray-300 text-gray-800 px-3 py-1 rounded">B = {b}</div>
      </div>
     
      {/* Value components */}
      <div className="flex justify-center gap-2 flex ">
        <Value name={"A"} value={a} setValue={setA} />
        <Value name={"B"} value={b} setValue={setB} />
      </div>
    </div>
  );
};

export default Adder;
