import React from 'react';

const Login = () => {
    return (
        <form action="">
            <div className="">
                <label htmlFor="email" className="">
                    Email
                </label>
                <input type="text" className="" id="email" />
            </div>
            <div>
                <label htmlFor="password">Пароль</label>
                <input type="password" id="password" />
            </div>
        </form>
    );
};

export default Login;
