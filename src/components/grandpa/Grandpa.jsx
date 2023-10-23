import Aunt from './Aunt';
import Father from './Father';
import './Grandpa.css'
import Uncle from './Uncle';

const Grandpa = () => {
    return (
        <div className='grandpa'>
            <p>grandpa</p>
            <section className='flex'>
                <Father></Father>
                <Uncle></Uncle>
                <Aunt></Aunt>
            </section>
        </div>
    );
};

export default Grandpa;