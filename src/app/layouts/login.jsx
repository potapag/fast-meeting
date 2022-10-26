import React, { useEffect, useState } from 'react';
import TextField from '../components/textField';
import { validator } from '../utils/validator';

const Login = () => {
    const [data, setData] = useState({ email: '', password: '' });
    const [errors, setErrors] = useState({});
    const handelChange = ({ target }) => {
        setData((prevState) => ({
            ...prevState,
            [target.name]: target.value
        }));
    };
    const validatorConfig = {
        email: {
            isRequired: {
                massage: 'Электронная почта обязательна для заполнения'
            },
            isEmail: { massage: 'Email введен некорректно' }
        },
        password: {
            isRequired: {
                massage: 'Пароль обязателен для заполнения'
            },
            isCapitalSimbol: {
                massage: 'Пароль должен содержать хотябы одну заглавнуь букву'
            }
        }
    };
    useEffect(() => {
        validate();
    }, [data]);
    const validate = () => {
        const errors = validator(data, validatorConfig);
        setErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const isValid = validate();
        if (!isValid) return;
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit}>
            <TextField
                label="Email"
                name="email"
                value={data.email}
                onChange={handelChange}
                error={errors.email}
            />
            <TextField
                label="Пароль"
                type="password"
                name="password"
                value={data.password}
                onChange={handelChange}
                error={errors.password}
            />
            <button>Submit</button>
        </form>
    );
};

export default Login;
