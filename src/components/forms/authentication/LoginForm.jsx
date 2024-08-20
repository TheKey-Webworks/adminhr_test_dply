import React, { useContext, useState } from "react";
import { CiLock, CiUser } from "react-icons/ci";
import Styles from "../../../styles/components/forms/Authentication.module.css";
import {
  loginFormData,
  loginFormOnChangeHandler,
  loginFormOnSubmitHandler,
} from "../../../utils/component_utils/forms/LoginForm.utils";
import { AuthContext } from "../../../context/AuthContext";

const LoginForm = () => {
  const [data, setData] = useState(loginFormData);
  const { setAuthenticationStatus } = useContext(AuthContext);
  return (
    <form
      onSubmit={(e) => {
        loginFormOnSubmitHandler(
          e,
          {
            username: data.username,
            password: data.password,
          },
          setAuthenticationStatus
        );
      }}
      className={Styles.form}
    >
      <div
        className={`${Styles.form_control} ${Styles.form_control_bottom_border}`}
      >
        <label className={Styles.fc_label}>Nombre de usuario</label>
        <div className={Styles.fc_div_row}>
          <input
            className={Styles.fc_input}
            type="text"
            name="username"
            onChange={(e) => loginFormOnChangeHandler(e, setData)}
            id=""
            value={data.username}
            placeholder="Ej.: @miUsuario123"
          />
          <CiUser size={25} />
        </div>
      </div>

      <div
        className={`${Styles.form_control} ${Styles.form_control_bottom_border}`}
      >
        <label className={Styles.fc_label}>Contraseña</label>
        <div className={Styles.fc_div_row}>
          <input
            className={Styles.fc_input}
            type="text"
            name="password"
            value={data.password}
            onChange={(e) => loginFormOnChangeHandler(e, setData)}
            id=""
            placeholder="Ej.: Abc123"
          />
          <CiLock size={25} />
        </div>
      </div>

      <div className={`${Styles.form_control} `}>
        <div className={`${Styles.fc_div_row} ${Styles.r_n_c_div}`}>
          <div className={Styles.fc_div_row}>
            <input
              onChange={(e) => loginFormOnChangeHandler(e, setData)}
              type="checkbox"
              checked={data.remember}
              name=""
              id=""
            />
            <label className={Styles.fc_label}>Recordarme</label>
          </div>
          <a href="">Recuperar acceso</a>
        </div>
      </div>

      <div className={Styles.form_control}>
        <div className={Styles.fc_div_row}>
          <button className={Styles.submit_btn}>Iniciar sesión</button>
          <button className={Styles.rq_access_btn}>Solicitar acceso</button>
        </div>
      </div>
    </form>
  );
};

export default LoginForm;
