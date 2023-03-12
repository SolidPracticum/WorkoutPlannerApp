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
    <div className={styles.wrapper}>
      <img className={styles.arrow} src="Images/SecondModalIcons/left-arrow.png" alt="backArrow" />
      <img className={styles.close} src="Images/SecondModalIcons/close.png" alt="close" />
      <h1>{t("goal.title")}</h1>
      <p>{t("goal.text")}</p>

      <div className={styles.correctWeight}>
        <input type="checkbox" value={weight} onChange={() => setWeight(!weight)} />{" "}
        <div className={styles.weightIcon}>
          <span className={styles.text1}> {t("goal.first")}</span> <br />
          <label htmlFor="checkbox1">
            <img src="Images/ThirdModalIcons/weight-loss.png" alt="weightLoss" />
          </label>
        </div>
      </div>
      <div className={styles.beFit}>
        <input type="checkbox" value={fit} onChange={() => setFit(!fit)} />{" "}
        <div className={styles.fitIcon}>
          <span className={styles.text2}> {t("goal.second")}</span> <br />
          <label htmlFor="checkbox2">
            <img src="Images/ThirdModalIcons/tape.png" alt="tape" />
          </label>
        </div>
      </div>
      <div className={styles.muscles}>
        <input type="checkbox" value={muscles} onChange={() => setMuscles(!muscles)} />{" "}
        <div className={styles.musclesIcon}>
          <span className={styles.text3}> {t("goal.third")}</span> <br />
          <label htmlFor="checkbox3">
            <img src="Images/ThirdModalIcons/weight.png" alt="weight" />
          </label>
        </div>
      </div>
      <Link to="/FourthRegisterModal">
        <button onClick={addData} className={styles.next}>
          {t("goal.next")}
        </button>
      </Link>
    </div>
  );
}
