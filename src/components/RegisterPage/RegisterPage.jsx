import scss from "./RegisterPage.module.scss";
import { useTranslation } from "react-i18next";
import "./../../18n";
import { useState } from "react";
import { Link } from "react-router-dom";
import { registerData } from "./../../redux/Slice";
import { useDispatch } from "react-redux";

export default function RegisterPage() {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const addHandler = (e) => {
    e.preventDefault();
    dispatch(
      registerData({
        email: email,
        password: password
      })
    );
  };
  return (
    <div className={scss.wrapper}>
      <form>
        <div className={scss.main}>
          <Link to="/">
            <img
              className={scss.close_img}
              src="./images/RegisterPage/cross_ic.png"
              alt="cross_icon"
            />
          </Link>
          <h1>{t("register.title")}</h1>
          <label className={scss.label}>
            {t("register.email_phone")}
            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </label>
          <label className={scss.label}>
            {t("register.password")}
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>
          <label className={scss.checkbox}>
            <input type="checkbox" /> {t("register.consent")}
          </label>
          <div>
            <button onClick={addHandler}>{t("register.more_btn")}</button>
          </div>
        </div>
      </form>
    </div>
  );
}
