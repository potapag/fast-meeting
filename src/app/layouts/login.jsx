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

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit}>
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
            <button>Submit</button>
        </form>
    );
};

export default Login;
