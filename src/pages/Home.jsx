import React from "react";

const products = [
    { id: 1, name: "A4 Paper (500 Sheets)", category: "Paper", price: "£5.00" },
    { id: 2, name: "Canon Photocopier", category: "Photocopiers", price: "£150.00" },
    { id: 3, name: "Creality Ender 3 (3D Printer)", category: "3D Printers", price: "£220.00" },
    { id: 4, name: "HP Toner Cartridge", category: "Toners", price: "£35.00" }
];

const Home = () => {
    return (
        <div className="home">
            <h1>Available Products</h1>
            <div className="product-grid">
                {products.map((product) => (
                    <div className="product-card" key={product.id}>
                        <h3>{product.name}</h3>
                        <p>Category: {product.category}</p>
                        <p>Price: {product.price}</p>
                        <button>Add to Cart</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;
