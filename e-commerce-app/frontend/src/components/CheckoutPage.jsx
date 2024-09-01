import React, { useState } from 'react';
import axios from 'axios';
import { useCart } from '../context/CartContext';
import { useUser } from '../context/UserContext';

const CheckoutPage = () => {
  const { cartItems, clearCart } = useCart();
  const { user } = useUser();
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [country, setCountry] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');

  const handleCheckout = async (e) => {
    e.preventDefault();

    if (cartItems.length === 0) {
      alert("Cart is empty");
      return;
    }

    const orderData = {
      cartItems: cartItems.map(item => ({
        productId: item._id,
        quantity: item.quantity,
        price: item.price
      })),
      shippingAddress: {
        address,
        city,
        postalCode,
        country
      },
      paymentMethod,
      amount: cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
    };

    try {
      const config = {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      };

      if (paymentMethod === 'Razorpay') {
        // Request to create a Razorpay order
        const { data } = await axios.post('http://localhost:9999/api/orders/razorpay', { amount: orderData.amount }, config);

        var options = {
          key: process.env.REACT_APP_RAZORPAY_KEY_ID, // Replace with environment variable
          amount: data.amount,
          currency: data.currency,
          name: 'Quick Shopping App',
          description: 'Order Payment',
          order_id: data.id,
          handler: async function (response) {
            // Handle successful payment here
            console.log('Payment Success:', response);

            // Create order in the backend after successful payment
            await axios.post('http://localhost:9999/api/orders/create', orderData, config);

            alert('Payment Success and Order Created!');
            clearCart();
          },
          prefill: {
            name: user.name,
            email: user.email,
            contact: '9574357690'
          },
          theme: {
            color: '#3399cc'
          }
        };

        var rzp = new window.Razorpay(options);
        rzp.open();
      } else {
        // Handle other payment methods
        await axios.post('http://localhost:9999/api/orders/create', orderData, config);
        clearCart();
        alert("Order placed successfully");
      }
    } catch (error) {
      console.error("Error placing order:", error);
      alert("Failed to place order");
    }
  };

  return (
    <div>
      <h1>Checkout</h1>
      <form onSubmit={handleCheckout}>
        <label>Address:</label>
        <input type="text" value={address} onChange={e => setAddress(e.target.value)} required />
        <br />
        <label>City:</label>
        <input type="text" value={city} onChange={e => setCity(e.target.value)} required />
        <br />
        <label>Postal Code:</label>
        <input type="text" value={postalCode} onChange={e => setPostalCode(e.target.value)} required />
        <br />
        <label>Country:</label>
        <input type="text" value={country} onChange={e => setCountry(e.target.value)} required />
        <br />
        <label>Payment Method:</label>
        <select value={paymentMethod} onChange={e => setPaymentMethod(e.target.value)} required>
          <option value="">Select Payment Method</option>
          <option value="Cash on Delivery">Cash on Delivery</option>
          <option value="Razorpay">Razorpay</option>
        </select>
        <br />
        <button type="submit">Place Order</button>
      </form>
    </div>
  );
};

export default CheckoutPage;
