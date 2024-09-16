"use client";
import React, { useRef, useEffect, useState } from "react";
import { btns, BTN_ACTIONS } from "./btnConfig";
import "../../globals.css";
import "./calculator.css";

const Calculator = () => {
  const btnsRef = useRef(null);
  const expRef = useRef(null);
  const [calc, setCalc] = useState("");
  const [resultDisplayed, setResultDisplayed] = useState(false); // Track if a result was displayed

  // Adjust button height to make them square
  useEffect(() => {
    const btns = Array.from(btnsRef.current.querySelectorAll("button"));
    btns.forEach((e) => (e.style.height = e.offsetWidth + "px"));
  }, []);

  // Handle button click
  const btnClick = (item) => {
    const expDiv = expRef.current;

    // If result is displayed and an operator is clicked, append the operator without clearing the result
    if (resultDisplayed && item.action === BTN_ACTIONS.ADD) {
      addSpan(item.display);
      const operation = item.display !== "x" ? item.display : "*"; // Use "*" for multiplication
      setCalc((prevCalc) => prevCalc + operation); // Append the operator to the current result
      setResultDisplayed(false); // Now we are working on a new expression
      return;
    }

    // If result is displayed and a number is clicked, clear the display and start a new expression
    if (
      resultDisplayed &&
      item.action !== BTN_ACTIONS.CALC &&
      item.action !== BTN_ACTIONS.ADD
    ) {
      expDiv.innerHTML = ""; // Clear display
      setCalc(""); // Reset calculation state
      setResultDisplayed(false); // Reset the flag
    }

    // Theme toggle
    if (item.action === BTN_ACTIONS.THEME) {
      document.body.classList.toggle("dark");
    }

    // Add content to the calculator expression
    if (item.action === BTN_ACTIONS.ADD) {
      addSpan(item.display);
      const operation = item.display !== "x" ? item.display : "*"; // Use "*" for multiplication
      setCalc((prevCalc) => prevCalc + operation);
    }

    // Clear the expression
    if (item.action === BTN_ACTIONS.DELETE) {
      expDiv.parentNode.querySelector("div:last-child").innerHTML = "";
      expDiv.innerHTML = "";
      setCalc("");
    }

    // Calculate the result
    if (item.action === BTN_ACTIONS.CALC) {
      if (calc.trim().length <= 0) return; // Ensure there's something to calculate
      const cloneNode = expDiv.cloneNode(true);
      expDiv.parentNode.appendChild(cloneNode);
      const transform = `translateY(${
        -(expDiv.offsetHeight + 10) + "px"
      }) scale(0.4)`;
      try {
        let res = eval(calc); // Evaluate the expression
        setCalc(res.toString());
        setResultDisplayed(true); // Set flag to indicate result is displayed
        setTimeout(() => {
          cloneNode.style.transform = transform;
          expDiv.innerHTML = "";
          addSpan(Math.floor(res * 100000) / 100000); // Round to avoid floating point issues
        }, 200);
      } catch {
        setTimeout(() => {
          cloneNode.style.transform = transform;
          cloneNode.innerHTML = "ERROR"; // Display error
        }, 200);
      }
    }
  };

  // Add button content to the expression display
  const addSpan = (content) => {
    const expDiv = expRef.current;
    const span = document.createElement("span");
    span.innerHTML = content;
    span.style.opacity = "0";
    expDiv.appendChild(span);

    // Get the span's width for smooth transition
    const width = span.offsetWidth + "px";
    span.style.width = "0";
    expDiv.parentNode.querySelector("div:last-child").style.transform = `
      translateY(${-expDiv.offsetHeight + "px"}) scale(0.4)
    `;

    // Smooth transition effect
    setTimeout(() => {
      span.style.opacity = "1";
      span.style.width = width;
    }, 100);
  };

  return (
    <div className="calculator">
      <div className="calculator-result">
        <div ref={expRef} className="calculator-result-exp"></div>
        <div className="calculator-result-exp" ></div>
      </div>
      <div ref={btnsRef} className="calculator-btns">
        {btns.map((item, index) => (
          <button
            key={index}
            className={item.class}
            onClick={() => btnClick(item)} // Handle button click
          >
            {item.display} {/* Display the button content */}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Calculator;
