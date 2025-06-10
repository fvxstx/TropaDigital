"use client";

import styles from "@/styles/page.module.scss";
import { useRouter } from "next/navigation";

const LoginForm = () => {
  const navigation = useRouter();

  return (
    <form action="" className={styles.formContainer}>
      <div className={styles.boxLabelInput}>
        <label htmlFor="">Email</label>
        <input placeholder="email@email.com" type="email" />
      </div>
      <div className={styles.boxLabelInput}>
        <label htmlFor="">Senha</label>
        <input placeholder="*****" type="password" />
      </div>
      <button
        type="button"
        onClick={() => {
          navigation.push("/dashboard");
        }}
      >
        Enviar
      </button>
    </form>
  );
};

export default LoginForm;
