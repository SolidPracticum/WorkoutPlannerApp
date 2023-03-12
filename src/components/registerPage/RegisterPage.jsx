import scss from "./RegisterPage.module.scss";
import { useTranslation } from "react-i18next";
import "./../../i18n";
import { useState } from "react";
import { Link } from "react-router-dom";
import { registerData } from "./../../redux/Slice";
import { useDispatch } from "react-redux";

export default function RegisterPage() {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isChecked, setCheck] = useState(false);
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
        <div className={scss.container}>
          <div className={scss.main}>
            <div className={scss.close_img}>
              <Link to="/">
                <img src="./images/registerPage/close_icon.png" alt="close img" />
              </Link>
            </div>
            <h1>{t("register_page.title")}</h1>
            <label className={scss.label}>
              {t("register_page.email_phone")}
              <input type="text" onChange={(e) => setEmail(e.target.value)} required />
            </label>
            <label className={scss.label}>
              {t("register_page.password")}
              <input type="password" onChange={(e) => setPassword(e.target.value)} required />
            </label>
            <label className={scss.checkbox}>
              <div
                onClick={() => setCheck(!isChecked)}
                className={isChecked ? scss.checkboxInput : scss.checkboxInputNonActive}
              ></div>
              {t("register_page.consent")}
            </label>
            <div>
              <button onClick={isChecked && addHandler}>{t("register_page.more_btn")}</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
