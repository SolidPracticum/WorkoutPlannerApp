import React from "react";
import InputModal from "./InputModal";
import { toggle } from "../redux/Slice";
import { useDispatch, useSelector } from "react-redux";
import "./FourthModal.scss";
import { useTranslation } from "react-i18next";

function FourthModal() {
  const { t, i18n } = useTranslation();
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  const modal = useSelector((state) => state.slice.modal);
  const dispatch = useDispatch();
  const toggleCounter = () => {
    dispatch(toggle());
  };
  return (
    <div className="modal">
      <div>
        <button onClick={() => changeLanguage("en")}>en</button>
        <button onClick={() => changeLanguage("ru")}>ru</button>
        <div>{t("text")}</div>
      </div>
      {modal && <InputModal toggleCounter={toggleCounter} />}
    </div>
  );
}

export default FourthModal;
