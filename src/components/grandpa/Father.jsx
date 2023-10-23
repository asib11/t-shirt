import Brother from "./Brother";
import Myself from "./Myself";
import Sister from "./Sister";

const Father = () => {
    return (
        <div >
            <p>Father</p>
            <section className="flex">
                <Myself></Myself>
                <Brother></Brother>
                <Sister></Sister>
            </section>

        </div>
    );
};

export default Father;