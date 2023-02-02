import React from 'react';
import useMockData from '../utils/mockData';

const Main = () => {
    const { initialize } = useMockData();
    const handelClick = () => {
        console.log('clicked');
        initialize();
    };
    return (
        <div className="container mt-5">
            <h1>Main Page</h1>
            <h3>Иницеализация данных в FireBase</h3>
            <button className="btn btn-primary" onClick={handelClick}>
                Иницеализировать
            </button>
        </div>
    );
};

export default Main;
