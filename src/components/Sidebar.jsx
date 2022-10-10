import { PencilLine } from "phosphor-react";
import styles from "./Sidebar.module.css";

export const SideBar = () => {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1509343256512-d77a5cb3791b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=40"
      />
      <div className={styles.profile}>
        <img
          src="https://github.com/bluniz.png"
          alt="imagem de perfil"
          className={styles.avatar}
        />
        <strong>Lucas Rosa</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href="">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
};
