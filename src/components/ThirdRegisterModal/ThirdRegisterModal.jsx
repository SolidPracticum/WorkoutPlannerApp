import React, { useState } from "react";
import { Link } from "react-router-dom";
import scss from "./ThirdRegisterModal.module.scss";
import { useTranslation } from "react-i18next";
import { optionData } from "../../redux/Slice";
import { useDispatch } from "react-redux";
export default function ThirdRegisterModal() {
  const [weight, setWeight] = useState(false);
  const [fit, setFit] = useState(false);
  const [muscles, setMuscles] = useState(false);
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [isChecked, setCheck] = useState(false);
  const [isChecked2, setCheck2] = useState(false);
  const [isChecked3, setCheck3] = useState(false);
  const addData = () => {
    if (
      (weight == true && fit == true && muscles == true) ||
      (weight == false && fit == false && muscles == false)
    ) {
      alert(t("goal.alert"));
    } else {
      dispatch(
        optionData({
          weight: weight,
          fit: fit,
          muscles: muscles
        })
      );
    }
  };
  return (
    <div className={scss.ThirdRegisterModal}>
      <div className={scss.wrapper}>
        <div className={scss.img}>
          <Link to="./">
            <img
              width={47}
              className={scss.arrow}
              src="Images/ThirdModalIcons/back7.png"
              alt="backArrow"
            />
          </Link>
          <Link to="./FourthModal">
            <img
              width={47}
              className={scss.close}
              src="Images/ThirdModalIcons/close_icon.png"
              alt="close"
            />
          </Link>
        </div>
        <div className={scss.mainText}>
          <h1>{t("goal.title")}</h1>
          <p>{t("goal.text")}</p>
        </div>
        <div className={scss.correctWeight}>
          <div
            onClick={() => setCheck(!isChecked)}
            className={isChecked ? scss.checkboxInput : scss.checkboxInputNonActive}
          ></div>
          <label
            className={scss.first}
            id={scss.checkbox1}
            value={weight}
            onChange={() => setWeight(!weight)}
          />{" "}
          <div className={scss.weightIcon}>
            <span className={scss.text1}> {t("goal.first")}</span> <br />
            <div className={scss.img}>
              <img src="Images/ThirdModalIcons/weight-loss.png" alt="wloseWeight Icon" />
            </div>
          </div>
        </div>

        <div className={scss.beFit}>
          <div
            onClick={() => setCheck2(!isChecked2)}
            className={isChecked2 ? scss.checkboxInput : scss.checkboxInputNonActive}
          ></div>
          <label
            className={scss.first}
            id={scss.checkbox1}
            value={weight}
            onChange={() => setFit(!fit)}
          />{" "}
          <div className={scss.weightIcon}>
            <span className={scss.text1}> {t("goal.second")}</span> <br />
            <div className={scss.img}>
              <img src="Images/ThirdModalIcons/tape.png" alt="tape" />
            </div>
          </div>
        </div>
        <div className={scss.muscles}>
          <div
            onClick={() => setCheck3(!isChecked3)}
            className={isChecked3 ? scss.checkboxInput : scss.checkboxInputNonActive}
          ></div>
          <label
            className={scss.first}
            id={scss.checkbox1}
            value={weight}
            onChange={() => setMuscles(!muscles)}
          />{" "}
          <div className={scss.musclesIcon}>
            <span className={scss.text1}> {t("goal.third")}</span> <br />
            <div className={scss.img}>
              <img src="Images/ThirdModalIcons/weight.png" alt="weight" />
            </div>
          </div>
        </div>
        <button onClick={addData} className={scss.next}>
          {t("goal.next")}
        </button>
      </div>
    </div>
  );
}
