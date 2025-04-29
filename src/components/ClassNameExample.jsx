function ClassNameExample({ isActive, isDisabled }) {
    const btnClass = `btn ${isActive ? 'btn-active' : ''} ${isDisabled ? 'btn-disabled' : ''}`;

    return (
        <button className={btnClass}>
            Przycisk
        </button>
    );
}

export default ClassNameExample;