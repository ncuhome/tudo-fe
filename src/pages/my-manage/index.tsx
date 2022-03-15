import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import HeadBar from "@/components/shared/head-bar";
import styles from "./index.module.scss";
import { getOrgStatus } from "@/network/api/get-org-status";

const MyManage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [resData, setResData] = useState({
    organization: "",
    register: false,
  });

  const fetchOrgStatus: any = async () => {
    try {
      setResData({
        organization: "",
        register: false,
      });
      const res = await getOrgStatus();
      setResData(res);
      setIsLoaded(true);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchOrgStatus();
    if (!resData.organization) {
    }
  }, []);

  return (
    <div className={styles.background}>
      <HeadBar />
      <div className={styles.card_list}>
        {resData.register ? (
          <div className={styles.account_card_active}>
            <img src={"/img/img.svg"} />
            <span>家园工作室</span>
            <Link to="/my-manage/amend-team" replace>
              <span>编辑</span>
            </Link>
          </div>
        ) : (
          <div className={styles.account_card_inactive}>
            <img src={"/img/img.svg"} />
            <span>家园工作室</span>
            <Link to="/my-manage/amend-team" replace>
              {isLoaded ? (
                <span>激活</span>
              ) : (
                <span style={{ marginLeft: "20vw", color: "#9f9fa4" }}>
                  loading...
                </span>
              )}
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyManage;
