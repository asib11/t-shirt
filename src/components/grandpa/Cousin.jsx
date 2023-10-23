import PropTypes from 'prop-types'

const Cousin = ({children}) => {
    return (
        <div>
            <p>{children}</p>
        </div>
    );
};

Cousin.propTypes ={
    children: PropTypes.object,
}
export default Cousin;