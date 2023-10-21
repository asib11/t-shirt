import { useLoaderData } from "react-router-dom";
import Shirt from "../Shirt/Shirt";
import './Home.css'

const Home = () => {
    const tShirts = useLoaderData();
    console.log(tShirts)
    return (
        <div className="shop-container">
            <div className="shirt-container">
                {
                    tShirts.map(shirt => <Shirt key={shirt._id} shirt ={shirt}></Shirt>)
                }
            </div>
            <div className="cart-container">
                <h2>cart </h2>
            </div>
        </div>
    );
};

export default Home;