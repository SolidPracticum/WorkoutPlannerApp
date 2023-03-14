import React, { useState } from "react";
import scss from "./SecondModal.module.scss";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { genderData } from "../../redux/Slice";
import { Link } from "react-router-dom";
export default function SecondModal() {
  const [woman, setWoman] = useState(false);
  const [man, setMan] = useState(false);
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [isChecked, setCheck] = useState(false);
  const [isChecked2, setCheck2] = useState(false);
  const addData = () => {
    if (man == true && woman == true) {
      alert(t("register.alert"));
    } else {
      dispatch(
        genderData({
          woman: woman,
          man: man
        })
      );
    }
  };
  return (
    <div className={scss.wrapper}>
      <div className={scss.secondModal}>
        <div className={scss.img}>
          <Link to="/RegisterPage">
            <img
              width={47}
              className={scss.arrow}
              src="Images/SecondModalIcons/back7.png"
              alt="backArrow"
            />
          </Link>
          <Link to="/">
            <img
              width={47}
              className={scss.close}
              src="Images/SecondModalIcons/close_icon.png"
              alt="close"
            />
          </Link>
        </div>
        <div className={scss.mainText}>
          <h1>{t("register.title")}</h1>
          <p>{t("register.text")}</p>
        </div>

        <div className={scss.manIcon}>
          <div
            onClick={() => setCheck(!isChecked)}
            className={isChecked ? scss.checkboxInput : scss.checkboxInputNonActive}
          ></div>
          <label
            className={scss.first}
            id={scss.checkbox1}
            value={man}
            onChange={() => setMan(!man)}
          />{" "}
          <div className={scss.woman}>
            <span className={scss.female}>{t("register.checkbox2")}</span> <br />
            <div className={scss.img}>
              <img src="Images/SecondModalIcons/male-gender.png" alt="womanGender" />
            </div>
          </div>
        </div>
        <div className={scss.womanIcon}>
          <div
            onClick={() => setCheck2(!isChecked2)}
            className={isChecked2 ? scss.checkboxInput : scss.checkboxInputNonActive}
          ></div>
          <label
            className={scss.first}
            id={scss.checkbox1}
            value={woman}
            onChange={() => setWoman(!woman)}
          />{" "}
          <div className={scss.woman}>
            <span className={scss.female}>{t("register.checkbox1")}</span> <br />
            <div className={scss.img}>
              <img src="Images/SecondModalIcons/woman.png" alt="womanGender" />
            </div>
          </div>
        </div>
        <button onClick={addData} className={scss.next}>
          {t("register.next")}
        </button>
      </div>
    </div>
  );
}
