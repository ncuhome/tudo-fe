import React from "react";
import Modal from "react-modal";
import { Link, useNavigate } from "react-router-dom";
import {
  customCenterStyles,
  switchStylesDefault,
  switchStylesComplex,
} from "./modal-style";
import styles from "./index.module.scss";

interface HeadBarProps {
  profileDisplay?: boolean;
  switchModalRole?: string | null; //用于控制点击头像的切换按钮中显示的内容 ,有"user", "admin", "team"三种选项, 分别代表普通用户, 超级管理员, 社团账户
  nickName?: string | null;
}

const HeadBar: React.FC<HeadBarProps> = (props: HeadBarProps) => {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [centerModal, setCenterModal] = React.useState(false);
  const navigate = useNavigate();

  const switchStyles =
    props.switchModalRole === "user"
      ? switchStylesDefault
      : switchStylesComplex;
  let switchModalText: string = "";
  let hrefForRole: string = "";
  let nickName = "无名氏";
  if (props.nickName) nickName = props.nickName;

  switch (props.switchModalRole) {
    case "user":
      break;
    case "admin":
      switchModalText = "我的管理";
      hrefForRole = "/my-manage";
      break;
    case "team":
      switchModalText = "发布新活动";
      hrefForRole = "/team-home/new-act";
      break;
    default:
      break;
  }

  const controlModal = () => {
    setIsOpen(!modalIsOpen);
  };

  return (
    <div className={styles.bar}>
      <div className={styles.barFront}>
        <img
          src={"/img/back_arrow.svg"}
          onClick={() => navigate(-1)}
          alt="back"
        />
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
        {props.switchModalRole === "user" ? null : (
          <>
            <div className={styles.cutline}></div>
            <Link style={{ color: "unset" }} to={hrefForRole}>
              <div className={styles.switchModal}>{switchModalText}</div>
            </Link>
          </>
        )}
      </Modal>
      <Modal
        isOpen={centerModal}
        ariaHideApp={false}
        style={customCenterStyles}
        onRequestClose={() => setCenterModal(false)}
        shouldCloseOnOverlayClick={true}
      >
        <div className={styles.centerModal}>
          <div>{nickName}</div>
          <span></span>
          <Link style={{ color: "unset" }} to={"/login"}>
            <div className={styles.loginLink}>
              <img
                style={{ width: "5vw", height: "5vw" }}
                src={"/img/add.png"}
              />
              <span>登录其他账号</span>
            </div>
          </Link>
        </div>
      </Modal>
    </div>
  );
};

export default HeadBar;
