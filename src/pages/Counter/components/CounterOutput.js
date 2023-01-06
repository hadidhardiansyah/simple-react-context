import React from "react";
import {CounterContext} from "../../../context/Counter";


const CounterOutput = () => {
    const value = React.useContext(CounterContext);
    return (
        <h3>Current Counter: {value.counter}</h3>
    )
}

export default CounterOutput;