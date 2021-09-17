import React, { useState } from "react";
import TheTitle from "./TheTitle";
import BeautifullScreen from "./BeautifullScreen";
import AmazingNumberButton from "./AmazingNumberButton";
import MagnificientEqualButton from "./MagnificientEqualButton";
import ItSOverNineThousand from "./ItSOverNineThousand";
import "./Calculator.css";

/* eslint no-eval: 0 */

function Calculator() {
  const [calcul, setCalcul] = useState("");
  const [result, setResult] = useState("0");
  const [prevResult, setPrevResult] = useState("");
  const [memoryResult, setMemoryResult] = useState({});

  const Clear = () => {
    setCalcul("");
    setResult("");
    setPrevResult("");
  };

  const Calculate = (keyValue) => {
    setPrevResult("");
    setResult("");
    result !== "" ? setCalcul("") : setCalcul(calcul.concat(keyValue));
    setCalcul(calcul.concat(keyValue));
  };

  const Result = () => {
    setPrevResult(calcul);
    setCalcul("");
    setResult(eval(calcul));
  };

  const MemoryResults = () => {
    setMemoryResult(prevResult.concat(`= ${result}`));
  };

  return (
    <div className="calculator">
      <TheTitle title="Calculator 9000" />
      {memoryResult !=="" ? console.warn(memoryResult) : ""}
      <div className="calculator-input">
        {prevResult ? <div>{prevResult}</div> : <div>{calcul}</div>}

        <div className="result">
          {result > 9000 ? (
            <ItSOverNineThousand title="It's over 9000 !!!" />
          ) : (
            <BeautifullScreen resultat={result} />
          )}
        </div>
      </div>
      <div className="calculator-keypad">
        <div className="keys-function">
          <AmazingNumberButton keyValue={"c"} onClick={Clear} />
          <AmazingNumberButton keyValue={"Mem"} onClick={MemoryResults} />
        </div>
        <div className="keys-operators">
          <AmazingNumberButton keyValue="+" onClick={Calculate} />
          <AmazingNumberButton keyValue="-" onClick={Calculate} />
          <AmazingNumberButton keyValue="*" onClick={Calculate} />
          <AmazingNumberButton keyValue="/" onClick={Calculate} />
          <MagnificientEqualButton keyValue="=" onClick={Result} />
        </div>
        <div className="keys-numbers">
          <AmazingNumberButton keyValue={9} onClick={Calculate} />
          <AmazingNumberButton keyValue={8} onClick={Calculate} />
          <AmazingNumberButton keyValue={7} onClick={Calculate} />
          <AmazingNumberButton keyValue={6} onClick={Calculate} />
          <AmazingNumberButton keyValue={5} onClick={Calculate} />
          <AmazingNumberButton keyValue={4} onClick={Calculate} />
          <AmazingNumberButton keyValue={3} onClick={Calculate} />
          <AmazingNumberButton keyValue={2} onClick={Calculate} />
          <AmazingNumberButton keyValue={1} onClick={Calculate} />
          <AmazingNumberButton
            className="key-dot"
            keyValue={"."}
            onClick={Calculate}
          />
          <AmazingNumberButton
            className="key-zero"
            keyValue={0}
            onClick={Calculate}
          />
        </div>
      </div>
    </div>
  );
}

export default Calculator;
