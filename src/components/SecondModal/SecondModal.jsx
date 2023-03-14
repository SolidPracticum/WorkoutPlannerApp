import React, { useState } from "react";
import styles from "./SecondModal.module.scss";
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
      alert(t("reg.alert"));
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
    <div className={styles.wrapper}>
      <div className={styles.secondModal}>
        <div className={styles.img}>
          <Link to="/RegisterPage">
            <img
              width={47}
              className={styles.arrow}
              src="Images/SecondModalIcons/back7.png"
              alt="backArrow"
            />
          </Link>
          <Link to="/">
            <img
              width={47}
              className={styles.close}
              src="Images/SecondModalIcons/close_icon.png"
              alt="close"
            />
          </Link>
        </div>
        <div className={styles.mainText}>
          <h1>{t("reg.title")}</h1>
          <p>{t("reg.text")}</p>
        </div>

        <div className={styles.manIcon}>
          <div
            onClick={() => setCheck(!isChecked)}
            className={isChecked ? styles.checkboxInput : styles.checkboxInputNonActive}
          ></div>
          <label
            className={styles.first}
            id={styles.checkbox1}
            value={man}
            onChange={() => setMan(!man)}
          />{" "}
          <div className={styles.woman}>
            <span className={styles.female}>{t("reg.checkbox2")}</span> <br />
            <div className={styles.img}>
              <img src="Images/SecondModalIcons/male-gender.png" alt="womanGender" />
            </div>
          </div>
        </div>
        <div className={styles.womanIcon}>
          <div
            onClick={() => setCheck2(!isChecked2)}
            className={isChecked2 ? styles.checkboxInput : styles.checkboxInputNonActive}
          ></div>
          <label
            className={styles.first}
            id={styles.checkbox1}
            value={woman}
            onChange={() => setWoman(!woman)}
          />{" "}
          <div className={styles.woman}>
            <span className={styles.female}>{t("reg.checkbox1")}</span> <br />
            <div className={styles.img}>
              <img src="Images/SecondModalIcons/woman.png" alt="womanGender" />
            </div>
          </div>
        </div>
        <button onClick={addData} className={styles.next}>
          {t("reg.next")}
        </button>
      </div>
    </div>
  );
}
