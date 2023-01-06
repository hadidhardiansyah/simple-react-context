import React from "react";
import CounterOutput from "./components/CounterOutput";
import CounterControl from "./components/CounterControl";
import {CounterContext, CounterProvider} from "../../context/Counter";

const CounterControlContext = () => {
    const value = React.useContext(CounterContext);

    return (
        <>
            <CounterControl label="Increment" onClick={() => value.increment(10)}/>
            <CounterControl label="Decrement" onClick={() => value.decrement(10)}/>
        </>
    )
}

const CounterDisplay = () => {
    return (
        // 3. Memasang komponen provider
        <CounterProvider>
            {/*4. Memasang komponen konsumer agar komponen child dapat mengakses konteks. Langkah ini tidak perlu jika mengguanakan hook useContext*/}
            <CounterOutput/>
            <CounterControlContext/>
        </CounterProvider>
    )
}

export default CounterDisplay;