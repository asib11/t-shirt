import Cousin from "./Cousin";

const Uncle = () => {
    return (
        <div>
            <p>Uncle</p>
            <section className="flex">
            <Cousin>asib</Cousin>
            <Cousin>ahmed</Cousin>
            </section>
        </div>
    );
};

export default Uncle;