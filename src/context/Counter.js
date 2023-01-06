import React from "react";

// 1. Menyiapkan konteks / tempat penampungan state
export const CounterContext = React.createContext(null);

// 2. Menyiapkan komponen sebagai jembatan untuk komponen lain agar dapat menggunakan konteks
export const CounterProvider = ({children}) => {
    const [counter, setCounter] = React.useState(0);

    const increment = (value) => setCounter(counter + value);
    const decrement = (value) => setCounter(counter - value);

    // const value = React.useMemo(() => ({
    //     counter, increment, decrement
    // }), [counter]

    return (
        <CounterContext.Provider value={{counter, increment, decrement}}>
            {children}
        </CounterContext.Provider>
    )
}