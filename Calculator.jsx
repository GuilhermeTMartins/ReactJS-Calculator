import React, { useState } from 'react'
import './Calculator.css'
import Container from '@mui/material/Container';
import { Box } from "@mui/system";

export default function Calculator(){
    const[num, setNum] = useState(0);
    const[firstNum, setFirstNum] = useState(0);
    const[operator, setOperator] = useState();

    function inputNum(e){
        var input = e.target.value;
        if(num === 0){
            setNum(input);
        }else{
            setNum(num + input);
        }
        
    }

    function clearNum(e){
        setNum(0)
    }

    function porcentageNum(e){
        setNum(num / 100);
    }

    function ChangeSign(){
        if(num > 0){
            setNum(-num)
        }else{
            setNum(Math.abs(num))
        }
    }

    function operatorHandler(e){
        var operatorInput = e.target.value
        setOperator(operatorInput);
        setFirstNum(num);
        setNum(0);
    }

    function calculate(){
        const firstNumber = parseFloat(firstNum.replace(",","."))
        const number = parseFloat(num.replace(",","."))

        if(operator === "/"){
            setNum((firstNumber / number).toLocaleString("pt-BR"));
        }else if(operator === "X"){
            setNum((firstNumber * number).toLocaleString("pt-BR"));
        }else if(operator === "-"){
            setNum((firstNumber - number).toLocaleString("pt-BR"));
        }else if(operator === "+"){
            setNum((firstNumber + number).toLocaleString("pt-BR"));
        }
    }

    return(

      <div>
        <Box m={5}/>
        <Container maxWidth="xs">
            <div className="wrapper">
                <Box m={10}/>

                <h1 className="result">{num}</h1>

                <button className="red" onClick={clearNum}>AC</button>
                <button className="red" onClick={ChangeSign}>+/-</button>
                <button className="red" onClick={porcentageNum}>%</button>
                <button className="orange" onClick={operatorHandler} value={"/"}>/</button>

                <button className="white" onClick={inputNum} value={7}>7</button>
                <button className="white" onClick={inputNum} value={8}>8</button>
                <button className="white" onClick={inputNum} value={9}>9</button>
                <button className="orange" onClick={operatorHandler} value={"X"}>X</button>

                <button className="white" onClick={inputNum} value={4}>4</button>
                <button className="white" onClick={inputNum} value={5}>5</button>
                <button className="white" onClick={inputNum} value={6}>6</button>
                <button className="orange" onClick={operatorHandler} value={"-"}>-</button>

                <button className="white" onClick={inputNum} value={1}>1</button>
                <button className="white" onClick={inputNum} value={2}>2</button>
                <button className="white" onClick={inputNum} value={3}>3</button>
                <button className="orange" onClick={operatorHandler} value={"+"}>+</button>
                
                <button className="white zero" onClick={inputNum} value={0}>0</button>
                <button className="white" onClick={inputNum} value={","}>,</button>
                <button className="orange" onClick={calculate}>=</button>

             </div>
        </Container>
      </div>
    )
  }
