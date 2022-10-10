import styles from "./Avatar.module.css";

export const Avatar = ({ src, hasBorder = true }) => {
  return (
    <img
      src={src}
      alt="Avatar image"
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
    />
  );
};
