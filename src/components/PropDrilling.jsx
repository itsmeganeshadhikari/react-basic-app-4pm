import A from "./A";
let data = 1;
const PropDrilling = () => {
    return (<h1>
        <A {...data} />
    </h1>)
}

export default PropDrilling;