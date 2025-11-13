import { useState } from "react";
import Value from "../components/Value";
import Adder from "../components/Adder";
import Timer from "../components/Timer";
import Temperatures from "../components/Temperatures";
import RadixCounter from "../components/RadixCounter";
import "./Components.css";

const Components = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div className="components-container">
      <h1 className="page-title">REACT COMPONENTS</h1>

      <div className="components-grid">
        {/* RadixCounter ให้อยู่ด้านบนและกว้าง */}
        <div className="component-card radix-box wide">
          <h3>Radix Counter</h3>
          <RadixCounter />
        </div>

        <div className="component-card">
          <h3>Adder</h3>
          <Adder name="Adder Component" />
        </div>

        <div className="component-card">
          <h3>Timer</h3>
          <Timer />
        </div>

        <div className="component-card">
          <h3>Value</h3>
          <Value name="Example Value" value={counter} setValue={setCounter} />
        </div>

        <div className="component-card wide">
          <h3>Temperatures</h3>
          <Temperatures />
        </div>
      </div>

      <footer className="footer">
        <h2>67098506 นางสาวปัณณพรรธน์ เกียรตินิรชา</h2>
      </footer>
    </div>
  );
};

export default Components;
