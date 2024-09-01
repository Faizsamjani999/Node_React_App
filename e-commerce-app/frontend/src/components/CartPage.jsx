import React, { useContext } from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import "./CartPage.css"

function CartPage() {
    const { cartItems, removeFromCart, clearCart } = useCart();
    const navigate = useNavigate(); // Hook to navigate to another page

    // Calculate total price
    const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    return (
        <div className="cart-page">
            <h1>Your Cart</h1>
            {cartItems.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                <div>
                    {cartItems.map(item => (
                        <div key={item._id} className="cart-item">
                            <img src={item.img} alt={item.pname} className="cart-item-image" />
                            <div className="cart-item-details">
                                <h2>{item.pname}</h2>
                                <p>Price: ${item.price}</p>
                                <p>Quantity: {item.quantity}</p>
                                <button onClick={() => removeFromCart(item._id)}>Remove</button>
                            </div>
                        </div>
                    ))}

                    {/* Display Total Price */}
                    <div className="cart-total">
                        <h2>Total: ${totalPrice.toFixed(2)}</h2>
                    </div>

                    <button onClick={clearCart}>Clear Cart</button>
                    <button onClick={() => navigate('/user/check-out')}>Proceed to Checkout</button>
                </div>
            )}
        </div>
    );
}

export default CartPage;