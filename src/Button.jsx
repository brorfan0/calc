import "./button.css"
function Button(props) {
    return (
            <button style={{backgroundColor: props.color, borderRadius: props.corners, display: "inline", width: props.wid}}
                    onClick={props.click}>
                    {props.text}</button>
    )
}

export default Button
