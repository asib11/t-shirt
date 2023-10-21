import { useLoaderData } from "react-router-dom";

const Home = () => {
    const tShirt = useLoaderData()
    return (
        <div>
            <h2>data {tShirt.length}</h2>
        </div>
    );
};

export default Home;