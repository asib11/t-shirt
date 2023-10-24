import { useContext } from "react";
import Cousin from "./Cousin";
import { MoneyContext } from "./Grandpa";

const Uncle = () => {
    const [money, setMoney] = useContext(MoneyContext)
    return (
        <div>
            <p>Uncle</p>
            <button onClick={()=> setMoney(money+1000)}>1000 tk</button>
            <section className="flex">
            <Cousin>asib</Cousin>
            <Cousin>ahmed</Cousin>
            </section>
        </div>
    );
};

export default Uncle;