import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import LoginForm from '../components/ui/loginForm';
import RegistrForm from '../components/ui/registrForm';

const Login = () => {
    const { type } = useParams();

    const [formType, setFormType] = useState(
        type === 'registr' ? type : 'login'
    );
    const toggleFormType = () => {
        setFormType((prevState) =>
            prevState === 'register' ? 'login' : 'register'
        );
    };
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6 offset-md-3 shadow p-3">
                    {formType === 'register' ? (
                        <>
                            <h3 className="mb-3">Регистрация</h3>

                            <RegistrForm />
                            <p>
                                Уже есть аккаунт?{' '}
                                <a role="button" onClick={toggleFormType}>
                                    {' '}
                                    Войти
                                </a>
                            </p>
                        </>
                    ) : (
                        <>
                            <h3 className="mb-3">Авторизоваться</h3>

                            <LoginForm />
                            <p>
                                Нет аккаунта?{' '}
                                <a role="button" onClick={toggleFormType}>
                                    {' '}
                                    Зарегистрироваться
                                </a>
                            </p>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Login;
