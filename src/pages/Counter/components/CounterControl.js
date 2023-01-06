const CounterControl = (props) => {
    return (
        <button onClick={props.onClick}>
            {props.label}
        </button>
    )
}

export default CounterControl;