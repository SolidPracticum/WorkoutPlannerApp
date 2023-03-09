import React from "react";
import scss from "./Cards.module.scss";
import { Link } from "react-router-dom";

function Cards({ t, title }) {
  return (
    <div className={scss.Cards}>
      <img src="/images/mainCards/backgroundImg.svg" alt="workout" />
      <div className={scss.text}>
        <Link className={scss.Link}>{t(title)}</Link>
      </div>
    </div>
  );
}

export default Cards;
