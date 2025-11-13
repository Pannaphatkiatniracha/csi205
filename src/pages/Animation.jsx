import { useEffect, useState } from "react";

const Animation = () => {
  const [running, setRunning] = useState(true);
  const [ballType, setBallType] = useState(0);
  const [angle] = useState(Math.PI / 4); // 45 องศา

  useEffect(() => {
    const fieldWidth = 700;
    const fieldHeight = 400;
    const ballDiameter = 100;

    let x = 50;
    let y = 50;
    const speed = 5;
    let vx = speed * Math.cos(angle);
    let vy = speed * Math.sin(angle);

    const maxX = fieldWidth - ballDiameter;
    const maxY = fieldHeight - ballDiameter;

    const ball = document.getElementById("ball");
    const field = document.getElementById("field");

    if (field && ball) {
      field.style.width = `${fieldWidth}px`;
      field.style.height = `${fieldHeight}px`;
    }

    const interval = setInterval(() => {
      if (!running) return;

      x += vx;
      y += vy;

      // ตรวจขอบและ bounce
      if (x <= 0 || x >= maxX) vx = -vx;
      if (y <= 0 || y >= maxY) vy = -vy;

      // จำกัดขอบ
      x = Math.max(0, Math.min(x, maxX));
      y = Math.max(0, Math.min(y, maxY));

      // เคลื่อนที่โดยไม่หมุน
      if (ball) {
        ball.style.left = `${x}px`;
        ball.style.top = `${y}px`;
      }
    }, 25);

    return () => clearInterval(interval);
  }, [running, ballType, angle]);

  // รูปจาก public/img
  const types = {
    0: "",
    1: "url('img/basketball.png')",
    2: "url('img/football.png')",
    3: "url('img/volleyball.png')",
    4: "url('img/Human.png')",
    5: "url('img/cartoon.png')",
  };

  useEffect(() => {
    const ball = document.getElementById("ball");
    if (ball) {
      ball.style.backgroundImage = types[ballType] || "";
      ball.style.backgroundSize = "cover";
      ball.style.backgroundPosition = "center";
    }
  }, [ballType]);

  // Keyboard controls
  useEffect(() => {
    const handleKey = (e) => {
      if (e.code === "Space") setRunning((prev) => !prev);
      if (e.key >= "0" && e.key <= "5") setBallType(Number(e.key));
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return (
    
    <div className="flex flex-col items-center mt-8">
      {/* Field */}
      <div
  id="field"
  className="relative bg-gray-200 border-4 border-gray-800 rounded-lg"
  style={{
    width: "700px",
    height: "400px",
   backgroundImage: `url('${import.meta.env.BASE_URL}img/footballss.jpg')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
  <div
    id="ball"
    className="absolute w-24 h-24 rounded-full bg-orange-500"
  ></div>
</div>

      {/* Controls */}
      <div className="flex flex-wrap justify-between items-center mt-4 w-[720px]">
        <button
          onClick={() => setRunning((prev) => !prev)}
          className={`px-4 py-2 rounded font-bold text-white ${
            running ? "bg-red-600" : "bg-green-600"
          }`}
        >
          {running ? "STOP" : "RUN"}
        </button>

        <div className="flex flex-wrap gap-2">
          {["None", "Basketball", "Football", "Volleyball", "Human", "Cartoon"].map(
            (label, i) => (
              <button
                key={i}
                onClick={() => setBallType(i)}
                className={`px-3 py-1 rounded font-medium ${
                  ballType === i
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 text-gray-800"
                }`}
              >
                {label}
              </button>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Animation;
