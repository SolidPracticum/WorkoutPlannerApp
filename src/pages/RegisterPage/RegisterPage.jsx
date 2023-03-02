import css from "./RegisterPage.module.scss";
import { useTranslation } from "react-i18next";
import "./../../i18n";

export default function RegisterPage() {
  const { t } = useTranslation();
  return (
    <div className={css.wrapper}>
      <div className={css.main}>
        <h1>{t("register.title")}</h1>
        <label className={css.email_label}>
          {t("register.email_phone")}
          <input type="text" />
        </label>
        <label className={css.password_label}>
          {t("register.password")}
          <input type="password" />
        </label>
        <label className={css.checkbox}>
          <input type="checkbox" /> {t("register.consent")}
        </label>
        <button>{t("register.more_btn")}</button>
      </div>
    </div>
  );
}
