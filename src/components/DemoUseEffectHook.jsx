import { Button } from "@mui/material";
import { useEffect } from "react"

const DemoUseEffectHook = () => {
    useEffect(() => {
        //api call 
        console.log('Hello to useEffect');
        alert("Hello");
        //run every render on component
    }, [])

    const displayData = () => {
        alert("Hello")
    }

    // console.log("Hello form outside of useEffect");
    return (
        <>
            <h1>Hello</h1>
            <Button onClick={displayData}>onClick</Button>
            {/* {console.log("Hello form outside of useEffect")} */}
        </>
    )
}

export default DemoUseEffectHook