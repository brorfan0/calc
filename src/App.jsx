import {useEffect, useState} from 'react'
import './App.css'
import Button from "./Button";


function App() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState("");
    const [calculations, setCalculations] = useState("");
    const [equation, setEquation] = useState("");
    // const [numbs, setNumbs] = useState("");
    const [ifNum, setIfNum] = useState("");
    let numbs = "1";

    useEffect(()=>{
        if(ifNum === "not"){
            numbs = "";
            console.log("a");
        }else{
            const added = calculations.slice(-1)
            numbs += added;
            console.log("b");
        }
        console.log(numbs)
    }, [ifNum]);

    function handleSndClick(e){
        setIfNum("not");

        if(equation === "" && calculations === ""){
            alert("Can't do this");
        }else if(equation !== ""){
            setCalculations(equation+e);
            setEquation("")
        }else{
            setCalculations(calculations+e);
        }
    }

    function handleClick(e){
        setIfNum(ifNum+"num");

        if(equation === "") {
            setCalculations(calculations+e);
        }
        else{
            setCalculations(calculations+e);
            setEquation("");
        }
        // setCalculations((prevState) => {return prevState+e})
    }

    function calculate(){
        if(equation === ""){
            setEquation(eval(calculations));
            setCalculations("");
        }
    }

    function output(){
        if(equation === ""){
            return(
                <p>{calculations}</p>
            )
        }else{
            return(
                <p>{equation}</p>
            )
        }
    }

    function del(){
        setCalculations(calculations.slice(0, -1));
        setNumbs(numbs.slice(0, -1));
    }

    function clear(){
        setCalculations("");
        setNumbs("");
    }

    function pow(){
    }

    return (
        <div className="App">
            <div className="cont">
                <div className="calc">{output()}</div>
                <Button clas="buttonNorm" text="1" click={() => handleClick(1)}/>
                <Button clas="buttonNorm" text="2" click={() => handleClick(2)}/>
                <Button clas="buttonNorm" text="3" click={() => handleClick(3)}/>
                <Button clas="buttonNorm" text="/" click={() => handleSndClick('/')}/>
                <Button clas="buttonNorm" text="<-" click={() => del()}/>
                <Button clas="buttonNorm" text="C" click={() => clear()}/>
                <br/>
                <Button clas="buttonNorm" text="4" click={() => handleClick(4)}/>
                <Button clas="buttonNorm" text="5" click={() => handleClick(5)}/>
                <Button clas="buttonNorm" text="6" click={() => handleClick(6)}/>
                <Button clas="buttonNorm" text="*" click={() => handleSndClick('*')}/>
                <Button clas="buttonNorm" text="(" click={() => handleClick('(')}/>
                <Button clas="buttonNorm" text=")" click={() => handleClick(')')}/>
                <br/>
                <Button clas="buttonNorm" text="7" click={() => handleClick(7)}/>
                <Button clas="buttonNorm" text="8" click={() => handleClick(8)}/>
                <Button clas="buttonNorm" text="9" click={() => handleClick(9)}/>
                <Button clas="buttonNorm" text="-" click={() => handleSndClick('-')}/>
                <Button clas="buttonNorm" text="^2" click={() => pow()}/>
                <Button clas="buttonNorm" text="sqrt" click={() => handleSndClick('sqrt')}/>
                <br/>
                <Button clas="buttonNorm" text="0" click={() => handleClick(0)}/>
                <Button clas="buttonNorm" text="." click={() => handleClick('.')}/>
                <Button clas="buttonNorm" text="%" click={() => handleSndClick('%')}/>
                <Button clas="buttonNorm" text="+" click={() => handleSndClick('+')}/>
                <Button clas="buttonBig" text="=" click={() => calculate()}/>
            </div>
        </div>
    )
}

export default App
