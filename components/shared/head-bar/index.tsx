import React, { useEffect } from "react";
import Modal from "react-modal";
import { useRouter } from "next/router";
import styles from "./index.module.scss";

interface HeadBarProps {
  children?: React.ReactNode;
}

const customStyles = {
  overlay: {
    backgroundColor: "0",
    top: "15vw",
  },
  content: {
    position: "absolute",
    inset: "0 0 0 64vw",
    width: "30vw",
    height: "10vw",
    padding: "0",
    borderRadius: "16px",
    border: "none",
    boxShadow:
      " 0 4px 4px 0 rgba(0, 0, 0, 0.2),  0 4px 10px 0 rgba(0, 0, 0, 0.10)",
  },
};

const ModalStyles = {
  width: "100%",
  height: "100%",
  fontSize: "14px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const HeadBar: React.FC = (props: HeadBarProps) => {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const history = useRouter();
  const backHandler = () => {
    history.back();
  };

  const controlModal = () => {
    setIsOpen(!modalIsOpen);
  };

  return (
    <div className={styles.bar}>
      <div className={styles.barFront}>
        <img src={"/img/back_arrow.svg"} onClick={backHandler} alt="back" />
        <img src={"/img/exit.svg"} alt="exit" />
      </div>
      <img
        onClick={() => controlModal()}
        className={styles.profile}
        src={"/img/profile.png"}
      />
      <Modal
        isOpen={modalIsOpen}
        ariaHideApp={false}
        style={customStyles}
        onRequestClose={() => setIsOpen(false)}
        shouldCloseOnOverlayClick={true}
      >
        <div style={ModalStyles}>切换账号</div>
      </Modal>
    </div>
  );
};

export default HeadBar;
