import React, { useState } from "react";
import styles from "./SecondModal.module.scss";
const SecondModal = () => {
  const [woman] = useState(true);
  const [man] = useState(true);
  const handleChange = () => {};
  return (
    <div className={styles.secondModal}>
      <img className={styles.arrow} src="/Images/left-arrow.png" alt="" />
      <img className={styles.close} src="/Images/close.png" alt="" />
      <h1>Ваш пол?</h1>
      <p>Отвечая на наши вопросы Вы поможете нам составить Ваш персональный план тренировок</p>
      <div className={styles.womanIcon}>
        <input
          className={styles.first}
          type="checkbox"
          id={styles.checkbox1}
          value={woman}
          onChange={() => handleChange("woman")}
        />{" "}
        женский <br />
        <label for="checkbox1">
          <img src="/Images/woman.png" alt="" />
        </label>
      </div>
      <div className={styles.manIcon}>
        <input
          type="checkbox"
          id={styles.checkbox2}
          value={man}
          onChange={() => handleChange("man")}
        />{" "}
        мужской <br />
        <label for="checkbox2">
          <img src="/Images/man1.png" alt="" />
        </label>
      </div>
      <button>Далее</button>
    </div>
  );
};
export default SecondModal;
