import { useState } from "react";

function Counter() {
    //Deklaracja zmiennej stanu
    //count - aktualna wartośc stanu
    //setCount - funkcja do aktualizacji stanu
    const [count, setCount] = useState(0); //0 to wartość poczatkowa


    return (
        <div>
            <p>Kliknięto {count} razy</p>
            <button onClick={() => setCount(count + 1)}>
                Zwiększ licznik
            </button>
        </div>
    );
}

export default Counter;