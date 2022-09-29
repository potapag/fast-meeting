import React from 'react';
import PropTypes from 'prop-types';

const BookMark = ({ status, ...rest }) => {
    return (
        <button {...rest}>
            {/* <i class="bi bi-star-fill"></i> */}
            <i className={'bi bi-star' + (status ? '-fill' : '')}></i>
        </button>
    );
};

BookMark.propTypes = {
    status: PropTypes.bool
};

export default BookMark;
