"use client";

import Sidebar from "@/components/Layout/Sidebar/Sidebar";
import styles from "@/styles/logged.module.scss";
import { ReactNode } from "react";

export default function LoggedLayout({ children }: { children: ReactNode }) {
  return (
    <div className={styles.container}>
      <Sidebar />
      {children}
    </div>
  );
}
