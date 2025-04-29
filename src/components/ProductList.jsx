function ProductList() {
    const products = [
        { id: 1, name: "Laptop" },
        { id: 2, name: "Telefon" },
        { id: 3, name: "Tablet" }
    ];

    return (
        <ul>
            {products.map(products => (
                <li key={products.id}>{products.name}</li>
            ))}
        </ul>
    );
}

export default ProductList;