import React from 'react';

const Cart = (props) => {
    const cart = props.cart;

    const formatNumber = num => {
        const pricision = num.toFixed(2);
        return Number(pricision);
    }

    const itemTotal = cart.reduce((total, pd) => total + pd.price, 0);

    let shippingCost = 0
    if (itemTotal > 100) {
        shippingCost = 0;
    }
    else if (itemTotal > 50) {
        shippingCost = 5.99
    }
    else if (itemTotal > 0) {
        shippingCost = 12;
    }

    const tax = itemTotal / 10;

    return (
        <div>
            <h3>Shopping Cart</h3>
            <p>Number of order: {cart.length}</p>
            <p>Products Price: {formatNumber(itemTotal)}</p>
            <p>Shipping Cost: {shippingCost}</p>
            <p>VAT + Tax: {formatNumber(tax)}</p>
            <p>Total Price: {formatNumber(itemTotal + shippingCost + tax)}</p>
        </div>
    );
};

export default Cart;