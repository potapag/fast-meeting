import React, { useState } from 'react';

const Login = () => {
    const [data, setData] = useState({ email: '', password: '' });
    const handelChange = ({ target }) => {
        setData((prevState) => ({
            ...prevState,
            [target.name]: target.value
        }));
    };
    return (
        <form action="">
            <div className="">
                <label htmlFor="email" className="">
                    Email
                </label>
                <input
                    type="text"
                    className=""
                    id="email"
                    name="email"
                    value={data.email}
                    onChange={handelChange}
                />
            </div>
            <div>
                <label htmlFor="password">Пароль</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={data.password}
                    onChange={handelChange}
                />
            </div>
        </form>
    );
};

export default Login;
