import React, {useContext} from "react";
import './cart-items-container.styles.css';
import CartItemCard from "../../cards/cart-item-card/CartItemCard";
import { CartContext } from '../../../App';
import StripeCheckout from "react-stripe-checkout";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
/* code to implement cart checkout, total amout and payment details */
const CartItemsContainer = () => {
    const { cartItems, totalAmount } = useContext(CartContext);
    const stripeKey = 'pk_test_51OQreySGRRWwGUlLComa3ZZPO3rsxGHlefaAdZWOVAENq55kCkArjiH29MBE8rsX9sLLhzlKUmRzkso8vr6U3gH300JRd8k4RC';
    const navigate = useNavigate();

    const onToken = (token) => {
        console.log(token);
        alert('Your Payment has been processed');
        navigate('/books');
    }

    return (
        <section className="cart-items-container">
            <div className="container">
                 
                {totalAmount === 0 ? (
                    <h2> your cart is empty😊
                        {/* <link to="/"className="logo">Book<span className="text-primary">Store</span></link> */}
                    </h2>
                    
                ):(
                    <React.Fragment>
                        <h2>Cart</h2>

                        {cartItems.map((item) => (
                            <CartItemCard key={item.id} bookData={item} 
                            />
                        ))}

                        <h2>Total Amount = &#8377;{totalAmount}</h2>

                        <StripeCheckout
                            name="Book Checkout"
                            description="Please fill in the details below"
                            amount={totalAmount * 100}
                            currency="INR"
                            stripeKey={stripeKey}
                            token={onToken}
                            billingAddress
                        >
                            <button className="button-primary">Proceed To Checkout</button>
                        </StripeCheckout>
                    </React.Fragment>
                )}
            </div>
        </section>
    )
}

export default CartItemsContainer;