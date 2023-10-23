import './Cart.css'
import PropTypes from 'prop-types'

const Cart = ({cart,removeCartHandler}) => {
    let message;
    if(cart.length === 0){
        message = <p>The cart is epmty</p>
    }else{
        message = <p>add {cart.length} products</p>
    }
    return (
        <div className='cart' >
            <h2>cart: {cart.length} </h2>
            {message}
            {
                cart.map(tShirt =><p className="cart-style"
                    key={tShirt._id}
                >{tShirt.name} <button 
                onClick={() => removeCartHandler(tShirt._id)}>X</button> </p>)
            }
            {
                cart.length >=5 && <p className={`common ${cart.length >5 ? 'green': 'more-green'}`}>you have goten some discount</p>
            }
        </div>
    );
};

Cart.propTypes ={
    cart: PropTypes.object,
    removeCartHandler: PropTypes.any,
}

export default Cart;

/*
* CONDITIONAL RENDARING
1. use id else to set a variable that will contain an element, components
2. ternary operator: condition ? 'for true': 'false'
3. logical && : (if the condition is true then the next thing will be displayed)
4. logical || : (if the condition is false then the next thing will be displayed)
 * /

/**
 * CONDITIONAL CSS
 * 1.use ternay
 * 2. ternary inside template string
*/