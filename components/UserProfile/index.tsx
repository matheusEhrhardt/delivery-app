import Image from "next/image";
import { IconArrowTopDown } from "components/IconFamily";
import Styles from "./styles.module.css";

export const UserProfile = () => {
  return (
    <div className={Styles.user_profile}>
      <Image src="/avatar.png" alt="Avatar" width={48} height={48} />
      <div className={Styles.user_data}>
        <h3>Grupo Unama </h3>
        <p>grupounama@gmail.com</p>
      </div>
      <div className={Styles.button}>
        <IconArrowTopDown color="#000" />
      </div>
    </div>
  );
};
