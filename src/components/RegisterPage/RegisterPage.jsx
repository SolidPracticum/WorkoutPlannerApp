import css from "./RegisterPage.module.scss";
import { useTranslation } from "react-i18next";
import "./../../18n";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function RegisterPage() {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const data = {
    email: email,
    password: password
  };
//   data.name;
  console.log(data.name);
  return (
    <div className={css.wrapper}>
      <div className={css.main}>
        <Link  to="/">
              <img className={css.close_img} src="./images/RegisterPage/cross_ic.png" alt="cross_icon" />
        </Link>
        <h1>{t("register.title")}</h1>
        <label className={css.label}>
          {t("register.email_phone")}
          <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label className={css.label}>
          {t("register.password")}
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <label className={css.checkbox}>
          <input type="checkbox" /> {t("register.consent")}
        </label>
        <div>
          <button>{t("register.more_btn")}</button>
        </div>
      </div>
    </div>
  );
}