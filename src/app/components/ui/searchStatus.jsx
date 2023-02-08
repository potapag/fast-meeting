import React from 'react';
import PropTypes from 'prop-types';
const SearchStatus = ({ length }) => {
    const renderPhrase = (number) => {
        const lastOne = Number(number.toString().slice(-1));

        if (number > 4 && number < 15) return 'Человек готовы';

        if ([2, 3, 4].indexOf(lastOne) >= 0) return 'Человека готовы';

        if (lastOne === 1) return 'Человек готов';
    };

    return (
        <h1>
            <span className={'badge bg-' + (length > 0 ? 'primary' : 'danger')}>
                {length > 0
                    ? `${length} ${renderPhrase(length)} с тобой общатся`
                    : 'Ты один'}
            </span>
        </h1>
    );
};
SearchStatus.propTypes = {
    length: PropTypes.number
};

export default SearchStatus;
