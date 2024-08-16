import { useState } from "react";
import removeIcon from "./images/remove_icon.png";
import squareRoot from "./images/square_root.png";
import xSquare from "./images/x_square.png";
import xRoot from "./images/x_root.png";
import x_x from "./images/X_X.png";

function App() {
  const [display, setDisplay] = useState("0");
  const [result, setResult] = useState(0);
  const [operator, setOperator] = useState("");
  const [view, setView] = useState("standard");

  //Ingresar el número
  const handleNumberClick = (number) => {
    //Cambiar el valor por defecto (0) al numero ingresado
    //Ejemplo 0 => 3
    //Agregar el numero ingresado al numero ya existente
    //Ejemplo 5 => 53
    setDisplay(display === "0" ? number : display + number);
  };

  //Ingresar el .
  const handleCommaClick = () => {
    setDisplay(display + ".");
  };

  //Elegir que operacion se va a realizar
  const handleOperatorClick = (operation) => {
    if (display !== "") {
      setResult(parseFloat(display));
      setDisplay("0");
      setOperator(operation);
    }
  };

  //Borrar solo el ultimo numero ingresado
  const handleDelete = () => {
    if (display.length > 1) {
      setDisplay(display.slice(0, -1));
    } else {
      setDisplay("0");
    }
  };

  //Borrar solo el display actual
  const handleDeleteAll = () => {
    setDisplay("0");
  };

  //Borrar todo
  const handleClear = () => {
    setDisplay("0");
    setResult(0);
    setOperator("");
  };

  //Cambiar de positivo a negativo y de negativo a positivo
  const handleNegative = () => {
    if (display > 0) {
      setDisplay(display * -1);
    } else if (display < 0) {
      setDisplay(display * -1);
    }
  };

  //Calcular el factorial
  const factorial = (number) => {
    if (number < 0) {
      return -1;
    } else if (number == 0) {
      return 1;
    } else {
      return number * factorial(number - 1);
    }
  };

  //Calcular resultado
  const calculateResult = () => {
    if (operator && display !== "") {
      const current = parseFloat(display);
      let newResult = result;

      switch (operator) {
        case "+":
          newResult += current;
          break;
        case "-":
          newResult -= current;
          break;
        case "/":
          newResult /= current;
          break;
        case "*":
          newResult *= current;
          break;

        case "x^x":
          newResult **= current;
          break;

        case "x^2":
          newResult **= 2;
          break;

        case "|x|":
          newResult = Math.abs(current);
          break;

        case "squareRoot":
          newResult = Math.sqrt(current);
          break;

        case "xRoot":
          newResult = Math.pow(current, 1 / newResult);
          break;

        case "sin":
          newResult = Math.sin(current);
          break;

        case "cos":
          newResult = Math.cos(current);
          break;

        case "tan":
          newResult = Math.tan(current);
          break;

        case "10^x":
          newResult = 10 ** current;
          break;

        case "log":
          newResult = Math.log10(current);
          break;

        case "ln":
          newResult = Math.log(current);
          break;

        case "n!":
          newResult = factorial(current);
          break;
        default:
          break;
      }
      setDisplay(newResult.toString());
      setResult(0);
      setOperator("");
    }
  };

  return (
    <main className="title">
      <h1>Calculadora</h1>
      {view === "standard" && (
        <div className="calculator">
          <div className="display">{display}</div>
          <div className="buttons">
            <button onClick={() => handleDeleteAll()}>CE</button>
            <button onClick={() => handleClear()}>C</button>
            <button onClick={() => handleDelete()}>
              <img src={removeIcon} alt="Icon-Delete" />
            </button>
            <button onClick={() => handleOperatorClick("/")}>÷</button>
            <button onClick={() => handleNumberClick("1")}>1</button>
            <button onClick={() => handleNumberClick("2")}>2</button>
            <button onClick={() => handleNumberClick("3")}>3</button>
            <button onClick={() => handleOperatorClick("-")}>-</button>
            <button onClick={() => handleNumberClick("4")}>4</button>
            <button onClick={() => handleNumberClick("5")}>5</button>
            <button onClick={() => handleNumberClick("6")}>6</button>
            <button onClick={() => handleOperatorClick("*")}>✖</button>
            <button onClick={() => handleNumberClick("7")}>7</button>
            <button onClick={() => handleNumberClick("8")}>8</button>
            <button onClick={() => handleNumberClick("9")}>9</button>
            <button onClick={() => handleOperatorClick("+")}>+</button>
            <button onClick={() => handleNegative()}>+/-</button>
            <button onClick={() => handleNumberClick("0")}>0</button>
            <button onClick={() => handleCommaClick()}>.</button>
            <button id="equal" onClick={() => calculateResult()}>
              =
            </button>
          </div>
          <div id="mode">
            <button
              onClick={() => setView("scientific")}
              className={view === "scientific" ? "active-view" : ""}
            >
              Modo Cientifica
            </button>
            <button
              onClick={() => setView("standard")}
              className={view === "standard" ? "active-view" : ""}
            >
              Modo Estándar
            </button>
          </div>
        </div>
      )}
      {view === "scientific" && (
        <div className="calculator-scientific">
          <div className="display">{display}</div>
          <div className="buttons-scientific">
            <button onClick={() => handleOperatorClick("x^x")}>
              <img src={x_x} alt="x a la x" />
            </button>
            <button onClick={() => handleOperatorClick("x^2")}>
              <img src={xSquare} alt="x cuadrada" />
            </button>
            <button onClick={() => handleOperatorClick("|x|")}>|x|</button>
            <button onClick={() => handleClear()}>C</button>
            <button onClick={() => handleDelete()}>
              <img src={removeIcon} alt="Icon-Delete" />
            </button>
            <button onClick={() => handleOperatorClick("squareRoot")}>
              <img src={squareRoot} alt="Raiz de x" />
            </button>
            <button onClick={() => handleOperatorClick("xRoot")}>
              <img src={xRoot} alt="Raiz de x" />
            </button>
            <button onClick={() => handleOperatorClick("sin")}>sin</button>
            <button onClick={() => handleOperatorClick("cos")}>cos</button>
            <button onClick={() => handleOperatorClick("tan")}>tan</button>
            <button onClick={() => handleNumberClick("" + Math.PI)}>π</button>
            <button>{"("}sin hacer</button>
            <button>{")"}sin hacer</button>
            <button onClick={() => handleOperatorClick("n!")}>n!</button>
            <button onClick={() => handleOperatorClick("/")}>÷</button>
            <button onClick={() => handleNumberClick(Math.E)}>e</button>
            <button onClick={() => handleNumberClick("7")}>7</button>
            <button onClick={() => handleNumberClick("8")}>8</button>
            <button onClick={() => handleNumberClick("9")}>9</button>
            <button onClick={() => handleOperatorClick("x")}>✖</button>
            <button onClick={() => handleOperatorClick("10^x")}>10^x</button>
            <button onClick={() => handleNumberClick("4")}>4</button>
            <button onClick={() => handleNumberClick("5")}>5</button>
            <button onClick={() => handleNumberClick("6")}>6</button>
            <button onClick={() => handleOperatorClick("-")}>-</button>
            <button onClick={() => handleOperatorClick("log")}>log</button>
            <button onClick={() => handleNumberClick("1")}>1</button>
            <button onClick={() => handleNumberClick("2")}>2</button>
            <button onClick={() => handleNumberClick("3")}>3</button>
            <button onClick={() => handleOperatorClick("+")}>+</button>
            <button onClick={() => handleOperatorClick("ln")}>ln</button>
            <button onClick={() => handleNegative()}>+/-</button>
            <button onClick={() => handleNumberClick("0")}>0</button>
            <button onClick={() => handleCommaClick()}>.</button>
            <button id="equal" onClick={() => calculateResult()}>
              =
            </button>
          </div>
          <div id="mode">
            <button
              onClick={() => setView("scientific")}
              className={view === "scientific" ? "active-view" : ""}
            >
              Modo Cientifica
            </button>
            <button
              onClick={() => setView("standard")}
              className={view === "standard" ? "active-view" : ""}
            >
              Modo Estándar
            </button>
          </div>
        </div>
      )}
      <h1>Referencias de iconos usados</h1>
      <div>
        <a target="_blank" href="https://icons8.com/icon/20980/clear-symbol">
          Clear Symbol
        </a>{" "}
        icon by{" "}
        <a target="_blank" href="https://icons8.com">
          Icons8
        </a>
      </div>
    </main>
  );
}

export default App;
