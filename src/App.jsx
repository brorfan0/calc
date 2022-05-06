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
            <form>
                <input type="text" className="calc"></input>
            </form><br/>
            <Button color="pink" text="1" corners="5px" wid="5vw" click={add}/>
            <Button color="pink" text="2" corners="5px" wid="5vw" click={add}/>
            <Button color="pink" text="3" corners="5px" wid="5vw" click={add}/>
            <Button color="pink" text="/" corners="5px" wid="5vw" click={add}/>
            <Button color="pink" text="<-" corners="5px" wid="5vw" click={add}/>
            <Button color="pink" text="C" corners="5px" wid="5vw" click={add}/>
            <br/>
            <Button color="pink" text="4" corners="5px" wid="5vw" click={add}/>
            <Button color="pink" text="5" corners="5px" wid="5vw" click={add}/>
            <Button color="pink" text="6" corners="5px" wid="5vw" click={add}/>
            <Button color="pink" text="*" corners="5px" wid="5vw" click={add}/>
            <Button color="pink" text="(" corners="5px" wid="5vw" click={add}/>
            <Button color="pink" text=")" corners="5px" wid="5vw" click={add}/>
            <br/>
            <Button color="pink" text="7" corners="5px" wid="5vw" click={add}/>
            <Button color="pink" text="8" corners="5px" wid="5vw" click={add}/>
            <Button color="pink" text="9" corners="5px" wid="5vw" click={add}/>
            <Button color="pink" text="-" corners="5px" wid="5vw" click={add}/>
            <Button color="pink" text="^2" corners="5px" wid="5vw" click={add}/>
            <Button color="pink" text="sqrt" corners="5px" wid="5vw" click={add}/>
            <br/>
            <Button color="pink" text="0" corners="5px" wid="5vw" click={add}/>
            <Button color="pink" text="." corners="5px" wid="5vw" click={add}/>
            <Button color="pink" text="%" corners="5px" wid="5vw" click={add}/>
            <Button color="pink" text="+" corners="5px" wid="5vw" click={add}/>
            <Button color="pink" text="=" corners="5px" wid="10vw" click={add}/>
        </div>
    )
}

export default App
