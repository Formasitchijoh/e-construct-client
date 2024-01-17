import React from "react";
import { ButtonTypes } from "../../types/CommonTypes";
import styles from "./buttonStyle.module.css";
import Image from "next/image";
const Buttons = (text: ButtonTypes) => {
  return (
    <div>
      <Image
        width={500}
        height={200}
        src={"/images/douala.jpg"}
        alt=""
        style={{
          width: "20rem",
          height: "10rem",
        }}
      />
      <button className={styles.main} type="button">
        {text.text}
      </button>
    </div>
  );
};

export default Buttons;
