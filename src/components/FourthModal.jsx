import React from "react";
import InputModal from "./InputModal";
import { toggle } from "../redux/Slice";
import { useDispatch, useSelector } from "react-redux";
import "./FourthModal.scss";

function FourthModal() {
  const modal = useSelector((state) => state.slice.modal);
  const dispatch = useDispatch();
  const toggleCounter = () => {
    dispatch(toggle());
  };
  return <div className="modal">{modal && <InputModal toggleCounter={toggleCounter} />}</div>;
}

export default FourthModal;
