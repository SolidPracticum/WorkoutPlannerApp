import React, { useState } from "react";
import Aside from "../aside/Aside";
import Cards from "../mainCards/Cards";
import scss from "./MainBlock.module.scss";
import { data } from "../../constants/mainCards/constant";

function MainBlock() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const dataLog = {
    login: login,
    password: password
  };
  console.log(dataLog);

  return (
    <div className={scss.mainBlock}>
      <div className={scss.Aside}>
        <Aside />
      </div>
      <div className={scss.main}>
        <img src="/images/mainBlock/mainPhoto.svg" alt="mainBlock" />
        <form>
          <div className={scss.authWindow}>
            <p>Авторизация</p>
            <input
              type="email"
              placeholder="E-mail"
              onChange={(e) => setLogin(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
            <button>Войти</button>
          </div>
        </form>
      </div>
      <div className={scss.Cards}>
        {data.map((item) => (
          <Cards title={item.title} />
        ))}
      </div>
    </div>
  );
}

export default MainBlock;
