import * as React from "react";
import styles from "../styles/Home.module.css";
import Image from "next/image";

const MyImage = () => {
  return (
    <Image
      className={styles.profilePicture}
      src="/images/profile.jpg"
      height={400}
      width={320}
      layout="intrinsic"
    />
  );
};

export default MyImage;
