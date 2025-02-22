import { FC, PropsWithChildren, useEffect } from "react";
import styles from "./styles.module.scss";

interface ModalProps extends PropsWithChildren {
  isOpen: boolean;
  onCancelClick: () => void;
}

export const Modal: FC<ModalProps> = ({ isOpen, children, onCancelClick }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add(styles.noScroll); // Adds 'overlay' class to body when modal opens
    } else {
      document.body.classList.remove(styles.noScroll); // Removes 'overlay' class when modal closes
    }

    // Cleanup the class when component unmounts or modal closes
    return () => {
      document.body.classList.remove(styles.noScroll);
    };
  }, []);
  return (
    isOpen && (
      <div className={styles.overlay} onClick={onCancelClick}>
        <div
          className={styles.modalContainer}
          onClick={(e) => e.stopPropagation()}
        >
          <button className={styles.closeButton} onClick={onCancelClick}>
            &times;
          </button>
          {children}
        </div>
      </div>
    )
  );
};
