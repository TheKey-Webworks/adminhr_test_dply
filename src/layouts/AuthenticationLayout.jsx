import React from "react";
import Styles from "../styles/layouts/AuthenticationLayout.module.css";
import logoImg from '../assets/test_logo.webp'
const AuthenticationLayout = ({ children }) => {
  return (
    <div className={Styles.container}>
      <main className={Styles.main_content}>{children}</main>
      <aside className={Styles.side_content}>
        <img style={{width: "50%"}} src={logoImg} alt="" />
      </aside>
    </div>
  );
};

export default AuthenticationLayout;
