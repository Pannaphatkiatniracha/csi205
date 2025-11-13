import { useState, useEffect } from "react";
import "./Calculator.css";

const Calculator = () => {
  const [screen, setScreen] = useState("0");
  const [state, setState] = useState("s0");
  const [firstOperand, setFirstOperand] = useState(0);
  const [secondOperand, setSecondOperand] = useState(0);
  const [lastOperator, setLastOperator] = useState("?");
  const [lastOperandUsed, setLastOperandUsed] = useState(0);

  const calculate = (op1, op2, operator) => {
    if (operator === "+") return (op1 + op2).toString();
    if (operator === "-") return (op1 - op2).toString();
    return op1.toString();
  };

  const operatorClicked = (operator) => {
    if (state === "s1") {
      if (lastOperator !== "?" && state !== "s2") {
        const result = calculate(firstOperand, Number(screen), lastOperator);
        setScreen(result);
        setFirstOperand(Number(result));
      } else {
        setFirstOperand(Number(screen));
      }
      setLastOperator(operator);
      setState("s2");
    } else if (state === "s0") {
      setLastOperator(operator);
    } else if (state === "s2") {
      setLastOperator(operator);
    }
  };

  const equalClicked = () => {
    if (lastOperator === "?") return;

    let result;
    if (state === "s1") {
      setSecondOperand(Number(screen));
      setLastOperandUsed(Number(screen));
      result = calculate(firstOperand, Number(screen), lastOperator);
    } else if (state === "s0") {
      result = calculate(firstOperand, lastOperandUsed, lastOperator);
    }

    setScreen(result);
    setFirstOperand(Number(result));
    setState("s0");
  };

  const ceClicked = () => {
    setScreen("0");
    setState("s0");
    setFirstOperand(0);
    setSecondOperand(0);
    setLastOperator("?");
  };

  const numberClicked = (number) => {
    if (state === "s0") {
      setScreen(number.toString());
      setState("s1");
    } else if (state === "s1") {
      setScreen((prev) => prev + number.toString());
    } else if (state === "s2") {
      setScreen(number.toString());
      setState("s1");
    }
  };

  const checkKeyboard = (event) => {
    if (event.key >= "0" && event.key <= "9") {
      numberClicked(Number(event.key));
    } else if (event.key === "+") {
      operatorClicked("+");
    } else if (event.key === "-") {
      operatorClicked("-");
    } else if (event.key === "Enter") {
      equalClicked();
    } else if (event.key === "Escape") {
      ceClicked();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", checkKeyboard);
    return () => document.removeEventListener("keydown", checkKeyboard);
  });

  const renderButton = (label, colorClass, onClick, disabled = false) => (
    <button
      className={`calculator-btn ${disabled ? "btn-disabled" : colorClass}`}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );

  return (
    <div className="calculator-wrapper">
      <div className="calculator-container">
        <div className="calculator-screen">{screen}</div>

        <div>
          {renderButton("MC", "btn-cyan", null, true)}
          {renderButton("MR", "btn-cyan", null, true)}
          {renderButton("M+", "btn-cyan", null, true)}
          {renderButton("M−", "btn-cyan", null, true)}
          {renderButton("CE", "btn-red", ceClicked)}
        </div>

        <div>
          {renderButton("7", "btn-pink", () => numberClicked(7))}
          {renderButton("8", "btn-pink", () => numberClicked(8))}
          {renderButton("9", "btn-pink", () => numberClicked(9))}
          {renderButton("÷", "btn-purple", null, true)}
          {renderButton("√", "btn-purple", null, true)}
        </div>

        <div>
          {renderButton("4", "btn-pink", () => numberClicked(4))}
          {renderButton("5", "btn-pink", () => numberClicked(5))}
          {renderButton("6", "btn-pink", () => numberClicked(6))}
          {renderButton("×", "btn-purple", null, true)}
          {renderButton("%", "btn-purple", null, true)}
        </div>

        <div>
          {renderButton("1", "btn-pink", () => numberClicked(1))}
          {renderButton("2", "btn-pink", () => numberClicked(2))}
          {renderButton("3", "btn-pink", () => numberClicked(3))}
          {renderButton("−", "btn-purple", () => operatorClicked("-"))}
          {renderButton("1/X", "btn-purple", null, true)}
        </div>

        <div>
          {renderButton("0", "btn-pink", () => numberClicked(0))}
          {renderButton(".", "btn-cyan", null, true)}
          {renderButton("+/-", "btn-cyan", null, true)}
          {renderButton("+", "btn-purple", () => operatorClicked("+"))}
          {renderButton("=", "btn-yellow", equalClicked)}
        </div>
      </div>

      <div className="calculator-student">
        67098506 ปัณณพรรธน์ เกียรตินิรชา
      </div>
    </div>
  );
};

export default Calculator;
