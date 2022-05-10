import {useEffect, useState} from 'react'
import './App.css'
import Button from "./Button";


function App() {
    const [calculations, setCalculations] = useState("");
    const [equation, setEquation] = useState("");
    const [numbs, setNumbs] = useState("");
    const [ifNum, setIfNum] = useState("");
    const [sqrd, setSqrd] = useState("")
    const [ifSqr, setIfSqr] = useState(0);
    const [sign, setSign] = useState("neg");

    useEffect(()=>{
        if(ifNum === "not"){
            setNumbs("")
        }else{
            const added = calculations.slice(-1)
            setNumbs(numbs+added)
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
            if(ifSqr === 1){
                const sqrLength = sqrd.length + 1;
                const sqrdNumb = Number(sqrd);
                const mathSqrd = Math.sqrt(sqrdNumb);
                const stringSqrd = mathSqrd.toString()
                if(sqrLength === numbs.length){
                    setCalculations(calculations.slice(0, -sqrLength) + stringSqrd + e);
                }else{
                    setCalculations(calculations.slice(0, -sqrLength) + "*" + stringSqrd + e);
                }
                console.log(sqrLength + ", " + numbs.length)
                setIfSqr(0)
            }else{
                setCalculations(calculations+e);
            }
        }
    }

    function handleClick(e){
        setIfNum(ifNum+"num");

        if(ifSqr === 1){
            setSqrd(sqrd+e);
        }

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
            if(ifSqr === 1){
                const sqrLength = sqrd.length + 1;
                const sqrdNumb = Number(sqrd);
                const mathSqrd = Math.sqrt(sqrdNumb);
                const stringSqrd = mathSqrd.toString()
                if(calculations.slice(0, -sqrLength)===""){
                    setEquation(eval(stringSqrd))
                }else{
                    if(calculations.length !== numbs.length){
                        if(numbs.length === sqrLength){
                            setEquation(eval(calculations.slice(0, -sqrLength) + stringSqrd));
                        }else{
                            setEquation(eval(calculations.slice(0, -sqrLength) + "*" + stringSqrd));
                            console.log(calculations.slice(0, -sqrLength))
                        }
                    }else{
                        setEquation(eval(calculations.slice(0, -sqrLength) + "*" + stringSqrd));
                    }
                }
                setCalculations("");
                setIfSqr(0)
                setSqrd("")
            }
            else{
                setEquation(eval(calculations));
                setCalculations("");
            }

            setNumbs("")
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
        setSqrd(sqrd.slice(0, -1));
        if(sqrd === ""){
            setIfSqr(0);
        }
    }

    function clear(){
        setCalculations("");
        setNumbs("");
        setEquation("")
        setSqrd("")
    }

    function pow(){
        const numbLength = numbs.length
        const power = numbs + "*" + numbs;
        const toPower = eval(power)
        setCalculations(calculations.slice(0, -numbLength) + toPower)
        setNumbs(toPower)
    }

    function sqrt(){
        if(equation !== ""){
            setIfNum("num");
            setIfSqr(1);
            setCalculations(equation+"s");
            setEquation("");
        }else{
            setIfNum("num");
            setIfSqr(1);
            setCalculations(calculations+"s");
        }
    }

    function minOrPlus(){
        if(numbs === ""){
            if(equation !== ""){
                if(sign === "neg"){
                    setEquation("-" + equation);
                    setSign("pos");
                }else{
                    setEquation(equation.slice(1));
                    setSign("neg");
                }
            }else{
                alert("You can only change signs on a number");
            }
        }else{
            if(sign === "neg"){
                console.log(calculations + ", " + numbs);
                setCalculations(calculations.slice(0, -numbs.length) + "-" + numbs);
                setNumbs("-" + numbs);
                setSign("pos");
            }else{
                setCalculations(calculations.slice(0, -(numbs.length+1)) + numbs.slice(1));
                setNumbs(numbs.slice(1))
                setSign("neg");
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
                <Button clas="buttonNorm" text="sqrt" click={() => sqrt()}/>
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
