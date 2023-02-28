import { useTranslation } from "react-i18next";
import scss from "./Header.module.scss";
import "./../../i18n";
import image from "./Vector.png";
import img from "./Vector1.png";
import elp from "./Ellipse.png";

export default function Header() {
  const { t, i18n } = useTranslation();
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };
  return (
    <div>
      <div className={scss.reg}>
        <button className={scss.account}>W</button>
        <img className={scss.img} src={img} alt="notification" />
        <img className={scss.image} src={image} alt="qestionMark" />
        <img className={scss.ellipse} src={elp} alt="pfp" />
        <p className={scss.name}>Aлинa</p>
      </div>
      <div>
        <h1>{t("header.title")}</h1>
        <button onClick={() => changeLanguage("en")}>EN</button>
        <button onClick={() => changeLanguage("ru")}>RU</button>
      </div>
    </div>
  );
}
