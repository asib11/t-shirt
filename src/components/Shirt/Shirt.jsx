import PropTypes from 'prop-types'
import './Shirt.css'

const Shirt = ({shirt}) => {
    const {name, price, picture} = shirt;
    return (
        <div className='display-shirt'>
            <img src={picture} alt="" />
            <h4>{name}</h4>
            <p>price: {price}</p>
            <button>buy now</button>
        </div>
    );
};

Shirt.propTypes ={
    shirt : PropTypes.object,
};

export default Shirt;