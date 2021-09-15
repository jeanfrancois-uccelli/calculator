import React, { useState, useEffect } from "react";
import TheTitle from './TheTitle'
import BeautifullScreen from './BeautifullScreen'
import AmazingNumberButton from "./AmazingNumberButton";
import MagnificientEqualButton from './MagnificientEqualButton';
import "./Calculator.css";

/* eslint no-eval: 0 */

function Calculator() {
  const [prevValue, setPrevValue] = useState("0");
  const [nextValue, setNextValue] = useState("0");
  const [op, setOp] = useState(null);
  const [calcul, setCalcul] = useState("");
  const [result, setResult] = useState("");

  useEffect(() => {}, [op, nextValue, prevValue]);

  const CalculatorOperations = {
    "/": (firstValue, secondValue) => firstValue / secondValue,
    "*": (firstValue, secondValue) => firstValue * secondValue,
    "+": (firstValue, secondValue) => firstValue + secondValue,
    "-": (firstValue, secondValue) => firstValue - secondValue,
    "=": (firstValue, secondValue) => secondValue,
  };

 const Clear =() => {
     setCalcul("")
     setResult("")
 }

 const Calculate = (keyValue) => {
  setCalcul(calcul.concat(keyValue))
 }

 const Result = (keyValue) => {
    setCalcul(calcul.concat(keyValue))
    setResult(eval(calcul))
 }

  return (
    <div className="calculator">
        <TheTitle title="Calculator 9000"/>
       
      <div className="calculator-input">
          <div>{calcul}</div>
        <div className="result">
            <BeautifullScreen resultat={result} />
            </div>
      </div>
      <div className="calculator-keypad">
        <div className="keys-function">
          <AmazingNumberButton keyValue={"c"} onClick = {Clear} />
        </div>
        <div className="keys-operators">
          <AmazingNumberButton keyValue="+" onClick  = {Calculate}/>
          <AmazingNumberButton keyValue="-" onClick  = {Calculate}/>
          <AmazingNumberButton keyValue="*" onClick  = {Calculate}/>
          <AmazingNumberButton keyValue="/" onClick  = {Calculate}/>
          <MagnificientEqualButton keyValue="=" onClick  = {Result}/>
        </div>
        <div className="keys-numbers">
          <AmazingNumberButton keyValue={9} onClick = {Calculate}/>
          <AmazingNumberButton keyValue={8} onClick = {Calculate}/>
          <AmazingNumberButton keyValue={7} onClick = {Calculate}/>
          <AmazingNumberButton keyValue={6} onClick = {Calculate}/>
          <AmazingNumberButton keyValue={5} onClick = {Calculate}/>
          <AmazingNumberButton keyValue={4} onClick = {Calculate}/>
          <AmazingNumberButton keyValue={3} onClick = {Calculate}/>
          <AmazingNumberButton keyValue={2} onClick = {Calculate}/>
          <AmazingNumberButton keyValue={1} onClick = {Calculate}/>
          <AmazingNumberButton
            className="key-dot"
            keyValue={"."}
          />
          <AmazingNumberButton
            className="key-zero"
            keyValue={0}
          />
        </div>
      </div>
    </div>
  );
}

export default Calculator;
