import React from "react";
import { Link } from "react-router-dom";
import scss from "./Aside.module.scss";
import { data } from "../../constants/aside/constant";

function Aside({ t }) {
  return (
    <div className={scss.Aside}>
      {data.map((item) => (
        <div className={scss.content} key={item.id}>
          <img src={item.img} alt={t(item.title)} />
          <Link className={scss.Link}>{t(item.title)}</Link>
        </div>
      ))}
    </div>
  );
}

export default Aside;
