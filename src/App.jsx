import {useEffect, useState} from 'react'
import './App.css'
import Button from "./Button";


function App() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState("");


    function add(){
        setCount(count+1);
    }

    function handleInput(e){
        setName(e.target.value)
        console.log(name);
    }

    function aaa(){
        alert(name);
    }

    return (
        <div className="App">
            <div className="cont">
                <div className="calc"><p>aaaa</p></div>
                <Button clas="buttonNorm" text="1" click={add}/>
                <Button clas="buttonNorm" text="2" click={add}/>
                <Button clas="buttonNorm" text="3" click={add}/>
                <Button clas="buttonNorm" text="/" click={add}/>
                <Button clas="buttonNorm" text="<-" click={add}/>
                <Button clas="buttonNorm" text="C" click={add}/>
                <br/>
                <Button clas="buttonNorm" text="4" click={add}/>
                <Button clas="buttonNorm" text="5" click={add}/>
                <Button clas="buttonNorm" text="6" click={add}/>
                <Button clas="buttonNorm" text="*" click={add}/>
                <Button clas="buttonNorm" text="(" click={add}/>
                <Button clas="buttonNorm" text=")" click={add}/>
                <br/>
                <Button clas="buttonNorm" text="7" click={add}/>
                <Button clas="buttonNorm" text="8" click={add}/>
                <Button clas="buttonNorm" text="9" click={add}/>
                <Button clas="buttonNorm" text="-" click={add}/>
                <Button clas="buttonNorm" text="^2" click={add}/>
                <Button clas="buttonNorm" text="sqrt" click={add}/>
                <br/>
                <Button clas="buttonNorm" text="0" click={add}/>
                <Button clas="buttonNorm" text="." click={add}/>
                <Button clas="buttonNorm" text="%" click={add}/>
                <Button clas="buttonNorm" text="+" click={add}/>
                <Button clas="buttonBig" text="=" click={add}/>
            </div>
        </div>
    )
}

export default App
