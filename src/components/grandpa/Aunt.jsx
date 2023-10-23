import Cousin from "./Cousin";

const Aunt = () => {
    return (
        <div>
            <p>Aunt</p>
            <section className="flex">
            <Cousin>cousin-1</Cousin>
            <Cousin>cousin-2</Cousin>
            </section>
        </div>
    );
};

export default Aunt;