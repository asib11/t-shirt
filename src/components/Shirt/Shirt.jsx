import PropTypes from 'prop-types'
import './Shirt.css'

const Shirt = ({shirt,addCarthandler}) => {
    const {name, price, picture} = shirt;
    return (
        <div className='display-shirt'>
            <img src={picture} alt="" />
            <h4>{name}</h4>
            <p>price: {price}</p>
            <button onClick={()=>addCarthandler(shirt)}>buy now</button>
        </div>
    );
};

Shirt.propTypes ={
    shirt : PropTypes.object,
    addCarthandler: PropTypes.func,
};

export default Shirt;