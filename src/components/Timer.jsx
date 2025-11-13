import { useState, useEffect } from "react";
import './Timer'

const Timer = () => {
  const [second, setSecond] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let interval = null;
    if (running) {
      interval = setInterval(() => {
        setSecond((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [running]);

  const runClick = () => {
    setRunning(!running);
  };

  const resetClick = () => {
    setRunning(false);
    setSecond(0);
  };

  const convertToString = (sec) => {
    return `${sec}s`;
  };

  return (
    <div className="border- border-black mx-auto mt-6 rounded-3xl p-6 w-fit bg-gray-300

     shadow-md">
      {/* Title */}
      <h1 className="text-center text-blue-500 text-3xl font-bold mb-4">
        TIMER
      </h1>

      {/* Time display */}
      <div className="border-2 border-gray-400 rounded-md text-right text-lg font-mono p-2 w-64 bg-white">
        {convertToString(second)}
      </div>

      {/* Buttons */}
      <div className="flex justify-between items-center mt-4">
        <button
          onClick={resetClick}
          className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg flex items-center gap-2"
        >
          <i className="bi bi-arrow-counterclockwise"></i>
          RESET
        </button>

        <button
          onClick={runClick}
          className={`${
            running
              ? "bg-yellow-500 hover:bg-yellow-600"
              : "bg-green-500 hover:bg-green-600"
          } text-white font-semibold py-2 px-4 rounded-lg flex items-center gap-2`}
        >
          <i className={`bi ${running ? "bi-pause" : "bi-play"}`}></i>
          {running ? "PAUSE" : "RUN"}
        </button>
      </div>
    </div>
  );
};

export default Timer;
