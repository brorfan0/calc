import "./button.css"
import './App'
function Button(props) {
    return (
            <button className={props.clas}
                    onClick={props.click}>
                    {props.text}</button>
    )
}

export default Button
