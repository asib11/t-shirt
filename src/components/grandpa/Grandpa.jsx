import { createContext, useState } from 'react';
import Aunt from './Aunt';
import Father from './Father';
import './Grandpa.css'
import Uncle from './Uncle';

export const RingContext = createContext('ring');
export const MoneyContext = createContext(0);

const Grandpa = () => {
    const [money, setMoney] = useState(0)
    return (
        <div className='grandpa'>
            <p>grandpa</p>
            <p><small>has money: {money}</small></p>
            <MoneyContext.Provider value={[money, setMoney]}>
                <RingContext.Provider value='diamond ring'>
                    <section className='flex'>
                        <Father></Father>
                        <Uncle></Uncle>
                        <Aunt></Aunt>
                    </section>
                </RingContext.Provider>
            </MoneyContext.Provider>
        </div>
    );
};

export default Grandpa;