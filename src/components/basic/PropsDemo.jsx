/**
 * Props = properties
 * Pass by object or simple way
 * 
 */


const PropsDemo = (props) => {
    console.log(props);
    return (
        <div>
            {props.data.map((e) => {
                return (<div key={e.id}>
                    <h1>{`id=${e.id} and name=${e.name}`}</h1>
                    <img src={e.img} alt={e.name} />
                </div>)
            })}
        </div>
    )
}

export default PropsDemo