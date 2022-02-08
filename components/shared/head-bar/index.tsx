import React, { Profiler, useEffect } from "react";
import Modal from "react-modal";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  customCenterStyles,
  switchStylesAdmin,
  switchStylesDefault,
} from "./modal-style";
import styles from "./index.module.scss";

interface HeadBarProps {
  profileDisplay?: boolean;
  switchModalForAdmin: boolean; //用于控制点击头像的切换按钮中是否显示管理员选项
}

const HeadBar: React.FC<HeadBarProps> = (props: HeadBarProps) => {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [centerModal, setCenterModal] = React.useState(false);
  const switchStyles = props.switchModalForAdmin
    ? switchStylesAdmin
    : switchStylesDefault;
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
      {props.profileDisplay ? (
        <img
          onClick={() => controlModal()}
          className={styles.profile}
          src={"/img/profile.png"}
        />
      ) : null}
      <Modal
        isOpen={modalIsOpen}
        ariaHideApp={false}
        style={switchStyles}
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
        {props.switchModalForAdmin ? (
          <>
            <div className={styles.cutline}></div>
            <div className={styles.switchModal}>我的管理</div>
          </>
        ) : null}
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
          <span></span>
          <Link href={"/login"}>
              <div className={styles.loginLink}>
                <img
                  style={{ width: "5vw", height: "5vw" }}
                  src={"/img/add.png"}
                />
                <span>登录组织账号</span>
              </div>
          </Link>
        </div>
      </Modal>
    </div>
  );
};

export default HeadBar;
