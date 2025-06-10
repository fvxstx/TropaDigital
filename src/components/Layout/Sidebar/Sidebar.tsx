"use client";

import { useState } from "react";
import styles from "@/styles/sidebar.module.scss";
import Image from "next/image";
import TeamIcon from "../Icons/TeamIcon";
import PersonIcon from "../Icons/PersonIcon";
import LogoutIcon from "../Icons/LogoutIcon";
import InscricaoIcon from "../Icons/InscricaoIcon";
import CalendarIcon from "../Icons/CalendarIcon";
import BlocksIcon from "../Icons/BlocksIcon";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button
        className={styles.mobileToggle}
        onClick={toggleSidebar}
        aria-label="Toggle sidebar"
      >
        {isOpen ? <HiX size={20} /> : <HiMenuAlt3 size={20} />}
      </button>
      {isOpen && <div className={styles.overlay} onClick={toggleSidebar} />}

      <aside
        className={`${styles.sidebar} ${isOpen ? styles.sidebarOpen : ""}`}
      >
        <div className={styles.topContainer}>
          <Image
            src={"/logo.png"}
            alt="logo tropa digital"
            className={styles.logo}
            width={1000}
            height={1000}
          />

          <div className={styles.containerNav}>
            <p>MENU</p>
            <nav>
              <ul>
                <li>
                  <BlocksIcon className={styles.linkIcon} />
                  Dashboard
                </li>
                <li>
                  <CalendarIcon className={styles.linkIcon} />
                  Eventos
                </li>
                <li>
                  <TeamIcon className={styles.linkIcon} />
                  Equipes
                </li>
                <li>
                  <InscricaoIcon className={styles.linkIcon} />
                  Inscrições
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className={styles.bottomContainer}>
          <div className={styles.userContainer}>
            <div className={styles.userPhoto}>
              <Image
                src={"/kaique.png"}
                alt="logo"
                width={1000}
                height={1000}
              />
            </div>
            <div className={styles.nameTag}>
              <h3>Kaique Steck</h3>
              <p>Adminstrador</p>
            </div>
          </div>
          <div className={styles.buttonContainer}>
            <button>
              <PersonIcon className={styles.linkIcon} /> Alterar dados
            </button>
            <button>
              <LogoutIcon className={styles.linkIcon} /> Sair
            </button>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
