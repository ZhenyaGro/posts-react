import React, { useContext } from 'react';
import { MyInput } from '../components/UI/input/MyInput';
import { MyButton } from '../components/UI/button/MyButton';
import { AuthContext } from '../context';

export const Login = () => {
  const { setIsAuth } = useContext(AuthContext);

  const login = (event) => {
    event.preventDefault();
    setIsAuth(true);
    localStorage.setItem('auth', 'true');
  };

  return (
    <div>
      <h1>Авторизация</h1>
      <form onSubmit={login}>
        <MyInput placeholder="Логин" type="text" />
        <MyInput placeholder="Пароль" type="password" />
        <MyButton>Войти</MyButton>
      </form>
    </div>
  );
};
