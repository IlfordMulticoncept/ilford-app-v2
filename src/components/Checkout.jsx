import React, { useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

// ✅ Replace this with your actual Stripe public key
const stripePromise = loadStripe("YOUR_STRIPE_PUBLIC_KEY");

const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!stripe || !elements) return;

        const card = elements.getElement(CardElement);
        const result = await stripe.createToken(card);
        if (result.error) {
            alert(result.error.message);
        } else {
            alert("Payment token created: " + result.token.id);
            // Send token to backend for processing if needed
        }
    };

    return (
        <form onSubmit={handleSubmit} style={{ marginTop: "20px" }}>
            <CardElement />
            <button type="submit" disabled={!stripe} style={{ marginTop: "10px" }}>
                Pay with Card
            </button>
        </form>
    );
};

const Checkout = () => {
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://www.paypal.com/sdk/js?client-id=YOUR_PAYPAL_CLIENT_ID&currency=GBP";
        script.addEventListener("load", () => {
            if (window.paypal) {
                window.paypal.Buttons({
                    createOrder: (data, actions) => {
                        return actions.order.create({
                            purchase_units: [{ amount: { value: "40.00" } }]
                        });
                    },
                    onApprove: (data, actions) => {
                        return actions.order.capture().then((details) => {
                            alert("Transaction completed by " + details.payer.name.given_name);
                        });
                    }
                }).render("#paypal-button-container");
            }
        });
        document.body.appendChild(script);
    }, []);

    return (
        <div className="checkout">
            <h2>Checkout</h2>
            <p>Total: £40.00</p>
            <div id="paypal-button-container"></div>
            <Elements stripe={stripePromise}>
                <CheckoutForm />
            </Elements>
        </div>
    );
};

export default Checkout;
