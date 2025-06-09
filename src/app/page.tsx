import Image from "next/image";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={styles.loginContainer}>
          <h1>
            <Image
              src={"/logo.png"}
              alt="logo"
              width={1000}
              height={1000}
              className={styles.logo}
            />
          </h1>
          <div className={styles.containerWelcome}>
            <h2>Bem-vindo de volta</h2>
            <p>Entre com sua conta para acessar o perfil</p>
          </div>

          <form action="" className={styles.formContainer}>
            <div className={styles.boxLabelInput}>
              <label htmlFor="">Email</label>
              <input placeholder="email@email.com" type="email" />
            </div>
            <div className={styles.boxLabelInput}>
              <label htmlFor="">Senha</label>
              <input placeholder="*****" type="password" />
            </div>
            <button>Enviar</button>
          </form>
        </div>
        <div className={styles.containerPerson}>
          <Image
            src={"/person.png"}
            alt="pessoa com um notebook e celular"
            width={1000}
            height={1000}
            className=""
          />
        </div>
      </div>
    </div>
  );
}
