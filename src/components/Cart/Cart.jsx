import './Cart.css'
import PropTypes from 'prop-types'

const Cart = ({cart,removeCartHandler}) => {
    return (
        <div className='cart' >
            <h2>cart: {cart.length} </h2>
            {
                cart.map(tShirt =><p className="cart-style"
                    key={tShirt._id}
                >{tShirt.name} <button 
                onClick={() => removeCartHandler(tShirt._id)}>X</button> </p>)
            }
        </div>
    );
};

Cart.propTypes ={
    cart: PropTypes.object,
    removeCartHandler: PropTypes.any,
}

export default Cart;