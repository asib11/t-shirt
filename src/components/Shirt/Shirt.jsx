
const Shirt = ({shirt}) => {
    const {name, price, picture} = shirt;
    return (
        <div>
            <img src={picture} alt="" />
            <h4>{name}</h4>
            <p>price: {price}</p>
            <button>buy now</button>
        </div>
    );
};

export default Shirt;