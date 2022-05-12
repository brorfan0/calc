import {useEffect, useState} from 'react'
import './App.css'
import Button from "./Button";


function App() {
    const [calculations, setCalculations] = useState("");
    const [equation, setEquation] = useState("");
    const [numbs, setNumbs] = useState("");
    const [ifNum, setIfNum] = useState("");
    const [sign, setSign] = useState("neg");
    const [empty, setEmpty] = useState(true);
    const [dot, setDot] = useState(false);
    const [brackets, setBrackets] = useState(0);
    const [insideBrackets, setInsideBrackets] = useState("");
    const [ifDelete, setIfDelete] = useState(false);
    const nonNumbers = ["+", "-", "/", "*"];

    //TODO figure out a different way to store stuff bc it's not possible to properly use the 'power of' function after deleting further than the numbs var (probably make an array (or change numbs into an array) to store different numbs between + etc that clears after deletion. too lazy to do it now)
    //TODO FIGURE OUT WHAT TO USE INSTEAD OF IFS BC IT LOOKS RIDICULOUS LIKE THAT
    //TODO add a limit on the size of characters visible in the output, find out how to run functions on keyboard buttons press
    //TODO put alerts/errors somewhere under output instead of as an alert
    //TODO make it prettier:(
    //TODO make it possible to nest brackets gcfhchfchfchhxhreh


    useEffect(()=>{
        if(ifDelete === true){
            setIfDelete(false);
        }else{
            if(brackets === 0){
                setInsideBrackets("");
            }else{
                setInsideBrackets(insideBrackets + calculations.slice(calculations.length - 1));
            }
        }
        console.log(insideBrackets)
    },[calculations]);

    useEffect(()=>{
        if(equation > 0){
            setSign("neg");
        }else if(equation < 0){
            setSign("pos");
        }
        setEquation(equation.toString());
    }, [equation]);

    useEffect(()=>{
        switch(ifNum){
            case "not":
                setNumbs("");
                setEmpty(true);
                setDot(false);
                break;
            default:
                const added = calculations.slice(-1);
                if(numbs === "" && dot === true){
                    setNumbs("0" + added);
                }else{
                    setNumbs(numbs + added);
                }
        }
    }, [ifNum]);

    function handleSndClick(e){
        switch(ifNum){
            case "not":
                equation === "" ? alert("can't do this") : (setCalculations(equation+e), setEquation(""));
                break;
            default:
                setIfNum("not");
                setSign("neg");
                setCalculations(calculations+e);
        }
        if(brackets === 2){
            setBrackets(0);
        }
    }

    function handleClick(e){
        if(calculations.slice(calculations.length-1) === ")"){
            alert("Can't use a number straight after the closing bracket");
        }else{
            switch(e){
                case ".":
                    if(dot === false){
                        empty ? setCalculations(calculations + "0" + e) : setCalculations(calculations + e);
                        setDot(true);
                        setIfNum(ifNum+"num");
                        setEmpty(false);
                    }else{
                        alert("can't use dot twice in the same number");
                    }
                    break;
                default:
                    setIfNum(ifNum+"num");
                    setEmpty(false);

                    if(equation === "") {
                        setCalculations(calculations+e);
                    }
                    else{
                        setCalculations(calculations+e);
                        setEquation("");
                    }
                    break;
            }
        }
        if(brackets === 2){
            setBrackets(0);
        }
        // setCalculations((prevState) => {return prevState+e})
    }

    function calculate(){
        if(equation === ""){
                    setEquation(eval(calculations));
                    setCalculations("");
                    setBrackets(0);
                }
        setIfNum("not");
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
        setIfDelete(true);
        if(equation !== ""){
            setEquation(equation.slice(0, -1));
        }else{
            if(numbs.slice(numbs.length -1) === "."){
                setDot(false);
            }
            if(calculations.slice(calculations.length -1) === "("){
                setBrackets(0);
            }
            if(nonNumbers.includes(calculations.charAt(calculations.length-2)) === true){
                setEmpty(true);
            }
            if(calculations.slice(calculations.length -1) === ")"){
                setBrackets(1);
            }
            if(brackets === 1){
                setInsideBrackets(insideBrackets.slice(0, -1));
            }
            setCalculations(calculations.slice(0, -1));
            setNumbs(numbs.slice(0, -1));
        }
    }

    function clear(){
        setCalculations("");
        setDot(false);
        setEmpty(true);
        setNumbs("");
        setEquation("");
        setSign("neg");
        setBrackets(0);
        setInsideBrackets("");
    }

    function addBrackets(){
        switch(brackets){
            case 0:
                empty ? (setCalculations(calculations + "("), setBrackets(1)) : alert("Can't do this");
                break;
            case 1:
                setCalculations(calculations + ")");
                setBrackets(2);
                break;
        }
    }

    function pow(){
        if(equation !== ""){
            const power = equation + "*" + equation;
            setEquation(eval(power));
        }else{
            console.log(insideBrackets)
            const power = brackets === 2 ? (eval(insideBrackets) + "*" + eval(insideBrackets)) : (numbs + "*" + numbs);
            const toPower = eval(power);
            brackets === 2 ? (setCalculations(calculations.slice(0, -insideBrackets.length) + toPower), setBrackets(0))
                : setCalculations(calculations.slice(0, -numbs.length) + toPower);
            setNumbs(toPower.toString());
        }
    }

    function minOrPlus(){
        if(numbs === "0" || equation === "0" || nonNumbers.includes(calculations.slice(calculations.length-1)) === true ||
            calculations.slice(calculations.length-1) === "(" || calculations.slice(calculations.length-1) === ")"){
            alert("Can only change signs on a number (different than zero)");
        }else{
            if (numbs === "" && equation !== "") {
                    switch(sign){
                        case "neg":
                            setEquation("-" + equation);
                            setSign("pos");
                            break;
                        case "pos":
                            setEquation(equation.slice(1));
                            setSign("neg");
                            break;
                    }
            }else{
                switch(sign){
                    case "neg":
                        setCalculations(calculations.slice(0, -numbs.length) + "(-" + numbs + ")");
                        setNumbs("(-" + numbs + ")");
                        setSign("pos");
                        break;
                    case "pos":
                        setCalculations(calculations.slice(0, -numbs.length) + numbs.slice(2, -1));
                        setNumbs(numbs.slice(2, -1));
                        setSign("neg");
                        break;
                }

            }
        }
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
                <Button clas="buttonNorm" text="(" click={() => addBrackets()}/>
                <Button clas="buttonNorm" text=")" click={() => addBrackets()}/>
                <br/>
                <Button clas="buttonNorm" text="7" click={() => handleClick(7)}/>
                <Button clas="buttonNorm" text="8" click={() => handleClick(8)}/>
                <Button clas="buttonNorm" text="9" click={() => handleClick(9)}/>
                <Button clas="buttonNorm" text="-" click={() => handleSndClick('-')}/>
                <Button clas="buttonNorm" text="^2" click={() => pow()}/>
                <Button clas="buttonNorm" text=":)" click={() => alert(":)")}/>
                <br/>
                <Button clas="buttonNorm" text="0" click={() => handleClick(0)}/>
                <Button clas="buttonNorm" text="." click={() => handleClick('.')}/>
                <Button clas="buttonNorm" text="+/-" click={() => minOrPlus()}/>
                <Button clas="buttonNorm" text="+" click={() => handleSndClick('+')}/>
                <Button clas="buttonBig" text="=" click={() => calculate()}/>
            </div>
        </div>
    )
}

export default App
