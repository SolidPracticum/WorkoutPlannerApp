import React, { useState } from "react";
import styles from "./SecondModal.module.scss";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { genderDate } from "../../redux/Slice";
export default function SecondModal() {
  const [woman, setWoman] = useState(false);
  const [man, setMan] = useState(false);
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const addData = () => {
    if (man == true && woman == true) {
      alert(t("reg.alert"));
    } else {
      dispatch(
        genderDate({
          woman: woman,
          man: man
        })
      );
    }
  };
  return (
    <div className={styles.secondModal}>
      <img className={styles.arrow} src="Images/SecondModalIcons/left-arrow.png" alt="backArrow" />
      <img className={styles.close} src="Images/SecondModalIcons/close.png" alt="close" />
      <h1>{t("reg.title")}</h1>
      <p>{t("reg.text")}</p>

      <div className={styles.manIcon}>
        <input type="checkbox" id={styles.checkbox2} value={man} onChange={() => setMan(!man)} />{" "}
        <div className={styles.man}>
          <span className={styles.male}>{t("reg.checkbox2")} </span>
          <label htmlFor="checkbox2">
            <img src="Images/SecondModalIcons/male-gender.png" alt="maleGender" />
          </label>
        </div>
      </div>
      <div className={styles.womanIcon}>
        <input
          className={styles.first}
          type="checkbox"
          id={styles.checkbox1}
          value={woman}
          onChange={() => setWoman(!woman)}
        />{" "}
        <div className={styles.woman}>
          <span className={styles.female}>{t("reg.checkbox1")} </span>
          <br />
          <label htmlFor="checkbox1">
            <img src="Images/SecondModalIcons/woman.png" alt="womanGender" />
          </label>
        </div>
      </div>
      <button onClick={addData} className={styles.next}>
        {t("reg.next")}
      </button>
    </div>
  );
}
