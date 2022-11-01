import React, { useEffect, useState } from 'react';
import { validator } from '../../utils/validator';
import TextField from '../common/form/textField';
import CheckBoxFild from '../common/form/checkBoxFild';
// import * as yup from 'yup';

const LoginForm = () => {
    const [data, setData] = useState({
        email: '',
        password: '',
        stayOn: false
    });
    const [errors, setErrors] = useState({});
    const handelChange = (target) => {
        setData((prevState) => ({
            ...prevState,
            [target.name]: target.value
        }));
    };

    // const validateScheme = yup.object().shape({
    //     password: yup
    //         .string()
    //         .required('Пароль обязателен для заполнения')
    //         .matches(
    //             /(?=.*[A-Z])/,
    //             'Пароль должен содержать хотябы одну заглавнуь букву'
    //         )
    //         .matches(/(?=.*[0-9])/, 'Пароль должен содержать хотябы одну цифру')
    //         .matches(
    //             /(?=.*[!?_@#$%^&*])/,
    //             'Пароль должен содержать хотябы одн из специальных символов !?_@#$%^&*'
    //         )
    //         .matches(
    //             /(?=.{8,})/,
    //             'Пароль должен состоять минимум из 8 символов'
    //         ),
    //     email: yup
    //         .string()
    //         .required('Электронная почта обязательна для заполнения')
    //         .email('Email введен некорректно')
    // });

    const validatorConfig = {
        email: {
            isRequired: {
                message: 'Электронная почта обязательна для заполнения'
            },
            isEmail: { message: 'Email введен некорректно' }
        },
        password: {
            isRequired: {
                message: 'Пароль обязателен для заполнения'
            },
            isCapitalSimbol: {
                message: 'Пароль должен содержать хотябы одну заглавнуь букву'
            },
            isContainDigit: {
                message: 'Пароль должен содержать хотябы одну цифру'
            },
            min: {
                message: 'Пароль должен состоять минимум из 8 символов',
                value: 8
            }
        }
    };
    useEffect(() => {
        validate();
    }, [data]);
    const validate = () => {
        const errors = validator(data, validatorConfig);
        // validateScheme
        //     .validate(data)
        //     .then(() => setErrors({}))
        //     .catch((err) => setErrors({ [err.path]: err.massage }));
        setErrors(errors);
        return Object.keys(errors).length === 0;
    };
    const isValid = Object.keys(errors).length === 0;

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
            <CheckBoxFild
                name="stayOn"
                value={data.stayOn}
                onChange={handelChange}
            >
                {' '}
                Оставатся в системе{' '}
            </CheckBoxFild>

            <button
                type="submit"
                disabled={!isValid}
                className="btn btn-primary"
            >
                Submit
            </button>
        </form>
    );
};

export default LoginForm;
