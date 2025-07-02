import React from "react";
import { useNavigate } from "react-router-dom";

const Cart = () => {
    const cartItems = [
        { id: 1, name: "A4 Paper", price: "£5.00" },
        { id: 2, name: "HP Toner", price: "£35.00" }
    ];

    const total = cartItems.reduce((sum, item) => sum + parseFloat(item.price.replace("£", "")), 0);
    const navigate = useNavigate();

    return (
        <div className="cart">
            <h2>Your Cart</h2>
            <ul>
                {cartItems.map((item) => (
                    <li key={item.id}>
                        {item.name} - {item.price}
                    </li>
                ))}
            </ul>
            <h3>Total: £{total.toFixed(2)}</h3>
            <button onClick={() => navigate("/checkout")}>Proceed to Checkout</button>
        </div>
    );
};

export default Cart;
