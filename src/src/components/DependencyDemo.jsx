import { useState, useEffect } from "react";

function DependencyDemo() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState('');

    //efekt reaguje tylko na zmiany count
    useEffect(() => {
        document.title = `${name} kliknął ${count} razy`;
        console.log("Zaktualizowano tytuł");
    }, [count]); // tylko gdy count się zmieni

    return (
        <div>
            <p>Kliknięto {count} razy</p>
            <button onClick={() => setCount(count + 1)}>Zwiększ licznik</button>
            <input value={name} onChange={e => setName(e.target.value)} placeholder="Wpisz imię" />
        </div>
    )
}

export default DependencyDemo;