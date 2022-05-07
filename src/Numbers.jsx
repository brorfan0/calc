import {useEffect, useState} from "react";

const [num, setNum] = useState(0);

function Numbers(props) {
    setNum(props.num);
    console.log(num);
}

export default Numbers
