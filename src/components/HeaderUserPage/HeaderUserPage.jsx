import { useTranslation } from "react-i18next";
import scss from "./HeaderUserPage.module.scss";
import "./../../i18n";
import { useState } from "react";
import question from "..//../headerImg/Vector.png";
import language from "..//../headerImg/language.png";
import pfp from "..//../headerImg/pfp.png";
export default function UserPage() {
  const [isLanguage, setLanguage] = useState(false);
  const { i18n } = useTranslation();
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };
  const [open] = useState(false);
  const isChangeLanguage = () => {
    setLanguage(!isLanguage);
    if (isLanguage == true) {
      changeLanguage("ru");
    } else {
      changeLanguage("en");
    }
  };
  return (
    <div>
      <div className={scss.reg}>
        <button className={scss.account}>W</button>
        <div className={scss.imgs}>
          <img src={question} className={scss.notifs} alt="question" />
          <img src={language} className={scss.notifs} alt="language" onClick={isChangeLanguage} />
          <img src={pfp} className={scss.pfp} alt="pfp" />
          <p className={scss.name}>Aлина</p>
          <div className={!open ? scss.SelectTranslation : scss.acive}></div>
        </div>
      </div>
    </div>
  );
}
