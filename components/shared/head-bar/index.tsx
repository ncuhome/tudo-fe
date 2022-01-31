import React, { useEffect } from "react";
import Modal from "react-modal";
import Link from "next/link";
import { useRouter } from "next/router";
import { customCenterStyles, customSwitchStyles } from "./modal-style";
import styles from "./index.module.scss";

interface HeadBarProps {
  children?: React.ReactNode;
}

const HeadBar: React.FC = (props: HeadBarProps) => {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [centerModal, setCenterModal] = React.useState(false);
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
        style={customSwitchStyles}
        onRequestClose={() => setIsOpen(false)}
        shouldCloseOnOverlayClick={true}
      >
        <div
          className={styles.switchModal}
          onClick={() => {
            setCenterModal(true);
          }}
        >
          切换账号
        </div>
      </Modal>
      <Modal
        isOpen={centerModal}
        ariaHideApp={false}
        style={customCenterStyles}
        onRequestClose={() => setCenterModal(false)}
        shouldCloseOnOverlayClick={true}
      >
        <div className={styles.centerModal}>
          <div>test</div>
          <Link href={"/login"}>
            <a>
              <div className={styles.loginLink}>
                <img
                  style={{ width: "5vw", height: "5vw" }}
                  src={"/img/add.png"}
                />
                <span>登录组织账号</span>
              </div>
            </a>
          </Link>
        </div>
      </Modal>
    </div>
  );
};

export default HeadBar;
