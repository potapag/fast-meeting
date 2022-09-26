import React from "react";

const BookMark = ({ status, ...rest }) => {
    return (
        <button {...rest}>
            {/* <i class="bi bi-star-fill"></i> */}
            <i className={"bi bi-star" + (status ? "-fill" : "")}></i>
        </button>
    );
};

export default BookMark;
