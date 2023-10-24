import { useContext } from "react";
import { RingContext } from "./Grandpa";

const Special = () => {
    const ring = useContext(RingContext);
    return (
        <div>
            <p>Special</p>
            <p><small>{ring}</small></p>
        </div>
    );
};

export default Special;