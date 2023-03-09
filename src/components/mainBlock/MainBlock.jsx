import React, { useState } from "react";
import Aside from "../aside/Aside";
import Cards from "../mainCards/Cards";
import scss from "./MainBlock.module.scss";
import { data } from "../../constants/mainCards/constant";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { authData } from "../../redux/Slice";

function MainBlock() {
  const { t } = useTranslation();
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const addHandler = (e) => {
    e.preventDefault();
    dispatch(
      authData({
        login: login,
        password: password
      })
    );
  };

  return (
    <div className={scss.mainBlock}>
      <div className={scss.Aside}>
        <Aside t={t} />
      </div>
      <div className={scss.main}>
        <img src="/images/mainBlock/mainPhoto.svg" alt="mainBlock" />
        <form>
          <div className={scss.authWindow}>
            <p>{t("mainBlock.title")}</p>
            <input
              type="email"
              placeholder={t("mainBlock.email")}
              onChange={(e) => setLogin(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder={t("mainBlock.password")}
              required
              onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={addHandler}>{t("mainBlock.button")}</button>
          </div>
        </form>
      </div>
      <div className={scss.Cards}>
        {data.map((item) => (
          <Cards title={item.title} key={item.title} t={t} />
        ))}
      </div>
    </div>
  );
}

export default MainBlock;
