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
        setIfNum("not");
        setSign("neg");
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

        // setCalculations((prevState) => {return prevState+e})
    }

    function calculate(){
        if(equation === ""){
                    setEquation(eval(calculations));
                    setCalculations("");
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
        if(equation !== ""){
            setEquation(equation.slice(0, -1));
        }else{
            if(numbs.slice(numbs.length -1) === "."){
                setDot(false);
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
    }

    function pow(){
        if(equation !== ""){
            const power = equation + "*" + equation;
            setEquation(eval(power));
        }else{
            const power = numbs + "*" + numbs;
            const toPower = eval(power)
            setCalculations(calculations.slice(0, -numbs.length) + toPower)
            setNumbs(toPower)
        }
    }

    function minOrPlus(){
        if(numbs === "0" || equation === "0"){
            alert("Can't change signs on zero");
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
                        setCalculations(calculations.slice(0, -(numbs.length)) + numbs.slice(2, -1));
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
                <Button clas="buttonNorm" text="(" click={() => handleClick('(')}/>
                <Button clas="buttonNorm" text=")" click={() => handleClick(')')}/>
                <br/>
                <Button clas="buttonNorm" text="7" click={() => handleClick(7)}/>
                <Button clas="buttonNorm" text="8" click={() => handleClick(8)}/>
                <Button clas="buttonNorm" text="9" click={() => handleClick(9)}/>
                <Button clas="buttonNorm" text="-" click={() => handleSndClick('-')}/>
                <Button clas="buttonNorm" text="^2" click={() => pow()}/>
                <Button clas="buttonNorm" text=":)"/>
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
