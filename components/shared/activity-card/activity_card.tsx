import React from 'react'
import styles from './index.module.css'
// import calender from "../../../public/calender.svg"  ??似乎是next引入图片的问题

const ActCard: React.FC = () => {
  return (
    <div className={styles.cardBox} >
      <div className={styles.cardDate}>
        <div style={{ marginBottom: "10px", width: "100%", textAlign: "center", fontWeight: "bold", color: "#fff", whiteSpace: "nowrap" }}>周四</div>
        <div style={{ width: "100%", textAlign: "center", fontWeight: "bold", color: "rgb(12,167,170)" }}>7/8</div>
      </div>
      <div className={styles.cardInfo}>
        <div className={styles.cardInfo_name}>ffffffffffffffffffffffffffff</div>
        <div className={styles.cardInfo_date}>
          <img src={"/img/calender.svg"} />
          <span>7/8 16:00 -- 7/8 16:00</span>
        </div>
      </div>
    </div >
  )
}
export default ActCard;
