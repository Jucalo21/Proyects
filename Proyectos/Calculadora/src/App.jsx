import { useState } from "react";
import removeIcon from "./images/remove_icon.png";

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

  const handleNegative = () => {
    if (display > 0) {
      setDisplay(display * -1);
    } else if (display < 0) {
      setDisplay(display * -1);
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
            <button onClick={() => handleOperatorClick("*")}>x</button>
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
            <button onClick={() => handleOperatorClick("*")}>x</button>
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
    </main>
  );
}

export default App;
