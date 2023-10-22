import { useLoaderData } from "react-router-dom";
import Shirt from "../Shirt/Shirt";
import './Home.css'
import Cart from "../Cart/Cart";
import { useState } from "react";
import toast from 'react-hot-toast';

const Home = () => {
    const tShirts = useLoaderData();
    const [cart, setCart] = useState([]);
    console.log(tShirts)
    const addCarthandler = shirt => {
        const exists = cart.find(pd => pd._id === shirt._id);
        if (exists) {
            toast('You select one already');
        } else {
            const newCart = [...cart, shirt];
            setCart(newCart);
        }
    }

    const removeCartHandler = (id) => {
        console.log(id);
        const reminder = cart.filter(pd => pd._id !== id);
        setCart(reminder);
    }

    return (
        <div className="shop-container">
            <div className="shirt-container">
                {
                    tShirts.map(shirt => <Shirt key={shirt._id} shirt={shirt} addCarthandler={addCarthandler}></Shirt>)
                }
            </div>
            <div className="cart-container">
                <Cart
                    cart={cart}
                    removeCartHandler={removeCartHandler}
                ></Cart>
            </div>
        </div>
    );
};

export default Home;