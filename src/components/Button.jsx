function Button() {
    const handleClick = () => {
        console.log('Przycisk został kliknięty!');
        alert('Przycisk został naciśnięty');
    };

    return (
        <button onClick={handleClick}>Kliknij mnie</button>
    )
}

export default Button;