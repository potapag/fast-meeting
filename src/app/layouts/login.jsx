import React, { useState } from 'react';
import TextField from '../components/textField';

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
            <TextField
                label="Email"
                name="email"
                value={data.email}
                onChange={handelChange}
            />
            <TextField
                label="Пароль"
                type="password"
                name="password"
                value={data.password}
                onChange={handelChange}
            />
        </form>
    );
};

export default Login;
