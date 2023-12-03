/**
 * Props = properties
 * Pass by object or simple way
 * 
 */


const PropsDemo = (props) => {
    const { id, name, phoneNumber } = props.data
    return (
        <div>Display {`${id} and ${name} ${phoneNumber}`}</div>
    )
}

export default PropsDemo