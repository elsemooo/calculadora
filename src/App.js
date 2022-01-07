import React, { useState } from 'react';
import styled from 'styled-components'
import 'normalize.css'
// *******************
// styled components
// *******************
const Container = styled.div`
    font-family: 'Spline Sans', sans-serif;
    background: rgb(34,193,195);
    background: linear-gradient(20deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%);
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    align-items:center;
    justify-content: center;
`
const Container_grid = styled.div`
    width: 30vw;
    @media (max-width: 900px) {
        width: 40vw;
    }
    @media (max-width: 550px) {
        width: 60vw;
    }
    @media (max-width: 400px){
        width: 80vw;
    }
    min-height: 70vh;
    height: 70%;
    padding: 1vmin;
    border-radius: 3vmin;
    box-shadow: 6px 7px 33px 2px rgba(0,0,0,0.51);
    -webkit-box-shadow: 6px 7px 33px 2px rgba(0,0,0,0.51);
    -moz-box-shadow: 6px 7px 33px 2px rgba(0,0,0,0.51);
    background-color: #000b24;
    word-wrap: break-word;
`
const Grid = styled.div`
    height: 100%;
    width: 100%;
    display: grid;
    grid-gap: 1vmin;
    grid-template-rows: repeat(7, 1fr);
    grid-template-columns: repeat(4,1fr);
`
const Pantalla = styled.div`
    grid-column: 1/-1;
    grid-row: 1/3;
    word-break: break-all;
    background-color: #d6d6d6;
    border-radius: 1vmin;
`
const opacidad = 0.8;
const Boton = styled.button`
    background-color: rgba(255,255,255,${opacidad});
    border-style: none;
    outline: none;
    border-radius: 2vmin;
    font-size: 5vmin;
`

const Boton_two_span = styled.button`
    background-color: rgba(255,255,255,${opacidad});
    border-style: none;
    outline: none;
    border-radius: 2vmin;
    font-size: 5vmin;
    grid-column: span 2;
`
const Boton_three_span = styled.button`
    background-color: rgba(255,255,255,${opacidad});
    border-style: none;
    outline: none;
    border-radius: 2vmin;
    font-size: 5vmin;
    grid-column: span 3;
`
const Valor_one = styled.p`
    font-size: 6vmin;
    margin: 1vmin;
    text-align: end;
`
const Valor_two = styled.p`
    font-size: 7vmin;
    margin: 1vmin;
    text-align: end;

`

const App = () => {
// *********
// Hooks
// *********
const [number, setNumber] = useState("")
const [number_two, setNumber_two] = useState("")
const [currentOperation, setCurrentOperation] = useState("")
const [result, setResult] = useState(0)
// *******************
// funciones del hook
// *******************
const typeOperation = (val) =>{
    setCurrentOperation(val)
}
const typeNumber = (n)=>{
    if (currentOperation === "") {
        setNumber(number.concat(n))
    }else{
        setNumber_two(number_two.concat(n))
    }
}
const allClear = () => {
    setNumber("")
    setNumber_two("")
    setResult("")
    setCurrentOperation("")
}
const operation = () =>{
    switch (currentOperation) {
        case "+":
            setResult(Number(number) + Number(number_two))
            break;
        case "-":
            setResult(Number(number) - Number(number_two))
            break;
        case "*":
            setResult(Number(number) * Number(number_two))
            break;
        case "/":
            setResult(Number(number) / Number(number_two))
            break;
        default:
            break;
    }
}
const del = (val) =>{
    let delet = val.substring(0, val.length - 1);
    console.log(delet)
}
const val_one = number + currentOperation + number_two
const val_one_s = currentOperation ? val_one: number
    return (
        <Container>
            <Container_grid>
                <Grid>
                    <Pantalla>
                        <Valor_one>
                            {val_one_s}
                        </Valor_one>
                        <Valor_two>{result}</Valor_two>
                    </Pantalla>
                    <Boton_three_span onClick={allClear}>AC</Boton_three_span>
                    <Boton onClick={()=> typeOperation("/")}>/</Boton>
                    <Boton onClick={()=>typeNumber("7")}>7</Boton>
                    <Boton onClick={()=>typeNumber("8")}>8</Boton>
                    <Boton onClick={()=>typeNumber("9")}>9</Boton>
                    <Boton onClick={()=> typeOperation("*")}>*</Boton>
                    <Boton onClick={()=>typeNumber("4")}>4</Boton>
                    <Boton onClick={()=>typeNumber("5")}>5</Boton>
                    <Boton onClick={()=>typeNumber("6")}>6</Boton>
                    <Boton onClick={()=> typeOperation("+")}>+</Boton>
                    <Boton onClick={()=>typeNumber("1")}>1</Boton>
                    <Boton onClick={()=>typeNumber("2")}>2</Boton>
                    <Boton onClick={()=>typeNumber("3")}>3</Boton>
                    <Boton onClick={()=> typeOperation("-")}>-</Boton>
                    <Boton onClick={()=>typeNumber(".")}>.</Boton>
                    <Boton onClick={()=>typeNumber("0")}>0</Boton>
                    <Boton_two_span onClick={operation}>=</Boton_two_span>
                </Grid>
            </Container_grid>
        </Container>
    );
}


export default App;

