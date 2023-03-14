import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./ThirdRegisterModal.module.scss";
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
    <div className={styles.ThirdRegisterModal}>
      <div className={styles.wrapper}>
        <div className={styles.img}>
          <Link to="./">
            <img
              width={47}
              className={styles.arrow}
              src="Images/ThirdModalIcons/back7.png"
              alt="backArrow"
            />
          </Link>
          <Link to="./FourthModal">
            <img
              width={47}
              className={styles.close}
              src="Images/ThirdModalIcons/close_icon.png"
              alt="close"
            />
          </Link>
        </div>
        <div className={styles.mainText}>
          <h1>{t("goal.title")}</h1>
          <p>{t("goal.text")}</p>
        </div>
        <div className={styles.correctWeight}>
          <div
            onClick={() => setCheck(!isChecked)}
            className={isChecked ? styles.checkboxInput : styles.checkboxInputNonActive}
          ></div>
          <label
            className={styles.first}
            id={styles.checkbox1}
            value={weight}
            onChange={() => setWeight(!weight)}
          />{" "}
          <div className={styles.weightIcon}>
            <span className={styles.text1}> {t("goal.first")}</span> <br />
            <div className={styles.img}>
              <img src="Images/ThirdModalIcons/weight-loss.png" alt="wloseWeight Icon" />
            </div>
          </div>
        </div>

        <div className={styles.beFit}>
          <div
            onClick={() => setCheck2(!isChecked2)}
            className={isChecked2 ? styles.checkboxInput : styles.checkboxInputNonActive}
          ></div>
          <label
            className={styles.first}
            id={styles.checkbox1}
            value={weight}
            onChange={() => setFit(!fit)}
          />{" "}
          <div className={styles.weightIcon}>
            <span className={styles.text1}> {t("goal.second")}</span> <br />
            <div className={styles.img}>
              <img src="Images/ThirdModalIcons/tape.png" alt="tape" />
            </div>
          </div>
        </div>
        <div className={styles.muscles}>
          <div
            onClick={() => setCheck3(!isChecked3)}
            className={isChecked3 ? styles.checkboxInput : styles.checkboxInputNonActive}
          ></div>
          <label
            className={styles.first}
            id={styles.checkbox1}
            value={weight}
            onChange={() => setMuscles(!muscles)}
          />{" "}
          <div className={styles.musclesIcon}>
            <span className={styles.text1}> {t("goal.third")}</span> <br />
            <div className={styles.img}>
              <img src="Images/ThirdModalIcons/weight.png" alt="weight" />
            </div>
          </div>
        </div>
        <button onClick={addData} className={styles.next}>
          {t("goal.next")}
        </button>
      </div>
    </div>
  );
}
