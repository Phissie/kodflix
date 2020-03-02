import React from "react";
import "./Loading.css";
import Loader from "../../common/images/loading.gif";

export default function Loading() {
  //   return <div class="loader"></div>;
  return <img src={Loader} alt="loading"/>;
}
