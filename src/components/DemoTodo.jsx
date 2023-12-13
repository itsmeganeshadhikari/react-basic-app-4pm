// import InputBasic from "./InputBasic"

import { useContext } from "react";
import { UserContext } from "../App";

const DemoTodo = (props) => {
    const lastName = useContext(UserContext);
    console.log(lastName);
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '40px' }}>
            <h1>{props.name}{lastName}</h1>
        </div>
    )
}
export default DemoTodo