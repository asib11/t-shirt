import { useContext } from "react";
import Cousin from "./Cousin";
import { MoneyContext } from "./Grandpa";

const Aunt = () => {
    const [money] = useContext(MoneyContext);
    return (
        <div>
            <p>Aunt</p>
            <p><small>grandpa money: {money}</small></p>
            <section className="flex">
                <Cousin>cousin-1</Cousin>
                <Cousin>cousin-2</Cousin>
            </section>
        </div>
    );
};

export default Aunt;